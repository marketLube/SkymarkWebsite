import ScrollCardBox from "../Components/ScrollCardBox";

export default function ScrollCard() {
  return (
    <section className="scroll-card">
      <div className="scroll-card-scroll-container">
        <ScrollCardBox color="#09bc54"></ScrollCardBox>
        <ScrollCardBox color=" #024060" type="blue"></ScrollCardBox>
        <ScrollCardBox color="gray"></ScrollCardBox>
      </div>
    </section>
  );
}
