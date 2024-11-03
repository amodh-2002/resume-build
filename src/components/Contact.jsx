import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-16 overflow-hidden"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full mx-4 md:mx-8"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email
          </p>
        </div>
        <input
          required
          autoComplete="name"
          className="bg-[#ccd6f6] p-4 rounded-md outline-none text-base mb-4"
          type="text"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          required
          autoComplete="email"
          className="bg-[#ccd6f6] p-4 rounded-md outline-none text-base mb-4"
          type="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          required
          className="bg-[#ccd6f6] p-4 rounded-md outline-none text-base"
          name="message"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="hidden" name="to_name" value="Amodh BH" />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
