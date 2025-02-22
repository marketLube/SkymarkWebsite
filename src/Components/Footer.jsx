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
              <a
                href="https://maps.app.goo.gl/eBr97DPVbNmS4xa79"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trivandrum
              </a>
              <a
                href="https://maps.app.goo.gl/E3AZSo65zrHFAck8A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kochi
              </a>
              <a
                href="https://maps.app.goo.gl/j227pCqL5bPfCiTF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kannur
              </a>
              <a
                href="https://maps.app.goo.gl/D4gCifH2TwcFSVVG7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kozhikode
              </a>
              <a
                href="https://maps.app.goo.gl/zfv7ZnJ3zUu5UBVdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manjeri
              </a>
              <a
                href="https://maps.app.goo.gl/4D5bkwNa1EQNyRDL9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kottayam
              </a>
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
