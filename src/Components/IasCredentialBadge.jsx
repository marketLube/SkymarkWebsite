import { getIasId } from "../iasId";
import { useIasCertificate } from "../hooks/useIasCertificate";

export function IasCredentialBadge({ variant = "header" }) {
  const iasId = getIasId();
  const { data, loading, error } = useIasCertificate(iasId);

  if (!iasId) return null;
  if (error || (!loading && !data)) return null;

  const isHeader = variant === "header";

  if (loading && !data) {
    if (isHeader) {
      return (
        <span
          className="header-ias-credential header-ias-credential--loading"
          aria-hidden
        />
      );
    }
    return (
      <span
        className="ias-credential-badge ias-credential-badge--loading"
        style={{ minWidth: 60, minHeight: 32 }}
        aria-hidden
      />
    );
  }

  if (isHeader) {
    return (
      <a
        className="header-ias-credential"
        href={data.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ICEF Verified – view our IAS profile"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="header-ias-credential__label" aria-hidden>
          <span>ICEF</span>
          <span>Verified</span>
        </span>
        <img
          className="header-ias-credential__image"
          src={data.imageUrl}
          alt="ICEF Agency Status (IAS) verified badge"
          decoding="async"
        />
      </a>
    );
  }

  return (
    <a
      href={data.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="ias-credential-badge ias-credential-badge--footer"
        src={data.imageUrl}
        alt="ICEF Agency Status (IAS)"
        style={{ height: "36px", width: "auto", display: "block" }}
        decoding="async"
      />
    </a>
  );
}
