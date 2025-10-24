import { useRef } from "react";
import {
  MapPin,
  Mail,
  Phone,
  //   Facebook,
  //   Twitter,
  //   Instagram,
  //   Linkedin,
  //   Heart,
} from "lucide-react";
import "./Contactpage.css";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_39c704w", "template_rpnkpea", form.current, {
        publicKey: "9rRV3fUsbXFbcVH3Z",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent Succesfully !");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Submission Failed !");
        }
      );
  };
  return (
    <div id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Have questions about HeartSense AI? We're here to help you with any
            inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <form className="contact-form" onSubmit={sendEmail} ref={form}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="abishek sam"
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="sam@example.com"
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>

              <div className="info-item">
                <div className="info-icon blue">
                  <MapPin />
                </div>
                <div className="info-text">
                  <h4>Our Location</h4>
                  <p>Kancheepuram, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon green">
                  <Mail />
                </div>
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p>samabishek75@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon red">
                  <Phone />
                </div>
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p>+91 8015111450</p>
                </div>
              </div>
            </div>

            {/* <div className="social-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Linkedin />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
