import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EnquireyFormCom() {
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

      // Format the data to match sheet columns exactly
      const formattedData = {
        date: data.Date,
        name: data.Name,
        contact: data.Contact,
        location: data.Location,
        mail: data.Mail,
        country: data.Country,
        education: data.Education,
      };

      // Log the request details for debugging
      console.log("Sending data:", formattedData);

      const res = await axios.post(
        "https://api.sheetbest.com/sheets/05540cc0-c017-4369-b67c-8864cbde3440",
        formattedData,
        {
          headers: {
            "X-Api-Key":
              "I3fZo%sXySz5z7Qz0!IE6tlq_umlibI3O-56ovbuHZ#Vx5_CA7VYiP%3d$OUjH_N",
            "Content-Type": "application/json",
          },
        }
      );

      toast.dismiss(loadingToast);
      toast.success("Thank you!");
      setData(values);
    } catch (error) {
      console.error("Full error:", error);
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);
      toast.error(
        error.response?.data?.detail ||
          "Error submitting form. Please check the sheet configuration."
      );
    }
  };
  return (
    <form className="enquary-mob-form" onSubmit={handleSubmit}>
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
          onChange={(e) => setData({ ...data, Education: e.target.value })}
        />
      </div>
      <div className="enquary-form-row">
        <button type="submit" className="enquary-submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}
