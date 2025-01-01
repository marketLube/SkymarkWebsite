import Logo from "../assets/LP-03.svg";
import Globe from "../assets/LP-04.svg";
import GlobeSec from "../assets/LP-04.svg";
import Flags from "../assets/Flags.svg";
import { useState } from "react";
import axios from "axios";

function EnquiryForm({ setIsFormOpen }) {
  const values = {
    Date: new Date().toISOString(),
    Name: "",
    Contact: "",
    Location: "",
    Mail: "",
    Country: "",
    Education: "",
  };
  const [data, setData] = useState(values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://sheet.best/api/sheets/73642f1b-8b20-4bb1-8dc6-360fd76d1f91",
        data,
        {
          headers: {
            "X-Api-Key":
              "-yapzj3@dmLVS3l5j94n4UmRV2WwzqbI1rg-bL#k#IEE3Um45R%YPJO_1Fif6Pmr",
          },
        }
      );
      console.log(res);
      setData(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
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
          <form className="enquary-form" onSubmit={handleSubmit}>
            <div className="enquary-form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.Name}
                onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>
            <div className="enquary-form-row">
              <input
                type="number"
                name="number"
                placeholder="Contact Number"
                value={data.Contact}
                onChange={(e) => setData({ ...data, Contact: e.target.value })}
              />
            </div>
            <div className="enquary-form-row">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={data.Location}
                onChange={(e) => setData({ ...data, Location: e.target.value })}
              />
            </div>
            <div className="enquary-form-row">
              <input
                type="email"
                name="mailid"
                placeholder="Mail Id"
                value={data.Mail}
                onChange={(e) => setData({ ...data, Mail: e.target.value })}
              />
            </div>
            <div className="enquary-form-row">
              <select
                name="Country"
                defaultValue=""
                placeholder="Country"
                value={data.Country}
                onChange={(e) => setData({ ...data, Country: e.target.value })}
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <input
                type="text"
                name="education"
                placeholder="Education"
                value={data.Education}
                onChange={(e) =>
                  setData({ ...data, Education: e.target.value })
                }
              />
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
