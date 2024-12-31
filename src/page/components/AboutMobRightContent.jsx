export default function AboutMobRightContent({ refs = null, img = null }) {
  return (
    <article className="about-scroll-mob-right-content" ref={refs}>
      <div className="img-container">
        <img src={img} alt="about" />
      </div>
    </article>
  );
}
