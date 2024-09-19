import React from "react";
import NavBar from "../navBar/NavBar";
import Contactheader from "../contactslide/contactheader/Contactheader";
import ContactDetails from "../contactslide/contactDetails/ContactDetails";
import Footer from "../footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <Contactheader />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default ContactUs;
