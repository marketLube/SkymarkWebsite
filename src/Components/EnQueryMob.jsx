import { FaHatCowboy } from "react-icons/fa";
import { GoArrowDownRight } from "react-icons/go";
import EnquireyFormCom from "./EnquireyFormCom";
import EnuiryIconBox from "./EnuiryIconBox";

export default function EnQueryMob() {
  return (
    <div className="enquary-mob">
      <EnquireyFormCom />

      <div className="enquary-mob-image-text">
        <article>
          <h2>1000+ Students</h2>
          <h2>Already Applied </h2>
          <GoArrowDownRight fontWeight={500} fontSize={40} color="#244ea0" />
        </article>

        <div className="enquary-mob-icons">
          <EnuiryIconBox
            p="Fees Starting From"
            h2="8 Lakhs *"
            Icon={FaHatCowboy}
          />
          <EnuiryIconBox p="Scholarship" h2="10 Lakhs *" Icon={FaHatCowboy} />
        </div>
        <EnuiryIconBox p="Offer Letter in" h2="48 Hours *" Icon={FaHatCowboy} />
      </div>
    </div>
  );
}
