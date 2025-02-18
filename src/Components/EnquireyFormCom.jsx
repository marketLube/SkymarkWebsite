import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

export default function EnquiryFormCom() {
  const initialValues = {
    Date: new Date().toLocaleDateString("en-GB"),
    Name: "",
    Contact: "",
    Location: "",
    Country: "",
  };

  const [data, setData] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields except Date
    const emptyFields = Object.entries(data).filter(
      ([key, value]) => key !== "Date" && !value.trim()
    );

    if (emptyFields.length > 0) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting...");

    try {
      const formattedData = {
        date: new Date().toISOString().slice(0, 10),
        name: data.Name,
        contact: data.Contact,
        location: data.Location,
        country: data.Country,
      };

      console.log("Submitting data:", formattedData);

      await axios.post(
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

      console.log("Data submitted successfully");

      toast.dismiss(loadingToast);
      toast.success("Thank you!");

      // Reset form only after successful submission
      setData(initialValues);
    } catch (error) {
      console.error("Full error:", error);
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);

      toast.error(
        error.response?.data?.detail ||
          "Error submitting form. Please check the sheet configuration."
      );
    } finally {
      toast.dismiss(loadingToast);
      setIsSubmitting(false); // Re-enable the button after request completes
    }
  };

  return (
    <>
      {createPortal(
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              zIndex: 100000000000000,
              fontSize: "0.8rem",
            },
          }}
        />,
        document.body
      )}
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
            type="text"
            name="country"
            placeholder="Preferred Country"
            value={data.Country}
            onChange={(e) => setData({ ...data, Country: e.target.value })}
          />
        </div>
        <div className="enquary-form-row">
          <button
            type="submit"
            className="enquary-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
