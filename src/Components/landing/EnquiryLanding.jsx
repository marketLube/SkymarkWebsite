import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MotionConfig, motion } from "motion/react";
import {
  PiArrowRight,
  PiBuildings,
  PiCalendarCheck,
  PiCompass,
  PiGlobeHemisphereEast,
  PiGraduationCap,
  PiMapPin,
  PiPhone,
  PiPlayFill,
  PiSealCheck,
  PiTimer,
  PiWallet,
} from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import LeadForm from "./LeadForm";
import {
  BRANCHES,
  DESTINATIONS,
  LOGO_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  STEPS,
  VIDEOS,
  VISA_WINS,
  WHATSAPP_URL,
  cld,
} from "./landingContent";
import { IasCredentialBadge } from "../IasCredentialBadge";

const EASE = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="lp-section-head">
      <span className="lp-eyebrow">{eyebrow}</span>
      <h2 className="lp-h2">{title}</h2>
      {sub && <p className="lp-section-sub">{sub}</p>}
    </Reveal>
  );
}

function scrollToId(id, block = "start") {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
}

function LandingHeader({ onEnquire }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["destinations", "Destinations"],
    ["process", "How it works"],
    ["stories", "Stories"],
    ["contact", "Branches"],
  ];

  return (
    <div
      role="banner"
      className={`lp-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="lp-wrap lp-header-row">
        <a
          href="/"
          className="lp-logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0 });
          }}
        >
          <img src={LOGO_URL} alt="Skymark Education" width="160" height="40" />
        </a>

        <div className="lp-header-links" role="navigation" aria-label="On this page">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="lp-header-actions">
          <a className="lp-header-phone" href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`}>
            <PiPhone aria-hidden />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <button type="button" className="lp-btn lp-btn-primary lp-btn-sm" onClick={onEnquire}>
            Enquire now
          </button>
        </div>
      </div>
      <IasCredentialBadge variant="header" />
    </div>
  );
}

const HIGHLIGHTS = [
  { icon: PiWallet, label: "Fees starting from", value: "₹8 Lakhs*" },
  { icon: PiGraduationCap, label: "Scholarships worth", value: "₹10 Lakhs*" },
  { icon: PiTimer, label: "Offer letter in", value: "48 Hours*" },
];

const TRUST = [
  { icon: PiSealCheck, text: "ICEF accredited agency" },
  { icon: PiCalendarCheck, text: "Guiding students since 2010" },
  { icon: PiBuildings, text: "6 branches across Kerala" },
  { icon: PiGlobeHemisphereEast, text: "7 study destinations" },
];

function VideoCard({ video, playing, onPlay }) {
  return (
    <div className="lp-video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="lp-video-poster" onClick={onPlay} aria-label={`Play ${video.title}`}>
          <img
            src={`https://i.ytimg.com/vi/${video.id}/oardefault.jpg`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
            }}
            alt=""
            loading="lazy"
          />
          <span className="lp-video-play" aria-hidden>
            <PiPlayFill />
          </span>
        </button>
      )}
    </div>
  );
}

export default function EnquiryLanding() {
  const formRef = useRef(null);
  const formWrapRef = useRef(null);
  const [formInView, setFormInView] = useState(false);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    const el = formWrapRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goToForm = () => scrollToId("enquire");

  const pickDestination = (optionId) => {
    formRef.current?.prefillCountry(optionId);
    goToForm();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="lp">
        <LandingHeader onEnquire={goToForm} />

        <main>
          {/* ── Hero ─────────────────────────────────────────── */}
          <section className="lp-hero" id="top">
            <div className="lp-hero-bg" aria-hidden />
            <div className="lp-wrap lp-hero-grid">
              <motion.div
                className="lp-hero-head"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <span className="lp-pill">
                  <span className="lp-pill-dot" aria-hidden />
                  Study abroad with Skymark Education
                </span>
                <h1 className="lp-h1">
                  1000+ students already applied.{" "}
                  <span className="lp-grad">You&apos;re next.</span>
                </h1>
                <p className="lp-lead">
                  One-to-one guidance from our counsellors, from choosing your
                  course and university to your offer letter, visa and flight.
                </p>
              </motion.div>

              <motion.div
                className="lp-hero-form"
                id="enquire"
                ref={formWrapRef}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              >
                <LeadForm ref={formRef} />
              </motion.div>

              <motion.div
                className="lp-hero-extras"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              >
                <ul className="lp-highlights">
                  {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="lp-highlight">
                      <span className="lp-highlight-icon" aria-hidden>
                        <Icon />
                      </span>
                      <span className="lp-highlight-label">{label}</span>
                      <strong className="lp-highlight-value">{value}</strong>
                    </li>
                  ))}
                </ul>
                <p className="lp-footnote">
                  *Indicative. Varies by university, course and eligibility.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── Trust strip ──────────────────────────────────── */}
          <div className="lp-wrap">
            <ul className="lp-trust">
              {TRUST.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Icon aria-hidden /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Destinations ─────────────────────────────────── */}
          <section className="lp-section" id="destinations">
            <div className="lp-wrap">
              <SectionHead
                eyebrow="Destinations"
                title="Where would you like to study?"
                sub="Pick a destination and talk to a counsellor about it."
              />
              <ul className="lp-dest-grid">
                {DESTINATIONS.map((d, i) => (
                  <Reveal as="li" key={d.key} delay={(i % 4) * 0.06}>
                    <button type="button" className="lp-dest" onClick={() => pickDestination(d.countryOptionId)}>
                      <span className="lp-dest-flag">
                        <img
                          src={cld(d.flag, "f_auto,q_auto,w_480,h_300,c_fill")}
                          alt=""
                          loading="lazy"
                        />
                      </span>
                      <span className="lp-dest-name">{d.name}</span>
                      <span className="lp-dest-blurb">{d.blurb}</span>
                      <span className="lp-dest-cta">
                        Enquire for {d.short} <PiArrowRight aria-hidden />
                      </span>
                    </button>
                  </Reveal>
                ))}
                <Reveal as="li" delay={0.18}>
                  <button type="button" className="lp-dest lp-dest-help" onClick={goToForm}>
                    <span className="lp-dest-help-icon" aria-hidden>
                      <PiCompass />
                    </span>
                    <span className="lp-dest-name">Not sure yet?</span>
                    <span className="lp-dest-blurb">
                      Our counsellors will help you pick the right country,
                      course and university.
                    </span>
                    <span className="lp-dest-cta">
                      Get guidance <PiArrowRight aria-hidden />
                    </span>
                  </button>
                </Reveal>
              </ul>
            </div>
          </section>

          {/* ── Process ──────────────────────────────────────── */}
          <section className="lp-section lp-section-tint" id="process">
            <div className="lp-wrap">
              <SectionHead
                eyebrow="How it works"
                title="From first call to boarding pass"
                sub="We guide you through every step, start to finish."
              />
              <ol className="lp-steps">
                {STEPS.map((s, i) => (
                  <Reveal as="li" key={s.title} className="lp-step" delay={(i % 3) * 0.08}>
                    <div className="lp-step-media">
                      <img src={cld(s.img, "f_auto,q_auto,w_640")} alt="" loading="lazy" />
                      <span className="lp-step-num">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="lp-step-body">
                      <h3 className="lp-step-title">{s.title}</h3>
                      <p className="lp-step-desc">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Stories ──────────────────────────────────────── */}
          <section className="lp-section" id="stories">
            <div className="lp-wrap">
              <SectionHead
                eyebrow="Student stories"
                title="Real students. Real visas."
                sub="A few of the Skymark students now studying abroad."
              />
            </div>

            <div className="lp-marquee">
              <div className="lp-marquee-track">
                {[...VISA_WINS, ...VISA_WINS].map((path, i) => (
                  <img
                    key={`${path}-${i}`}
                    className="lp-marquee-item"
                    src={cld(path, "f_auto,q_auto,w_440")}
                    alt={i < VISA_WINS.length ? "Visa granted to a Skymark student" : ""}
                    aria-hidden={i >= VISA_WINS.length}
                    loading="lazy"
                    width="220"
                    height="251"
                  />
                ))}
              </div>
            </div>

            <div className="lp-wrap">
              <Reveal className="lp-videos-head">
                <h3 className="lp-h3">Hear it from them</h3>
              </Reveal>
              <div className="lp-videos">
                {VIDEOS.map((v) => (
                  <VideoCard
                    key={v.id}
                    video={v}
                    playing={playingId === v.id}
                    onPlay={() => setPlayingId(v.id)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── Contact / branches ───────────────────────────── */}
          <section className="lp-section lp-cta" id="contact">
            <div className="lp-wrap">
              <Reveal className="lp-cta-card">
                <div className="lp-cta-glow" aria-hidden />
                <span className="lp-eyebrow">Let&apos;s talk</span>
                <h2 className="lp-h2">Ready to plan your move abroad?</h2>
                <p className="lp-section-sub">
                  Talk to a Skymark counsellor today: by phone, on WhatsApp or
                  at a branch near you.
                </p>
                <div className="lp-cta-actions">
                  <button type="button" className="lp-btn lp-btn-light lp-btn-lg" onClick={goToForm}>
                    Enquire now <PiArrowRight className="lp-btn-arrow" aria-hidden />
                  </button>
                  <a className="lp-btn lp-btn-whatsapp lp-btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp aria-hidden /> WhatsApp us
                  </a>
                  <a className="lp-btn lp-btn-ghost lp-btn-lg" href={PHONE_TEL}>
                    <PiPhone aria-hidden /> {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="lp-branches">
                  <span className="lp-branches-label">Visit a branch</span>
                  <ul>
                    {BRANCHES.map((b) => (
                      <li key={b.name}>
                        <a href={b.map} target="_blank" rel="noopener noreferrer">
                          <PiMapPin aria-hidden /> {b.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <div role="contentinfo" className="lp-footer">
          <div className="lp-wrap lp-footer-row">
            <img src={LOGO_URL} alt="Skymark Education" width="140" height="35" />
            <p>
              © {new Date().getFullYear()} Skymark Education. Your trusted
              study abroad partner.
            </p>
            <a
              className="lp-footer-credit"
              href="https://www.xale.in/"
              target="_blank"
              rel="noopener"
              title="Xale - CRM for study abroad consultancies"
            >
              Powered by <strong>Xale CRM</strong>
            </a>
          </div>
        </div>

        <a
          className="lp-fab"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Skymark on WhatsApp"
        >
          <FaWhatsapp aria-hidden />
        </a>

        <div className={`lp-mobile-bar${formInView ? " is-hidden" : ""}`}>
          <a className="lp-mobile-bar-icon" href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`}>
            <PiPhone aria-hidden />
          </a>
          <a
            className="lp-mobile-bar-icon is-wa"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp aria-hidden />
          </a>
          <button type="button" className="lp-btn lp-btn-primary lp-mobile-bar-cta" onClick={goToForm}>
            Enquire now <PiArrowRight aria-hidden />
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
