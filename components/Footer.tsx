"use client";

import { useState } from "react";
import Link from "next/link";
import footerData from "@/data/footer.json";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container-default w-container">
        <div className="footer-inner">
          <div className="footer-main">
            <div
              className="footer-brand-wrapper"
              id="w-node-_480396ab-7af9-d328-09fa-feeada65958e-da65958a"
            >
              <Link className="footer-brand w-inline-block" href="/">
                <img
                  alt={footerData.logo.alt}
                  loading="lazy"
                  src={footerData.logo.src}
                />
              </Link>
              <p className="footer-text">{footerData.description}</p>
              <ul className="footer-contact-list" role="list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon w-embed">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="footer-address">{footerData.contact.address}</p>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon w-embed">
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
                    className="footer-link"
                    href={`mailto:${footerData.contact.email}?subject=Contact`}
                  >
                    {footerData.contact.email}
                  </a>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon w-embed">
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
                    className="footer-link"
                    href={footerData.contact.phoneHref}
                  >
                    {footerData.contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            {footerData.columns.map((col, idx) => (
              <div key={idx} className="footer-col">
                <div className="footer-col-title">
                  <div className="footer-subtitle">{col.title}</div>
                  <div className="footer-col-heading-accent"></div>
                </div>
                <ul className="footer-col-list" role="list">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link className="footer-link" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              className="footer-newsletter-wrapper"
              id="w-node-_480396ab-7af9-d328-09fa-feeada6595df-da65958a"
            >
              <div className="footer-tag">
                <div className="footer-subtitle-dot"></div>
                {footerData.newsletter.tag}
              </div>
              <div className="footer-newsletter-title">
                {footerData.newsletter.title}
              </div>
              <p className="footer-text">{footerData.newsletter.description}</p>
              <div className="footer-form-block w-form">
                {!submitted ? (
                  <form className="footer-form" onSubmit={handleSubmit}>
                    <div className="footer-form-wrapper">
                      <input
                        aria-label="newsletter-form"
                        className="footer-input w-input"
                        placeholder="Enter Your Email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="footer-submit-button w-button"
                        type="submit"
                        value="Subscribe"
                      />
                    </div>
                  </form>
                ) : (
                  <div
                    className="success-message newsletter-success w-form-done"
                    style={{ display: "block" }}
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}
              </div>
              <div className="footer-social">
                {footerData.socials.map((soc, idx) => {
                  const getIcon = (platform: string) => {
                    switch (platform) {
                      case "Instagram":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                          >
                            <rect height="18" rx="5" width="18" x="3" y="3" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" fill="currentColor" r="0.7" />
                          </svg>
                        );
                      case "Pinterest":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 7v10M9 17l3-10 3 10" />
                          </svg>
                        );
                      case "Behance":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 6h5a3 3 0 0 1 0 6H3zM3 12h6a3 3 0 0 1 0 6H3zM14 9h7M17 12a3 3 0 0 1 0 6h-3" />
                          </svg>
                        );
                      case "LinkedIn":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                          >
                            <rect height="18" rx="3" width="18" x="3" y="3" />
                            <line x1="8" x2="8" y1="10" y2="17" />
                            <circle cx="8" cy="7" r="1" />
                            <path d="M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                          </svg>
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <a
                      key={idx}
                      className="footer-social-link"
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${soc.platform} Profile`}
                    >
                      <div className="social-icon w-embed">
                        {getIcon(soc.platform)}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright-text">
              Copyright © Orenda | Designed by{" "}
              <a
                className="footer-copyright-link"
                href="https://brandbes.com/webflow-templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brandbes
              </a>{" "}
              - Powered by{" "}
              <a
                className="footer-copyright-link"
                href="https://webflow.com/templates/designers/brandbes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
