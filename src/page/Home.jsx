import Counter from "../Components/Counter";
import globe from "../../src/assets/UpdatedUIsky-16.svg";
import globe2 from "../../src/assets/1.svg";
import { GoArrowDownRight } from "react-icons/go";
export default function Home() {
  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${globe})` }}
    >
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <img src={globe2} alt="globe" className="homeGlobeImage" />
          </div>
          <div className="home-content-top-right">
            <div className="home-text">
              <span>Your trusted study abroad partner</span>
              <span className="mobile-only-arrow">
                <GoArrowDownRight />
              </span>
            </div>
          </div>
        </div>
        <div className="home-content-bottom">
          <Counter />
        </div>
      </div>
    </section>
  );
}
