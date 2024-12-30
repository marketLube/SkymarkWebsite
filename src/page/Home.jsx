import Counter from "../Components/Counter";
import globe from "../../src/assets/UpdatedUIsky-16.svg";

export default function Home() {
  return (
    <section className="home" style={{ backgroundImage: `url(${globe})` }}>
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <img src="../../src/assets/1.svg" alt="globe" />
          </div>
          <div className="home-content-top-right">
            <div className="home-text">
              <span>Your trusted study abroad partner</span>
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
