import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <h1 className="contact-us">Contact us</h1>
      <div className="contact">
        <ContactDetails />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
