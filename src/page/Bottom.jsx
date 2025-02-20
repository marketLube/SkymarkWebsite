export default function Bottom() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/81389 29049", "_blank");
  };

  return (
    <section
      className="bottom"
      //  id="contact"
    >
      <div className="bottom-hello">hello</div>
      <div
        className="bottom-content"
        onClick={handleWhatsAppClick}
        style={{ cursor: "pointer" }}
      >
        Say Hi
      </div>
    </section>
  );
}
