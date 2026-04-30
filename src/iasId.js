const DEFAULT_IAS_ID = "6630";

const raw = import.meta.env.VITE_ICEF_IAS_ID ?? DEFAULT_IAS_ID;
const t = String(raw).trim();

export function getIasId() {
  if (!t) return null;
  if (!/^\d{4}$/.test(t)) return null;
  return t;
}
