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

    if (data.Name.length < 2 || data.Name.length > 50) {
      toast.error("Name should be 2-50 characters");
      return;
    }
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!phoneRegex.test(data.Contact)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    const locationRegex = /^[A-Za-z\s]{2,100}$/;
    if (!locationRegex.test(data.Location.trim())) {
      toast.error("Please enter a valid location");
      return;
    }

    const countryRegex = /^[A-Za-z\s]{2,56}$/;
    if (!countryRegex.test(data.Country.trim())) {
      toast.error("Please enter a valid country name");
      return;
    }

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
        "https://api.sheetbest.com/sheets/afeac283-6b4f-4f3a-aca4-4ab2e077cf7e",
        formattedData,
        {
          headers: {
            "X-Api-Key":
              "GXtnwu@Z7oxaFqm8QobrH_qpzscnsexCa0b!Fjv@rZ9YFR42sNIu4V%ACO2dcqV7",
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
            onChange={(e) => {
              const value = e.target.value;
              if (/^[A-Za-z\s]*$/.test(value)) {
                setData({ ...data, Name: value });
              }
            }}
            minLength={2}
            maxLength={50}
          />
        </div>
        <div className="enquary-form-row">
          <input
            type="text"
            name="number"
            placeholder="Contact Number"
            value={data.Contact ? `+91 ${data.Contact}` : ""}
            onFocus={() => {
              if (!data.Contact) {
                setData({ ...data, Contact: "" });
              }
            }}
            onChange={(e) => {
              const value = e.target.value.replace("+91 ", "");
              if (/^\d*$/.test(value) && value.length <= 10) {
                setData({ ...data, Contact: value });
              }
            }}
            maxLength={14}
          />
        </div>
        <div className="enquary-form-row">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={data.Location}
            onChange={(e) => {
              const value = e.target.value;

              if (/^[A-Za-z\s]*$/.test(value)) {
                setData({ ...data, Location: value });
              }
            }}
            minLength={2}
            maxLength={100}
          />
        </div>

        <div className="enquary-form-row">
          <input
            type="text"
            name="country"
            placeholder="Preferred Country"
            value={data.Country}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[A-Za-z\s]*$/.test(value)) {
                setData({ ...data, Country: value });
              }
            }}
            minLength={2}
            maxLength={56}
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
