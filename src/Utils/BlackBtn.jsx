export default function BlackBtn({ children, onClick = () => {}, style }) {
  return (
    <button className="black-btn" onClick={onClick} style={style}>
      {children}
    </button>
  );
}
