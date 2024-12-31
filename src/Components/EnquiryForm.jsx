import Logo from "../assets/LP-03.svg";
import Globe from "../assets/LP-04.svg";
import GlobeSec from "../assets/LP-04.svg";
import Flags from "../assets/Flags.svg";

function EnquiryForm({ setIsFormOpen }) {
  return (
    <div className="enquary">
      <header className="enquary-header">
        <div className="enquary-logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => setIsFormOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>
      <main className="enquary-content">
        <div className="enquary-form-container">
          <img src={Globe} alt="logo" className="enquary-globimg" />
          <div className="enquary-image-text">
            <div>Start your</div>
            <div>global career</div>
            <div>today</div>
          </div>
          <img src={Flags} alt="flags" className="enquary-flagRow" />
          <form className="enquary-form">
            <div className="enquary-form-row">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="enquary-form-row">
              <input type="number" name="number" placeholder="Contact Number" />
            </div>
            <div className="enquary-form-row">
              <input type="text" name="location" placeholder="Location" />
            </div>
            <div className="enquary-form-row">
              <input type="email" name="mailid" placeholder="Mail Id" />
            </div>
            <div className="enquary-form-row">
              <select name="Country" defaultValue="" placeholder="Country">
                <option value="" disabled>
                  Country
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <input type="text" name="education" placeholder="Education" />
            </div>
            <div className="enquary-form-row">
              <button type="submit" className="enquary-submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <div className="enquary-bottomDiv">
        <img src={GlobeSec} alt="logo" className="enquary-respoImg" />
        <div className="enquary-mobile-text">
          <div>Start your</div>
          <div>global career</div>
          <div>today</div>
        </div>
        <img src={Flags} alt="flags" className="enquary-flagRowRespo" />
      </div>
    </div>
  );
}

export default EnquiryForm;
