import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/contacthero";
import ContactSection from "../components/contact/contactsection";
import ContactMap from "../components/contact/contactmap";
import ReserveTable  from "../components/contact/reservetable";


function ContactUs() {
  return (
    <>
      

      <ContactHero />

      <ContactSection />

      <ContactMap />

      <ReserveTable />
      
      
    </>
  );
}

export default ContactUs;