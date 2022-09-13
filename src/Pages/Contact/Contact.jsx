import React from "react";
import CustomHeader from "../../Components/CustomHeader";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <div>
      <CustomHeader>Contact Us</CustomHeader>
      <GetInTouch></GetInTouch>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
