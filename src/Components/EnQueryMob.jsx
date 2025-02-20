import { GoArrowDownRight } from "react-icons/go";
import EnquireyFormCom from "./EnquireyFormCom";
import EnuiryIconBox from "./EnuiryIconBox";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiTimer } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";

export default function EnQueryMob() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });

  return (
    <div className="enquary-mob">
      <EnquireyFormCom />

      <div className="enquary-mob-image-text">
        <article>
          <h3>1000+ Students</h3>
          <h3>Already Applied </h3>
          <GoArrowDownRight
            fontWeight={500}
            fontSize={40}
            color="#024060"
            className="enquary-mob-arrow"
          />
        </article>

        <div className="enquary-mob-icons">
          <EnuiryIconBox
            p="Fees Starting From"
            h2="₹8 Lakhs *"
            Icon={LiaDollarSignSolid}
          />
          <EnuiryIconBox
            p="Scholarship"
            h2="₹10 Lakhs *"
            Icon={RiGraduationCapLine}
          />
          {isTablet && (
            <EnuiryIconBox p="Offer Letter in" h2="48 Hours *" Icon={PiTimer} />
          )}
        </div>
        {isMobile && (
          <EnuiryIconBox p="Offer Letter in" h2="48 Hours *" Icon={PiTimer} />
        )}
      </div>
    </div>
  );
}
