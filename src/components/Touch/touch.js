import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter } from "react-icons/fa";
import "./touch.css";

const Touch = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState(""); // ✅ Fix: Added state for result message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ce34be4a-3e57-40c7-8e4e-144b8aeac59c"); // ✅ Replace with your actual Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title"><b>Contact Me</b></h1>
      </div>
      <div className="who">
        <span className="line"></span>
        <span className="who-i-am">Get in touch</span>
        <span className="line"></span>
      </div>

      <form onSubmit={onSubmit} className="contact-me"> {/* ✅ Fix: Call onSubmit instead of handleSubmit */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        ></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <p className="form-result">{result}</p> {/* ✅ Show result message */}

      <div className="lets-talk">
        <h2 className="lets-talk-title">Let's Talk</h2>
        <p className="lets-talk-item"><FaEnvelope className="icon" /> <a href="mailto:sakshee303@gmail.com">sakshee303@gmail.com</a></p>
        <p className="lets-talk-item">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> linkedin.com/in/yourprofile
          </a>
        </p>
        <p className="lets-talk-item"><FaPhone className="icon" /> 9510062588</p>
        <p className="lets-talk-item"><FaMapMarkerAlt className="icon" /> Himtanagar</p>
      </div>

      <footer className="footer">
        <hr className="hr" />
        <div className="social-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons">
            <FaTwitter />
          </a>
        </div>

        <p className="footer-rights">© 2025 Sakshee. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Touch;
