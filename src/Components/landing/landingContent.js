// Copy and media for the /enquiry landing page. Everything here already
// appears elsewhere on the Skymark site; keep claims in sync with it.

const CLOUDINARY = "https://res.cloudinary.com/ds07e7rod/image/upload";

export const cld = (path, transform = "f_auto,q_auto,w_480") =>
  `${CLOUDINARY}/${transform}/${path}`;

export const LOGO_URL = `${CLOUDINARY}/v1738836367/skymarkLogo_drgzcw.svg`;

export const PHONE_DISPLAY = "+91 96057 71771";
export const PHONE_TEL = "tel:+919605771771";
export const WHATSAPP_URL = "https://wa.me/919605771771";

// Public key of the Skymark Xale Web Form (CRM → Sources → the form → Share).
// Empty = the card offers call / WhatsApp instead of the form.
export const XALE_FORM_KEY = "2m1mhGublbUzC0lFFriuDVxx";

// The form's Country question is Skymark's Country custom field (id 25);
// destination cards pre-select it with their countryOptionId.
export const XALE_COUNTRY_FIELD = "cf25";

export const DESTINATIONS = [
  {
    key: "uk",
    countryOptionId: "629",
    name: "United Kingdom",
    short: "UK",
    flag: "v1738835138/union-jack_avutfg.webp",
    blurb: "High-quality education and diverse cultural experiences.",
  },
  {
    key: "usa",
    countryOptionId: "640",
    name: "United States",
    short: "USA",
    flag: "v1738835142/usa_lhn5ty.webp",
    blurb: "Globally recognised degrees and a diverse campus culture.",
  },
  {
    key: "canada",
    countryOptionId: "637",
    name: "Canada",
    short: "Canada",
    flag: "v1738835144/canada_aacwta.webp",
    blurb: "High-quality education and a welcoming, diverse culture.",
  },
  {
    key: "germany",
    countryOptionId: null, // two options in the CRM: Germany Private / Public
    name: "Germany",
    short: "Germany",
    flag: "v1738835139/germany_ces0vq.webp",
    blurb: "World-class education with low or no tuition fees.",
  },
  {
    key: "ireland",
    countryOptionId: "633",
    name: "Ireland",
    short: "Ireland",
    flag: "v1738835137/ireland_ur0eeq.webp",
    blurb: "Vibrant student life with work opportunities.",
  },
  {
    key: "australia",
    countryOptionId: "638",
    name: "Australia",
    short: "Australia",
    flag: "v1738835138/australia_b0oz6o.webp",
    blurb: "World-class education in a multicultural environment.",
  },
  {
    key: "newzealand",
    countryOptionId: "639",
    name: "New Zealand",
    short: "New Zealand",
    flag: "v1738835138/newZealand_dkqrdo.jpg",
    blurb: "Globally recognised qualifications and a great quality of life.",
  },
];

export const STEPS = [
  {
    title: "Expert counselling session",
    desc: "Personalised guidance to find courses that match your goals.",
    img: "v1738833259/Step1_iemsbg.jpg",
  },
  {
    title: "Shortlist universities & programs",
    desc: "Pick institutions on academics and future career prospects.",
    img: "v1738833259/step2_oi7frh.jpg",
  },
  {
    title: "Prepare for entrance tests",
    desc: "IELTS, TOEFL, GRE or GMAT, with thorough preparation.",
    img: "v1738833261/step3_ccrt6x.jpg",
  },
  {
    title: "Submit applications early",
    desc: "SOPs, LORs and transcripts, complete and on time.",
    img: "v1738833259/step4_cediub.png",
  },
  {
    title: "Secure your admission offer",
    desc: "Review offers, finalise your choice and pay the deposit.",
    img: "v1738833259/step5_z6lo3s.jpg",
  },
  {
    title: "Get your visa, fly abroad",
    desc: "Visa filing, documents and interview prep, then take off.",
    img: "v1738833259/step6_ukgedw.jpg",
  },
];

export const VIDEOS = [
  { id: "uBDbrr6cjPE", title: "Skymark student story 1" },
  { id: "unR5vDRuLj4", title: "Skymark student story 2" },
  { id: "xcGU-1FB_kA", title: "Skymark student story 3" },
  { id: "dGU52bhgI7M", title: "Skymark student story 4" },
  { id: "BOuXCyMuVCs", title: "Skymark student story 5" },
];

// "Visa granted" posters of Skymark students.
export const VISA_WINS = [
  "v1738833488/one_npdqdu.jpg",
  "v1738833554/two_rtipd4.jpg",
  "v1738833531/three_sgzttu.jpg",
  "v1738833488/four_xjgjc2.jpg",
  "v1738833488/five_emzxnx.jpg",
  "v1738833489/seven_fz7zdk.jpg",
  "v1738833488/eight_v49rdv.jpg",
  "v1738833488/nine_ke1ayg.jpg",
  "v1738833489/ten_ycalyf.jpg",
  "v1738833488/eleven_hi4xku.jpg",
  "v1738833553/twelve_bb9vnv.jpg",
  "v1738833556/13_knvjaw.jpg",
  "v1738833556/14_j8a94n.jpg",
  "v1738833487/15_bermzu.jpg",
  "v1738833486/16_bldx9b.jpg",
  "v1738833487/17_zonapn.jpg",
  "v1738833487/19_lw6jtf.jpg",
  "v1738833487/20_he09ih.jpg",
  "v1738833492/21_xtrmmp.jpg",
];

export const BRANCHES = [
  { name: "Trivandrum", map: "https://maps.app.goo.gl/eBr97DPVbNmS4xa79" },
  { name: "Kochi", map: "https://maps.app.goo.gl/E3AZSo65zrHFAck8A" },
  { name: "Kannur", map: "https://maps.app.goo.gl/j227pCqL5bPfCiTF6" },
  { name: "Kozhikode", map: "https://maps.app.goo.gl/D4gCifH2TwcFSVVG7" },
  { name: "Manjeri", map: "https://maps.app.goo.gl/zfv7ZnJ3zUu5UBVdA" },
  { name: "Kottayam", map: "https://maps.app.goo.gl/4D5bkwNa1EQNyRDL9" },
];
