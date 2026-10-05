import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { PiCheckCircleFill, PiPhone } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  XALE_COUNTRY_FIELD,
  XALE_FORM_KEY,
} from "./landingContent";

// The fields come from a Xale Web Form (Skymark workspace) embedded in an
// iframe; submissions land straight in the CRM. This card only frames it.
const EMBED_SRC = "https://api.xale.in/api/v1/public/forms/embed.js";
const SLOW_AFTER_MS = 8000;
// Clears the fixed landing header when the form scrolls to a field.
const SCROLL_OFFSET = "80";

// Resolves once embed.js has run (it renders every [data-xale-form] on load).
function loadXaleForms() {
  return new Promise((resolve, reject) => {
    if (window.XaleForms) {
      window.XaleForms.load();
      resolve();
      return;
    }
    let script = document.querySelector(`script[src="${EMBED_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
  });
}

function ContactFallback({ children }) {
  return (
    <div className="lp-form-fallback">
      <p>{children}</p>
      <div className="lp-form-fallback-actions">
        <a className="lp-btn lp-btn-primary lp-btn-block" href={PHONE_TEL}>
          <PiPhone aria-hidden /> Call {PHONE_DISPLAY}
        </a>
        <a
          className="lp-btn lp-btn-whatsapp lp-btn-block"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

function XaleFormEmbed({ hostRef, onSubmitted }) {
  const onSubmittedRef = useRef(onSubmitted);
  onSubmittedRef.current = onSubmitted;
  const [status, setStatus] = useState("loading"); // loading | ready | failed
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let alive = true;

    const watchFrame = (frame) => {
      frame.addEventListener("load", () => alive && setStatus("ready"), {
        once: true,
      });
    };
    const observer = new MutationObserver(() => {
      const frame = host.querySelector("iframe");
      if (frame) {
        observer.disconnect();
        watchFrame(frame);
      }
    });
    observer.observe(host, { childList: true });

    const handleSubmitted = () => onSubmittedRef.current();
    host.addEventListener("xale:submitted", handleSubmitted);

    loadXaleForms().catch(() => alive && setStatus("failed"));
    const slowTimer = window.setTimeout(() => alive && setSlow(true), SLOW_AFTER_MS);

    return () => {
      alive = false;
      observer.disconnect();
      window.clearTimeout(slowTimer);
      host.removeEventListener("xale:submitted", handleSubmitted);
    };
  }, []);

  if (status === "failed") {
    return (
      <ContactFallback>
        The form couldn&apos;t load just now. Reach a counsellor directly:
      </ContactFallback>
    );
  }

  return (
    <div className={`lp-embed${status === "ready" ? " is-ready" : ""}`}>
      {status !== "ready" && (
        <div className="lp-embed-skeleton" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="lp-skel-field">
              <span className="lp-skel-label" />
              <span className="lp-skel-input" />
            </span>
          ))}
          <span className="lp-skel-button" />
        </div>
      )}
      <div
        ref={hostRef}
        data-xale-form={XALE_FORM_KEY}
        data-title="Talk to a counsellor"
        data-min-height="520"
        data-scroll-offset={SCROLL_OFFSET}
      />
      {status !== "ready" && slow && (
        <p className="lp-embed-slow">
          Taking a while? Call{" "}
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> or{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          .
        </p>
      )}
    </div>
  );
}

const LeadForm = forwardRef(function LeadForm(_props, ref) {
  const [submitted, setSubmitted] = useState(false);
  const hostRef = useRef(null);

  useImperativeHandle(ref, () => ({
    // Pre-selects the form's Country. The attribute covers an embed that
    // hasn't loaded yet; XaleForms.prefill (newer embed.js only) covers a
    // form that's already on screen and queues until its iframe is ready.
    prefillCountry(optionId) {
      const host = hostRef.current;
      if (!host || !optionId) return;
      host.setAttribute(`data-prefill-${XALE_COUNTRY_FIELD}`, optionId);
      window.XaleForms?.prefill?.(host, { [XALE_COUNTRY_FIELD]: optionId });
    },
  }));

  if (submitted) {
    return (
      <div className="lp-form-card lp-form-success" role="status">
        <span className="lp-success-icon" aria-hidden>
          <PiCheckCircleFill />
        </span>
        <h2 className="lp-form-title">Thank you!</h2>
        <p className="lp-form-sub">
          We&apos;ve received your details. A Skymark counsellor will call you
          soon.
        </p>
        <a
          className="lp-btn lp-btn-whatsapp lp-btn-block"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden /> Can&apos;t wait? Chat on WhatsApp
        </a>
        <button
          type="button"
          className="lp-text-btn"
          onClick={() => setSubmitted(false)}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="lp-form-card" role="region" aria-labelledby="lp-form-title">
      <div className="lp-form-head">
        <h2 className="lp-form-title" id="lp-form-title">
          Talk to a counsellor
        </h2>
        <p className="lp-form-sub">
          Share a few details and we&apos;ll call you back to plan your
          study-abroad journey.
        </p>
      </div>
      {XALE_FORM_KEY ? (
        <XaleFormEmbed
          hostRef={hostRef}
          onSubmitted={() => setSubmitted(true)}
        />
      ) : (
        <ContactFallback>Reach a counsellor directly:</ContactFallback>
      )}
    </div>
  );
});

export default LeadForm;
