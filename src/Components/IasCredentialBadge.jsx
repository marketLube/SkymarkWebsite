import { getIasId } from "../iasId";
import { useIasCertificate } from "../hooks/useIasCertificate";

const headerImgStyle = { display: "block" };
const footerImgStyle = { height: "36px", width: "auto", display: "block" };

export function IasCredentialBadge({ variant = "header" }) {
  const iasId = getIasId();
  const { data, loading, error } = useIasCertificate(iasId);

  if (!iasId) return null;
  if (error || (!loading && !data)) return null;
  if (loading && !data) {
    return (
      <span
        className="ias-credential-badge ias-credential-badge--loading"
        style={{
          minWidth: variant === "footer" ? 60 : 48,
          minHeight: variant === "footer" ? 32 : 24,
        }}
        aria-hidden
      />
    );
  }

  const isHeader = variant === "header";
  const imgStyle = isHeader ? headerImgStyle : footerImgStyle;
  const className = isHeader
    ? "ias-credential-badge"
    : "ias-credential-badge ias-credential-badge--footer";

  const content = (
    <img
      className={className}
      src={data.imageUrl}
      alt="ICEF Agency Status (IAS)"
      style={imgStyle}
      decoding="async"
    />
  );

  if (!isHeader) {
    return (
      <a
        href={data.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <a
      className="ias-credential-badge-link"
      href={data.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {content}
    </a>
  );
}
