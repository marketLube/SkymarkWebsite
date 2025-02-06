import { useScroll, motion } from "motion/react";

export default function Footer() {
  const { scrollYProgress } = useScroll();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-left-logo">
            <img
              src="https://res.cloudinary.com/ds07e7rod/image/upload/v1738836367/skymarkLogo_drgzcw.svg"
              alt="logo"
            />
            <div className="branches">
              <span>Trivandrum</span>
              <span>Kochi</span>
              <span>Kannur</span>
              <span>Kozhikode</span>
              <span>Manjeri</span>
              <span>Kottayam</span>
            </div>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-copyright">
            <span>Designed by</span>
            <a
              href="https://www.instagram.com/marketlube/"
              target="_blank"
              rel="noopener noreferrer"
              className="market-lube"
            >
              Market Lube
            </a>
          </div>
        </div>
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress"
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
