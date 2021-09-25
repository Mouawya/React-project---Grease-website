import React from "react";
import { ImLocation2, ImPhone } from "react-icons/im";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <ImLocation2 size={30} color={"#05750a"} />
      <p>1234AA Amsterdam,</p>
      <p>Grease Street 99</p>
      <ImPhone size={30} color={"#e00000"} />
      <p>Phone: 00-00 00 00 00</p>
    </div>
  );
};

export default ContactDetails;
