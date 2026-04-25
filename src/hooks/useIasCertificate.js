import { useState, useEffect } from "react";

const memory = new Map();

function fetchCertificate(iasId) {
  if (memory.has(iasId)) {
    return Promise.resolve(memory.get(iasId));
  }
  const url = `https://api2.icef.com/public/account/certificate/${iasId}`;
  return fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("IAS lookup failed"))))
    .then((data) => {
      const rec = data?.records?.[0];
      const imageUrl = rec?.CDN_link_to_IAS_logo__c;
      const accountId = rec?.Master_Account__c;
      if (!imageUrl || !accountId) {
        throw new Error("No IAS badge in response");
      }
      const out = {
        imageUrl,
        profileUrl: `https://www.icef.com/agency/${accountId}`,
        verifyUrl: rec.IAS_Verify_URL__c,
      };
      memory.set(iasId, out);
      return out;
    });
}

export function useIasCertificate(iasId) {
  const [state, setState] = useState({
    data: iasId && memory.has(iasId) ? memory.get(iasId) : null,
    loading: Boolean(iasId && !memory.has(iasId)),
    error: null,
  });

  useEffect(() => {
    if (!iasId) {
      setState({ data: null, loading: false, error: null });
      return;
    }
    if (memory.has(iasId)) {
      setState({ data: memory.get(iasId), loading: false, error: null });
      return;
    }
    setState({ data: null, loading: true, error: null });
    let cancel = false;
    fetchCertificate(iasId)
      .then((data) => {
        if (!cancel) setState({ data, loading: false, error: null });
      })
      .catch((err) => {
        if (!cancel) setState({ data: null, loading: false, error: err });
      });
    return () => {
      cancel = true;
    };
  }, [iasId]);

  return state;
}
