"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import contactData from "@/data/contact.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    date: "",
    type: "Residential",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.location) {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        date: "",
        type: "Residential",
        details: "",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.toLowerCase()]: value,
    }));
  };

  return (
    <main className="main-wrapper">
      {/* Contact Hero Section */}
      <section className="common-hero-section">
        <div className="w-layout-blockcontainer container-default w-container">
          <section className="common-hero-wrapper">
            <div className="common-hero-content-wrapper with-stats">
              <div className="common-hero-content-block service">
                <div
                  className="subtitle-block"
                  data-wf--subtitle-block--variant="base"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{contactData.hero.tag}</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  Let Us <span className="title-span">Observe</span> Your Space.
                </h1>
                <p className="common-hero-excerpt contact" hero-fade-in="0.2">
                  {contactData.hero.description}
                </p>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.4">
                {contactData.hero.stats.map((stat, idx) => {
                  const isLast = idx === contactData.hero.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_39c898c8-113f-75da-0d66-2d4f7beaebb2-e945c699"
                          : undefined
                      }
                    >
                      <p className="hero-stats-label">{stat.label}</p>
                      <div className="hero-stats-count">{stat.count}</div>
                      <p className="hero-stats-text">{stat.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text" hero-title="true">
          Contact
        </div>
      </section>

      {/* Ticker */}
      <div
        className="ticker"
        data-wf-component-id="ab7ac94d-8d99-b1f4-3acd-1c5582b30cf5"
        data-wf-variant-state="base"
      >
        {[...Array(3)].map((_, tickIdx) => (
          <div key={tickIdx} className="ticker-inner">
            {[
              "Eight Commissions · A Year",
              "Quiet Craft",
              "Timeless Interiors",
              "Milan",
              "Geneva",
              "Since 2014",
            ].map((text, idx) => (
              <div key={idx} style={{ display: "contents" }}>
                <div className="ticker-text">{text}</div>
                <div className="ticker-dot"></div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Form and info grids */}
      <section className="contact-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="contact-wrapper">
              <div className="contact-info-wrapper">
                {/* General Inquiries */}
                <div className="contact-info-block" fade-in="0.2">
                  <h2 className="contact-info-title">
                    {contactData.inquiries.general.title}
                  </h2>
                  <p className="contact-info-excerpt">
                    {contactData.inquiries.general.excerpt}
                  </p>
                  <ul className="contact-info-list" role="list">
                    <li className="contact-info-list-item">
                      <div className="contact-info-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 4h16v14H5.17L4 19.17z" />
                          <path d="M8 9h8M8 13h5" />
                        </svg>
                      </div>
                      <a
                        className="contact-info-link"
                        href={`mailto:${contactData.inquiries.general.email}?subject=Contact`}
                      >
                        {contactData.inquiries.general.email}
                      </a>
                    </li>
                    <li className="contact-info-list-item">
                      <div className="contact-info-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 16.92V21a1 1 0 0 1-1.1 1A18 18 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.3 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1z" />
                        </svg>
                      </div>
                      <a
                        className="contact-info-link"
                        href={`tel:${contactData.inquiries.general.phone.replace(
                          /\s/g,
                          ""
                        )}`}
                      >
                        {contactData.inquiries.general.phone}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Press & Media */}
                <div className="contact-info-block" fade-in="0.4">
                  <h3 className="contact-info-title">
                    {contactData.inquiries.press.title}
                  </h3>
                  <p className="contact-info-excerpt">
                    {contactData.inquiries.press.excerpt}
                  </p>
                  <ul className="contact-info-list" role="list">
                    <li className="contact-info-list-item">
                      <div className="contact-info-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 4h16v14H5.17L4 19.17z" />
                          <path d="M8 9h8M8 13h5" />
                        </svg>
                      </div>
                      <a
                        className="contact-info-link"
                        href={`mailto:${contactData.inquiries.press.email}?subject=Contact`}
                      >
                        {contactData.inquiries.press.email}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Careers */}
                <div className="contact-info-block" fade-in="0.6">
                  <h3 className="contact-info-title">
                    {contactData.inquiries.careers.title}
                  </h3>
                  <p className="contact-info-excerpt">
                    {contactData.inquiries.careers.excerpt}
                  </p>
                  <ul className="contact-info-list" role="list">
                    <li className="contact-info-list-item">
                      <div className="contact-info-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 4h16v14H5.17L4 19.17z" />
                          <path d="M8 9h8M8 13h5" />
                        </svg>
                      </div>
                      <a
                        className="contact-info-link"
                        href={`mailto:${contactData.inquiries.careers.email}?subject=Contact`}
                      >
                        {contactData.inquiries.careers.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Controlled Contact Form */}
              <div className="contact-booking-form w-form" fade-in="0">
                <h3 className="contact-title">Tell Us About Your Project.</h3>
                {!submitted ? (
                  <form className="booking-form-block" onSubmit={handleSubmit}>
                    <div className="contact-form-wrapper">
                      <div className="input-field-wrapper">
                        <label className="form-label" htmlFor="Name">
                          Full Name *
                        </label>
                        <input
                          className="input-field w-input"
                          id="Name"
                          placeholder="Enter full name"
                          required
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-field-wrapper">
                        <label className="form-label" htmlFor="Phone">
                          Phone *
                        </label>
                        <input
                          className="input-field w-input"
                          id="Phone"
                          placeholder="Enter Phone Number"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-field-wrapper">
                        <label className="form-label" htmlFor="email">
                          Email *
                        </label>
                        <input
                          className="input-field w-input"
                          id="email"
                          placeholder="Enter email address"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div
                        className="input-field-wrapper"
                        id="w-node-_66c5ff37-7346-daba-ffb5-c844f53bee31-e945c699"
                      >
                        <label className="form-label" htmlFor="Guests">
                          Location *
                        </label>
                        <input
                          className="input-field w-input"
                          id="Guests"
                          placeholder="City &amp; Location"
                          required
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="input-field-wrapper j">
                        <label className="form-label" htmlFor="Date">
                          Preferred Start
                        </label>
                        <input
                          className="input-field"
                          type="date"
                          id="Date"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-field-wrapper">
                        <label className="form-label" htmlFor="field">
                          Project Type *
                        </label>
                        <select
                          className="input-field select w-select"
                          id="field"
                          value={formData.type}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, type: e.target.value }))
                          }
                        >
                          <option value="Residential">Residential</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Heritage">Heritage</option>
                        </select>
                      </div>
                      <div
                        className="input-field-wrapper"
                        id="w-node-_32cec85f-2181-d808-d364-6706e5f7a195-e945c699"
                      >
                        <label className="form-label" htmlFor="Project-Details">
                          Project Details
                        </label>
                        <textarea
                          className="input-field text-area w-input"
                          id="Project-Details"
                          maxLength={5000}
                          placeholder="Tell us about the scope, scale, and timeline of your project..."
                          value={formData.details}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              details: e.target.value,
                            }))
                          }
                        ></textarea>
                      </div>
                      <input
                        className="submit-button w-button"
                        id="w-node-_66c5ff37-7346-daba-ffb5-c844f53bee39-e945c699"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                ) : (
                  <div className="success-message w-form-done" style={{ display: "block" }}>
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Locations Grid */}
      <section className="location-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">Locations</p>
                </div>
                <div className="section-title-block">
                  <h2 className="section-title">
                    Our <span className="title-span">Ateliers.</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="location-grid">
              {contactData.locations.map((loc, idx) => (
                <div key={idx} className="location-card" data-d="1">
                  <div className="location-image-block">
                    <Image
                      alt="Location Image"
                      className="location-image"
                      src={loc.image}
                      width={940}
                      height={626}
                    />
                    <div
                      className="image-on-scroll-overlay"
                      data-wf-component-id="91305ce3-1f57-4dde-9cee-a20932724526"
                      data-wf-variant-state="base"
                    >
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="image-overlay-strip"></div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`location-card-inner ${idx === 0 ? "fade-in-0.4" : ""}`}
                    fade-in={idx === 0 ? "0.4" : undefined}
                  >
                    <h3 className="location-title">{loc.city}</h3>
                    <p className="location-info" style={{ whiteSpace: "pre-line" }}>
                      {loc.address}
                    </p>
                    <a
                      className="link-button w-inline-block"
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>Get Directions</div>
                      <div className="link-button-icon w-embed">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33301 8H12.6663"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d="M8 3.33398L12.6667 8.00065L8 12.6673"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
