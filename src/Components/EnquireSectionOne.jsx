import { useState, useEffect } from "react";
import { GoArrowDownRight } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { createPortal } from "react-dom";
import EnuiryIconBox from "./EnuiryIconBox";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiTimer } from "react-icons/pi";

export default function EnquireSectionOne() {
  const values = {
    Date: new Date().toLocaleDateString("en-GB"),
    Name: "",
    Contact: "",
    Location: "",
    Country: "",
  };
  const [data, setData] = useState(values);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://skybook.co.in/api/v2/webbook-country"
        );
        setCountries(response.data.data);
      } catch (error) {
        if (error.response?.status === 401) {
          try {
            const fallbackResponse = await axios.get(
              "https://skybook.co.in/api/v2/country"
            );
            setCountries(fallbackResponse.data.data);
          } catch (fallbackError) {
            console.error(
              "Error fetching countries from fallback API:",
              fallbackError
            );
            toast.error("Failed to load countries");
          }
        } else {
          toast.error("Failed to load countries");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data, "asjgdkjgkjsagdkjsag");
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
      toast.error("Enter valid location");
      return;
    }

    if (!data.Country) {
      toast.error("Please select a preferred country");
      return;
    }

    const emptyFields = Object.entries(data).filter(
      ([key, value]) => key !== "Date" && !value.trim()
    );

    if (emptyFields.length > 0) {
      toast.error(`Please fill in all fields`);
      return;
    }
    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting...");

    try {
      // const formattedData = {
      //   date: new Date().toLocaleDateString("en-GB", {
      //     year: "numeric",
      //     month: "2-digit",
      //     day: "2-digit",
      //   }),
      //   name: data.Name,
      //   contact: data.Contact,
      //   location: data.Location,

      //   country: data.Country,
      // };

      // await axios.post(
      //   "https://api.sheetbest.com/sheets/afeac283-6b4f-4f3a-aca4-4ab2e077cf7e",
      //   formattedData,
      //   {
      //     headers: {
      //       "X-Api-Key":
      //         "GXtnwu@Z7oxaFqm8QobrH_qpzscnsexCa0b!Fjv@rZ9YFR42sNIu4V%ACO2dcqV7",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const skybookData = {
        leadSource: "Website",
        name: data.Name,
        email: "",
        phone: data.Contact,
        campaign: "Website Lead",
        isStudent: false,
        isSharedToUsers: true,
        remark: "Website Lead",
        countries: [data.Country],
      };

      await axios.post("https://skybook.co.in/api/v2/lead-web", skybookData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.dismiss(loadingToast);
      toast.success("Thank you!");

      setData(values);
    } catch (error) {
      console.error("Full error:", error);
      console.error("Response data:", error.response?.data);
      toast.error(
        error.response.data.message ||
          "Error submitting form. Please try again later."
      );
    } finally {
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
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

      <div className="enquary-form-container">
        <div className="enquiry-container-box">
          <div className="enquary-image-text">
            <article>
              <div>1000+ students</div>
              <div>Already Applied </div>
              <GoArrowDownRight fontWeight={500} />
            </article>

            <div className="enquirey-icons">
              <EnuiryIconBox
                p="Fees Starting From"
                h2=" ₹8 Lakhs*"
                Icon={LiaDollarSignSolid}
              />
              <EnuiryIconBox
                p="Scholarship worth"
                h2={"₹10 Lakhs*"}
                Icon={RiGraduationCapLine}
              />

              <EnuiryIconBox
                p="Offer Letter in"
                h2="48 Hours*"
                Icon={PiTimer}
              />
            </div>
          </div>

          <form className="enquary-form" onSubmit={handleSubmit}>
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
              <select
                name="country"
                placeholder="Preferred Country"
                value={data.Country}
                onChange={(e) => {
                  const value = e.target.value;
                  setData({ ...data, Country: value });
                }}
                minLength={2}
                maxLength={56}
                className="country-dropdown"
                disabled={isLoading}
              >
                <option value="" disabled>
                  {isLoading
                    ? "Loading countries..."
                    : "Select Preferred Country"}
                </option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
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
        </div>
      </div>
    </div>
  );
}
