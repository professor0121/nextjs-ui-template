"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BookingFormProps {
  variant?: string;
  tag?: string;
  excerpt?: string;
}

export default function BookingForm({
  variant = "base",
  tag = "Begin A Commission",
  excerpt = "Tell us about your space — we'll tell you honestly whether we're the right studio for it.",
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential",
    location: "",
    startDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-section" data-wf--booking--variant={variant} id="booking">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-default w-container">
          <div className="booking-inner">
            <div className="section-title-inner center">
              <div
                className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                data-wf--subtitle-block--variant="spacing-bottom"
              >
                <div className="subtile-dot"></div>
                <p className="subtitle-text">{tag}</p>
              </div>
              <div className="section-title-block booking">
                <h2 className="section-title">
                  Ready To <span className="title-span">Talk About</span> Your Space?
                </h2>
              </div>
              <p className="section-excerpt booking">{excerpt}</p>
            </div>
            <div className="booking-form w-form">
              {submitted ? (
                <div className="success-message w-form-done" style={{ display: "block" }}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
              ) : (
                <form className="booking-form-block" onSubmit={handleSubmit}>
                  <div className="booking-form-wrapper">
                    <div
                      className="input-field-wrapper"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b7d-84fa7b6d"
                    >
                      <label className="form-label" htmlFor="Name">
                        Full Name *
                      </label>
                      <input
                        aria-label="Name Field"
                        className="input-field w-input"
                        id="Name"
                        placeholder="Enter full name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div
                      className="input-field-wrapper"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b81-84fa7b6d"
                    >
                      <label className="form-label" htmlFor="email">
                        Email *
                      </label>
                      <input
                        aria-label="Email Field"
                        className="input-field w-input"
                        id="email"
                        placeholder="Enter email address"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="input-field-wrapper">
                      <label className="form-label" htmlFor="field">
                        Project Type *
                      </label>
                      <select
                        aria-label="Project Type"
                        className="input-field select w-select"
                        id="field"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Residential">Residential</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Heritage">Heritage</option>
                      </select>
                    </div>
                    <div
                      className="input-field-wrapper"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b89-84fa7b6d"
                    >
                      <label className="form-label" htmlFor="Guests">
                        Location *
                      </label>
                      <input
                        aria-label="Location Field"
                        className="input-field w-input"
                        id="Guests"
                        placeholder="City &amp; Location"
                        required
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                    <div
                      className="input-field-wrapper"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b8d-84fa7b6d"
                    >
                      <label className="form-label" htmlFor="Date">
                        Preferred Start
                      </label>
                      <input
                        aria-label="Date Field"
                        className="input-field"
                        type="date"
                        id="Date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      />
                    </div>
                    <input
                      className="submit-button w-button"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b91-84fa7b6d"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="booking-bg-wrapper">
        <div className="bookig-top-overlay"></div>
        <Image
          alt="Reservation Hero BG Image"
          className="booking-bg-image"
          src="https://cdn.prod.website-files.com/6a1e909d66cc33761db4a46d/6a2648fe5f4995327fa242df_bb5d8ce273e5e8e1c1cf70a12d2411c6_booking-bg.webp"
          width={2400}
          height={1600}
        />
        <div className="booking-bg-overlay"></div>
      </div>
    </section>
  );
}
