import ScrollCardBox from "../Components/ScrollCardBox";

const obj = [
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833259/Step1_iemsbg.jpg",
    color: "#09bc54",
    desc: "Receive personalized guidance to explore course that match your goals.",
    title: "Expert Counselling Session",
    span: "1",
    type: "green",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833259/step2_oi7frh.jpg",
    color: " #024060",
    desc: "Research and select institutions based on academics and future career prospects.",
    title: "Shortlist Universities & Programs",
    span: "2",
    type: "blue",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833261/step3_ccrt6x.jpg",
    color: "#09bc54",
    desc: "Take required exams like IELTS, TOEFL, GRE, or GMAT with thorough preparation.",
    title: "Prepare for Entrance Tests",
    span: "3",
    type: "gray",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833259/step4_cediub.png",
    color: " #024060",
    desc: "Complete applications with necessary documents like SOPs, LORs, and transcripts.",
    title: "Submit Applications Early",
    span: "4",
    type: "blue",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833259/step5_z6lo3s.jpg",
    color: "#09bc54",
    desc: "Review acceptance letters, finalize your choice, and pay the enrollment deposit.",
    title: "Secure Admission Offer",
    span: "5",
    type: "green",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833259/step6_ukgedw.jpg",
    color: " #024060",
    desc: "Submit visa applications with required documents and attend interviews if necessary",
    title: "Get Visa, Fly Abroad.",
    span: "6",
    type: "blue",
  },
];

export default function ScrollCard() {
  return (
    <section className="scroll-card">
      <div className="scroll-card-scroll-container">
        {obj.map((item, index) => (
          <ScrollCardBox
            key={index}
            color={item.color}
            data={item}
          ></ScrollCardBox>
        ))}
      </div>
    </section>
  );
}
