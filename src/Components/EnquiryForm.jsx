import Logo from "../assets/LP-03.svg";
import Globe from "../assets/LP-04.svg";
import GlobeSec from "../assets/LP-04.svg";
import Flags from "../assets/Flags.svg";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "../layout/Header";
import globe2 from "../../src/assets/1.svg";

function EnquiryForm() {
  const navigate = useNavigate();

  const values = {
    Date: new Date().toISOString().split("T")[0],
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

    // Check for empty fields
    const emptyFields = Object.entries(data).filter(
      ([key, value]) => key !== "Date" && !value.trim()
    );
    if (emptyFields.length > 0) {
      toast.error(`Please fill in all fields`);
      return;
    }

    try {
      const loadingToast = toast.loading("Submitting...");
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
      toast.dismiss(loadingToast);
      toast.success("Thank you!");
      setData(values);
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="enquary">
      {createPortal(
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              zIndex: 2147483647,
            },
          }}
        />,
        document.body
      )}

      <Header />

      <main className="enquary-content">
        <div className="enquary-form-container">
          <img src={globe2} alt="logo" className="enquary-globimg" />
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
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={data.Country}
                onChange={(e) => setData({ ...data, Country: e.target.value })}
              />
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
