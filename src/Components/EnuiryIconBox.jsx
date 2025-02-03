import { FaHatCowboy } from "react-icons/fa";

export default function EnuiryIconBox({
  p = "fees Starting From",
  h2 = "8 Lakhs *",
  Icon = FaHatCowboy,
}) {
  return (
    <div className="enquirey-icons-box">
      <div className="enquirey-icons-box-icon">
        <Icon color="white" width={20} height={20} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: ".4rem" }} className="enquirey-icons-box-p">
          {p}
        </p>
        <h2 className="enquirey-icons-box-h2">{h2}</h2>
      </div>
    </div>
  );
}
