export default function Bottom() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9876543210", "_blank");
  };

  return (
    <section
      className="bottom"
      onClick={handleWhatsAppClick}
      style={{ cursor: "pointer" }}
    >
      <div className="bottom-hello">hello</div>
      <div className="bottom-content">Say Hi</div>
    </section>
  );
}
