"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationMessage("");

    const name = form.current?.["user_name"].value;
    const email = form.current?.["user_email"].value;
    const subject = form.current?.["subject"].value;
    const message = form.current?.["message"].value;

    if (!name || !email || !subject || !message) {
      setValidationMessage("Please fill in all fields.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          "service_k7xvyb6",
          "template_78sm6qp",
          form.current,
          "-E9irREi5AoJBWsLr"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsModalOpen(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("The form is not available.");
    }
  };

  return (
    <>
      <div
        className="hero h-[24rem] "
        style={{ backgroundImage: "url(/images/stock/office2_comp.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content pt-20">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse text-justify justify-center bg-auto mt-20 mb-20">
        <div className="max-w-5xl px-5 ">
          <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0 justify-center">
            <div className="flex flex-col sm:md:items-center justify-start leading-relaxed w-[20rem] md:w-[42rem] lg:w-screen lg:ml-8">
              <div className="bg-white w-full border-solid  border-gray-400 shadow-lg p-10 rounded-3xl lg:flex-1">
                <h2 className="text-xl lg:text-2xl font-black">Ask Us Anything</h2>
                <form ref={form} onSubmit={sendEmail} className="mt-5">
                  <div className="relative z-0 w-full mb-3 group lg:my-10">
                    <label
                      htmlFor="fullname"
                      className="block mb-2 text-sm lg:text-base font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="fullname"
                      className="block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="First and Last Name"
                    ></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group lg:my-10">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm lg:text-base font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      className="block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="example@gmail.com"
                    ></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group lg:my-10">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm lg:text-base font-medium text-gray-900"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write a subject here..."
                    ></input>
                  </div>
                  <div className="relative z-0 w-full mb-3 group lg:my-10">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm lg:text-base font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="text-white bg-custom-blue hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center"
                  />
                </form>
                {validationMessage && (
                  <div className="alert alert-warning mt-4">{validationMessage}</div>
                )}
                {isModalOpen && (
                  <div className="modal modal-open">
                    <div className="modal-box">
                      <h3 className="font-bold text-base lg:text-lg">
                        Thank You!
                      </h3>
                      <p className="py-4 text-left leading relaxed">
                        Your message has been sent successfully.
                      </p>
                      <div className="modal-action">
                        <button
                          className="btn"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row flex-wrap lg:flex-col lg:flex-nowrap sm:md:items-center justify-center lg:space-y-5 space-x-0 md:space-x-5 lg:space-x-0 leading-relaxed">
              <div className="bg-white h-[16rem] w-[20rem] lg:w-[24rem] lg:h-auto border-solid border-gray-400 shadow-lg p-10 my-2.5 lg:my-0 rounded-3xl text-left">
                <h2 className="text-xl lg:text-2xl font-semibold">HSK Tangerang</h2>
                <p className="text-sm lg:text-base mt-2">Jl. Millennium Raya 3B, Blok H1</p>
                <p className="text-sm lg:text-base">Desa Peusar, Panongan, Tangerang</p>
                <p className="text-sm lg:text-base"> Banten, Indonesia 15710</p>
                <p className="text-sm lg:text-base mt-2">
                  <span className="font-semibold">Phone:</span> +62 21-2915-9080
                </p>
                <p className="text-sm lg:text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  support@hsk.co.id
                </p>
              </div>
              <div className="bg-white h-[16rem] w-[20rem] lg:w-[24rem] border-solid  border-gray-400 shadow-lg p-10 my-2.5 lg:my-0 rounded-3xl text-left">
                <h2 className="text-xl lg:text-2xl font-semibold">HSK Jepara</h2>
                <p className="text-sm lg:text-base mt-2">Jl. Raya Mayong Pancur KM, I</p>
                <p className="text-sm lg:text-base">Desa Singorojo, Mayong, Jepara</p>
                <p className="text-sm lg:text-base">RT 05 / RW 03</p>
                <p className="text-sm lg:text-base">Jawa Tengah, Indonesia</p>
                <p className="text-sm lg:text-base mt-2">
                  <span className="font-semibold">Phone:</span> +62 21-5010-4536
                </p>
                <p className="text-sm lg:text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  support@hsk.co.id
                </p>
              </div>
              <div className="bg-white h-[16rem] w-[20rem] lg:w-[24rem] border-solid  border-gray-400 shadow-lg p-10 my-2.5 lg:my-0 rounded-3xl text-left">
                <h2 className="text-xl lg:text-2xl font-semibold">HSK Rembang</h2>
                <p className="text-sm lg:text-base mt-2">Jl. Raya Rembang Pamotan KM. 13</p>
                <p className="text-sm lg:text-base">Desa Japeledok, Pancur, Rembang</p>
                <p className="text-sm lg:text-base">RT 05 / RW 01</p>
                <p className="text-sm lg:text-base">Jawa Tengah, Indonesia</p>
                <p className="text-sm lg:text-base mt-2">
                  <span className="font-semibold ">Email:</span>{" "}
                  support@hsk.co.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
