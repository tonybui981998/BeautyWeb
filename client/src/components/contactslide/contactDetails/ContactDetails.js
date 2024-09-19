import React from "react";
import "./ContactDetails.scss";
import bannercontact from "../../image/banner-contact.webp";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="detais-top">
        <div className="infor-tittle">
          <div className="tittle">Contact Us</div>
          <div className="address">
            Addess:The Beehive and other locations across Wellington
          </div>
          <div className="phone">Phone: 022 421 123</div>
          <div className="email">Email:manukau@gmail.com</div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173559.029529152!2d172.1838472616853!3d-39.03404392510964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38ae2bda83c1c3%3A0xfdd7bc2e2ba555f7!2sNew%20Zealand%20Parliament%20Buildings!5e0!3m2!1sen!2snz!4v1726300888591!5m2!1sen!2snz"
            //style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="detais-bottom">
        <div className="botton-img">
          <img src={bannercontact} alt="" />
        </div>
        <div className="botton-form">
          <div className="botton-title">Send us requirement</div>
          <div className="main-form">
            <input type="text" placeholder="Enter Name" alt="" />
            <br />
            <input type="text" placeholder="Enter Name" alt="" />
            <br />
            <input type="text" placeholder="Enter Name" alt="" />
            <br />
            <textarea placeholder="Message" />
            <br />

            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
