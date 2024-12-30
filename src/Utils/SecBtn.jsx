export default function SecBtn({ children, onClick = () => {}, style }) {
  return (
    <button className="sec-btn" onClick={onClick} style={style}>
      {children}
    </button>
  );
}
