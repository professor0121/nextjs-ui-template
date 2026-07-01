"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";
import cmsServices from "@/data/cms-services.json";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="main-wrapper">
      {/* Services Hero Section */}
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
                  <p className="subtitle-text">{servicesData.hero.tag}</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  Six Ways To Make A Space{" "}
                  <span className="title-span">Impactful</span>
                </h1>
                <p className="common-hero-excerpt service" hero-fade-in="0.2">
                  {servicesData.hero.description}
                </p>
                <div className="common-hero-button-wrapper" hero-fade-in="0.4">
                  <a className="primary-button w-inline-block" href="#services">
                    <div className="button-text-block">
                      <div className="button-text">Explore Services</div>
                      <div className="button-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <line x1="5" x2="19" y1="12" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                    <div className="button-bg"></div>
                  </a>
                  <a
                    className="secondary-button w-inline-block"
                    data-wf--secondary-button--variant="hover-white-bg"
                    data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                    data-wf-variant-state="40520a71-aa9b-6a51-5ecc-905a04a2984a"
                    href="#booking"
                  >
                    <div className="button-text-block">
                      <div className="button-text">Book Consultation</div>
                      <div className="secondary-button-bg w-variant-40520a71-aa9b-6a51-5ecc-905a04a2984a"></div>
                      <div className="secondary-button-bg-inner"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.6">
                {servicesData.hero.stats.map((stat, idx) => {
                  const isLast = idx === servicesData.hero.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_39c898c8-113f-75da-0d66-2d4f7beaebb2-21d8e40b"
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
          Services
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

      {/* Disciplines / Services Grid */}
      <section className="service-section" id="services">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{servicesData.disciplines.tag}</p>
                </div>
                <div className="section-title-block services">
                  <h2 className="section-title">
                    Spaces With <span className="title-span">Purpose</span>
                  </h2>
                </div>
              </div>
              <div className="service-fun-fact-wrapper">
                <p className="section-excerpt home-service" fade-in="0.2">
                  {servicesData.disciplines.description}
                </p>
                <div className="home-service-fun-fact" fade-in="0.4">
                  <span className="service-fun-fact-count">6</span>{" "}
                  <strong>Disciplines · One Studio Standard</strong>
                </div>
              </div>
            </div>

            <div className="service-list-wrapper w-dyn-list">
              <div className="service-list w-dyn-items" role="list">
                {cmsServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="service-list-item w-dyn-item"
                    fade-in="0.4"
                    role="listitem"
                  >
                    <div className="service-item">
                      <div className="service-item-content-wrapper">
                        <div className="service-item-index-block">
                          <div className="service-item-index">0{idx + 1}</div>
                        </div>
                        <div className="service-item-content-block">
                          <Link
                            aria-label="Service Title"
                            className="cms-title-link w-inline-block"
                            href={`/services/${service.slug}`}
                          >
                            <h3 className="service-item-title">{service.title}</h3>
                          </Link>
                          <p className="service-item-desc">{service.excerpt}</p>
                          <div className="service-item-meta-list">
                            {service.stats.map((stat, sIdx) => (
                              <p key={sIdx} className="service-item-meta">
                                {stat.count}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="service-item-image-wrapper">
                        <Link
                          className="service-thumbnail-block w-inline-block"
                          href={`/services/${service.slug}`}
                        >
                          <Image
                            alt="Service Thumbnail"
                            className="service-item-thumbnail"
                            src={service.overviewImage}
                            width={1364}
                            height={910}
                          />
                          <div className="service-item-media-overlay"></div>
                        </Link>
                        <Link
                          aria-label="Service Link"
                          className="service-item-arrow w-inline-block"
                          href={`/services/${service.slug}`}
                        >
                          <div className="service-item-arrow-icon w-embed">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <line x1="5" x2="19" y1="12" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Spotlight Section */}
      <section className="spotlight-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{servicesData.spotlight.tag}</p>
                </div>
                <div className="section-title-block in-focus">
                  <h2 className="section-title">
                    Exceptional Work <span className="title-span">In Focus</span>
                  </h2>
                </div>
                <p className="section-excerpt in-focus" fade-in="0.2">
                  {servicesData.spotlight.description}
                </p>
              </div>
            </div>

            {/* React controlled Spotlight Tabs */}
            <div
              className="spotlight-tabs w-tabs"
              data-current="Tab 1"
              data-duration-in="300"
              data-duration-out="100"
              data-easing="ease"
            >
              <div className="spotlight-tab-menu w-tab-menu" fade-in="0.4">
                {servicesData.spotlight.tabs.map((tab, idx) => (
                  <a
                    key={idx}
                    className={`spotlight-tab-link w-inline-block w-tab-link ${
                      activeTab === idx ? "w--current" : ""
                    }`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <div>{tab.label}</div>
                  </a>
                ))}
              </div>

              <div className="spotlight-tab-content w-tab-content">
                {servicesData.spotlight.tabs.map((tab, idx) => (
                  <div
                    key={idx}
                    className={`spotlight-tab-pane w-tab-pane ${
                      activeTab === idx ? "w--tab-active" : ""
                    }`}
                    style={{
                      display: activeTab === idx ? "block" : "none",
                      opacity: activeTab === idx ? 1 : 0,
                      transition: "opacity 300ms ease",
                    }}
                  >
                    <div className="spotlight-wrapper" data-panel={tab.id}>
                      <div className="spotight-projects">
                        <div className="spotlight-project-list-wrapper w-dyn-list">
                          <div className="spotlight-project-list w-dyn-items" role="list">
                            <div
                              className="spotlight-project-item w-dyn-item"
                              role="listitem"
                            >
                              <div
                                className="spotlight-project-card"
                                data-cms-hover-trigger="true"
                              >
                                <Image
                                  alt="Project Thumbnail"
                                  className="spotlight-project-thumbnail"
                                  src={tab.project.image}
                                  width={939}
                                  height={600}
                                />
                                <div className="spotlight-project-card-overlay">
                                  <div
                                    className="spotlight-project-card-inner"
                                    fade-in="0.6"
                                  >
                                    <div className="spotlight-project-card-title-block">
                                      <Link
                                        aria-label="Project Title"
                                        className="home-project-title-link w-inline-block"
                                        href={`/project/${tab.project.slug}`}
                                      >
                                        <h3 className="home-project-card-title">
                                          {tab.project.title}
                                        </h3>
                                      </Link>
                                      <div className="spotlight-project-meta-wrapper">
                                        <div className="project-item-meta">
                                          {tab.project.category}
                                        </div>
                                      </div>
                                    </div>
                                    <Link
                                      aria-label="Project Link"
                                      className="spotlight-item-arrow w-inline-block"
                                      href={`/project/${tab.project.slug}`}
                                    >
                                      <div className="service-item-arrow-icon w-embed">
                                        <svg
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.8"
                                          viewBox="0 0 24 24"
                                        >
                                          <line x1="5" x2="19" y1="12" y2="12" />
                                          <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
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
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="spotilight-content-block" fade-in="0.4">
                        <div className="sp-panel-index">{tab.panelIndex}</div>
                        <h3 className="spotlight-title">{tab.panelTitle}</h3>
                        <p className="spotlight-exceprt">{tab.panelExcerpt}</p>
                        <div className="sp-panel-stats">
                          {tab.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="sp-panel-stat">
                              <div className="spotlight-stat-count">{stat.count}</div>
                              <div className="sp-panel-stat-label">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="spotlight-feature-list">
                          {tab.features.map((feature, fIdx) => (
                            <div key={fIdx} className="spotlight-feature">
                              <div className="sp-panel-feat-dot"></div>
                              <div>{feature}</div>
                            </div>
                          ))}
                        </div>
                        <div className="common-hero-button-wrapper">
                          <Link
                            className="primary-button w-inline-block"
                            data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                            data-wf-variant-state="base"
                            href="/projects"
                          >
                            <div className="button-text-block">
                              <div className="button-text">{tab.cta}</div>
                              <div className="button-icon w-embed">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <line x1="5" x2="19" y1="12" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </div>
                            </div>
                            <div className="button-bg"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Commitments Section */}
      <section className="why-choose-us-section">
        <div className="section-gap-bottom">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper center">
              <div className="section-title-inner center">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{servicesData.whyOrenda.tag}</p>
                </div>
                <div className="section-title-block why-choose-us">
                  <h2 className="section-title">
                    The <span className="title-span">Standard</span> Behind Every
                    Commission.
                  </h2>
                </div>
                <p className="section-excerpt why-choose-us" fade-in="0.2">
                  {servicesData.whyOrenda.description}
                </p>
              </div>
            </div>

            <div className="horizontal-scroll-wrapper">
              <div className="why-choose-us-grid">
                {servicesData.whyOrenda.items.map((item, idx) => {
                  const fades = ["0.2", "0.4", "0.6", "0.8"];
                  const getSvg = (icon: string) => {
                    switch (icon) {
                      case "user":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        );
                      case "shield":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        );
                      default:
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" x2="12" y1="18" y2="12" />
                            <line x1="9" x2="15" y1="15" y2="15" />
                          </svg>
                        );
                    }
                  };

                  return (
                    <div key={idx} className="why-choose-us-card" fade-in={fades[idx]}>
                      <div className="why-choose-us-icon-block">
                        <div className="why-choose-us-icon w-embed">
                          {getSvg(item.icon)}
                        </div>
                      </div>
                      <h3 className="why-choose-us-title">{item.title}</h3>
                      <p className="why-choose-us-text">{item.text}</p>
                      <div className="why-card-stat">
                        <div className="why-choose-us-count">{item.count}</div>
                        <p className="why-card-stat-label">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="horizontal-scroll-indicator">Swipe to explore →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Block */}
      <section className="booking-section" data-wf--booking--variant="base" id="booking">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="booking-inner">
              <div className="section-title-inner center">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">Begin A Commission</p>
                </div>
                <div className="section-title-block booking">
                  <h2 className="section-title">
                    Ready To <span className="title-span">Talk About</span> Your Space?
                  </h2>
                </div>
                <p className="section-excerpt booking" fade-in="0.2">
                  Tell us about your space — we&apos;ll tell you honestly whether we&apos;re the
                  right studio for it.
                </p>
              </div>
              <div className="booking-form w-form" fade-in="0.4">
                <form className="booking-form-block" onSubmit={(e) => e.preventDefault()}>
                  <div className="booking-form-wrapper">
                    <div
                      className="input-field-wrapper"
                      id="w-node-_2cfe9434-3216-8784-67cc-4ca584fa7b7d-84fa7b6d"
                    >
                      <label className="form-label" htmlFor="Name">
                        Full Name *
                      </label>
                      <input
                        aria-label="Name Filed"
                        className="input-field w-input"
                        id="Name"
                        placeholder="Enter full name"
                        required
                        type="text"
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
                        aria-label="Email Filed"
                        className="input-field w-input"
                        id="email"
                        placeholder="Enter email address"
                        required
                        type="email"
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
                        defaultValue="Residential"
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
    </main>
  );
}
