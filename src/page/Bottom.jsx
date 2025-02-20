export default function Bottom() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9876543210", "_blank");
  };

  return (
    <section className="bottom" id="contact">
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
