"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Send form data to Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setMessageSubmitted(true);
        e.target.reset();
      } else {
        const resData = await response.json();
        alert(resData.error || "Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-effect"></div>

      <div className="contact-left">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          If you have any questions, ideas, or just want to say hello, feel free to reach out!
        </p>

        <div className="socials">
          <Link href="https://github.com/aniruddha-void" target="_blank">
            <Image
              src="/images/github-icon.svg"
              alt="Github Icon"
              width={40}
              height={40}
              className="social-icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aniruddha-bhandare-857aaa318/"
            target="_blank"
          >
            <Image
              src="/images/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={40}
              height={40}
              className="social-icon"
            />
          </Link>
        </div>
      </div>

      <div className="contact-right">
        {messageSubmitted ? (
          <p className="success-message">Message sent successfully! 🎉</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="form-input"
                placeholder="abcd@google.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="form-input"
                placeholder="Just saying hi"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="form-input"
                placeholder="Let's talk about..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
