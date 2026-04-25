const id = import.meta.env.VITE_ICEF_IAS_ID;
const t = id != null ? String(id).trim() : "";

export function getIasId() {
  if (!t) return null;
  if (!/^\d{4}$/.test(t)) return null;
  return t;
}
