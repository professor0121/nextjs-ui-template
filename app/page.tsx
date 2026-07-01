"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import homeData from "@/data/home.json";
import cmsServices from "@/data/cms-services.json";
import cmsProjects from "@/data/cms-projects.json";
import cmsPosts from "@/data/cms-posts.json";

export default function Home() {
  const [aboutActiveSlide, setAboutActiveSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play or simple slide controls
  const handleAboutNext = () => {
    setAboutActiveSlide((prev) => (prev + 1) % homeData.about.slides.length);
  };

  const handleAboutPrev = () => {
    setAboutActiveSlide(
      (prev) => (prev - 1 + homeData.about.slides.length) % homeData.about.slides.length
    );
  };

  return (
    <main className="main-wrapper">
      {/* Home Hero Section */}
      <div className="home-hero-scroll-wrapper">
        <div className="home-hero-sticky-wrapper">
          <section className="home-hero-section">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="home-hero-main">
                <div className="home-hero-block">
                  <div className="hero-left">
                    <div className="hero-portrait">
                      <Image
                        alt="Studio lead architect in atelier"
                        className="hero-portrait-img"
                        src={homeData.hero.leftImage}
                        width={930}
                        height={1240}
                        priority
                      />
                      <div className="hero-portrait-after"></div>
                    </div>
                    <div className="section-stat-block">
                      <div className="stat-number">
                        180<span className="stats-span">+</span>
                      </div>
                      <div className="stat-label">{homeData.hero.completedLabel}</div>
                    </div>
                  </div>

                  <div
                    className="home-hero-center"
                    id="w-node-_1afd99af-a03a-ebf8-97da-db9bac09b4db-1db4a497"
                  >
                    <div className="home-hero-center-inner">
                      <div className="hero-grid-item-before left"></div>
                      <div className="hero-grid-item-before right"></div>
                      <h1 className="home-hero-title">
                        Interiors That Win By{" "}
                        <span className="title-span">Design</span>
                      </h1>
                      <div className="home-hero-content-inner">
                        <p className="home-hero-excerpt">{homeData.hero.excerpt}</p>
                        <div className="homer-hero-button-wrapper">
                          <Link className="primary-button w-inline-block" href="/projects">
                            <div className="button-text-block">
                              <div className="button-text">View Our Work</div>
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
                          <Link
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-right">
                    <div className="hero-badge-circle">
                      <div
                        className="hero-ring"
                        style={{
                          background:
                            "repeating-conic-gradient(#fff 0deg 6deg, transparent 6deg 12deg)",
                          mask: "radial-gradient(closest-side, transparent 48%, #000 49%, #000 100%)",
                          WebkitMask:
                            "radial-gradient(closest-side, transparent 48%, #000 49%, #000 100%)",
                        }}
                      ></div>
                      <div className="hero-badge-label">{homeData.hero.badgeText}</div>
                    </div>
                    <div className="hero-portrait">
                      <Image
                        alt="Studio lead architect in atelier"
                        className="hero-portrait-img"
                        src={homeData.hero.rightImage}
                        width={930}
                        height={1240}
                        priority
                      />
                      <div className="hero-portrait-after"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="home-about-section">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="home-about-main">
                <div className="about-wrapper">
                  <div className="about-left">
                    <div
                      className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                      data-wf--subtitle-block--variant="spacing-bottom"
                    >
                      <div className="subtile-dot"></div>
                      <p className="subtitle-text">{homeData.about.tag}</p>
                    </div>
                    <p className="about-excerpt">{homeData.about.excerpt}</p>
                  </div>

                  {/* React-controlled Slider */}
                  <div
                    className="home-about-slider w-slider"
                    data-animation="cross"
                    data-duration="700"
                    role="region"
                    aria-label="about gallery"
                  >
                    <div className="home-about-slider-mask w-slider-mask">
                      {homeData.about.slides.map((slide, index) => (
                        <div
                          key={index}
                          className="home-about-slider-item w-slide"
                          style={{
                            opacity: aboutActiveSlide === index ? 1 : 0,
                            display: aboutActiveSlide === index ? "block" : "none",
                            transition: "opacity 700ms ease",
                            zIndex: aboutActiveSlide === index ? 1 : 0,
                          }}
                        >
                          <div className="about-media">
                            <div className="about-slide-inner">
                              <Image
                                alt={slide.title}
                                className="about-slide-img"
                                src={slide.image}
                                width={1396}
                                height={930}
                              />
                              <div className="about-slide-overlay"></div>
                            </div>
                            <div className="about-media-body">
                              <h2 className="about-media-title">{slide.title}</h2>
                              <p className="about-media-desc">{slide.desc}</p>
                              <div className="slider-index">{slide.index}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="home-about-slider-arrow left w-slider-arrow-left"
                      role="button"
                      tabIndex={0}
                      onClick={handleAboutPrev}
                    >
                      <div className="home-hero-slider-arrow-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <line x1="19" x2="5" y1="12" y2="12" />
                          <polyline points="12 19 5 12 12 5" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="home-about-slider-arrow right w-slider-arrow-right"
                      role="button"
                      tabIndex={0}
                      onClick={handleAboutNext}
                    >
                      <div className="home-hero-slider-arrow-icon w-embed">
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
                    </div>
                  </div>

                  <div className="home-about-content-wrapper">
                    <div className="home-about-content-block">
                      <h2 className="section-title">
                        We Design <span className="title-span">Spaces</span>, Not Just
                        Rooms.
                      </h2>
                      <div className="about-pills">
                        <div className="about-pill">
                          <div className="about-pill-icon-block">
                            <div className="about-pill-icon w-embed">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3 12l2 2 4-4 8 8 4-4" />
                              </svg>
                            </div>
                          </div>
                          <div className="about-pill-title">Bespoke Approach</div>
                        </div>
                        <div className="about-pill">
                          <div className="about-pill-icon-block">
                            <div className="about-pill-icon w-embed">
                              <svg
                                className="about-pill-icon-svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v6l4 2" />
                              </svg>
                            </div>
                          </div>
                          <div className="about-pill-title">Heritage Focus</div>
                        </div>
                      </div>
                      <p className="about-excerpt">{homeData.about.body}</p>
                    </div>
                    <div className="about-button-wrapper">
                      <Link
                        className="secondary-button w-inline-block"
                        data-wf--secondary-button--variant="base"
                        data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                        data-wf-variant-state="base"
                        href="/about"
                      >
                        <div className="button-text-block">
                          <div className="button-text">More About Us</div>
                          <div className="secondary-button-bg"></div>
                          <div className="secondary-button-bg-inner"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Logo Ticker */}
      <div className="company-logo-ticker">
        <div className="company-logo-inner">
          {homeData.tickerLogos.map((logo, idx) => (
            <div key={idx} className="company-logo-block">
              <img alt="company-logo" className="company-logo" src={logo} />
            </div>
          ))}
        </div>
        <div className="company-logo-inner">
          {homeData.tickerLogos.map((logo, idx) => (
            <div key={idx} className="company-logo-block">
              <img alt="company-logo" className="company-logo" src={logo} />
            </div>
          ))}
        </div>
        <div className="company-logo-inner">
          {homeData.tickerLogos.map((logo, idx) => (
            <div key={idx} className="company-logo-block">
              <img alt="company-logo" className="company-logo" src={logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="home-service-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{homeData.services.tag}</p>
                </div>
                <div className="section-title-block home-projects">
                  <h2 className="section-title">
                    Where <span className="title-span">Vision</span> Meets Space
                  </h2>
                </div>
              </div>
              <div className="home-service-fun-fact-wrapper">
                <p className="section-excerpt home-service">{homeData.services.excerpt}</p>
                <div className="home-service-fun-fact">
                  <span className="service-fun-fact-count">
                    {homeData.services.factCount}
                  </span>{" "}
                  {homeData.services.factLabel}
                </div>
              </div>
            </div>

            <div className="horizontal-scroll-wrapper">
              <div className="service-list-wrapper w-dyn-list">
                <div className="service-collection-list w-dyn-items" role="list">
                  {cmsServices.slice(0, 3).map((service, idx) => (
                    <div
                      key={idx}
                      className="service-collection-list-item w-dyn-item"
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
                              <p className="service-item-meta">
                                {service.stats[0]?.count || "24 Completed"}
                              </p>
                              <p className="service-item-meta">
                                {service.stats[1]?.count || "Full Residence"}
                              </p>
                              <p className="service-item-meta">
                                {service.stats[2]?.count || "Villa · Apartment"}
                              </p>
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
              <div className="horizontal-scroll-indicator">Swipe to explore →</div>
            </div>

            <div className="section-button-wrapper">
              <Link
                className="secondary-button w-inline-block"
                data-wf--secondary-button--variant="base"
                data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                data-wf-variant-state="base"
                href="/services"
              >
                <div className="button-text-block">
                  <div className="button-text">View All Services</div>
                  <div className="secondary-button-bg"></div>
                  <div className="secondary-button-bg-inner"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects and Process Wrapper */}
      <div className="div-block">
        {/* Projects Section */}
        <section className="home-project-section">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="section-title-wrapper">
                <div className="section-title-inner">
                  <div
                    className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                    data-wf--subtitle-block--variant="spacing-bottom"
                  >
                    <div className="subtile-dot"></div>
                    <p className="subtitle-text">{homeData.work.tag}</p>
                  </div>
                  <div className="section-title-block home-projects">
                    <h2 className="section-title">
                      Every <span className="title-span">Space</span> Has A Story
                    </h2>
                  </div>
                </div>
                <p className="section-excerpt project">{homeData.work.excerpt}</p>
              </div>

              <div className="home-project-scroll-wrapper">
                <div className="home-project-wrapp">
                  <div className="home-project-inner">
                    {/* Rebuilding Webflow multiple-list cards as responsive layout mapping projects data */}
                    {cmsProjects.slice(0, 4).map((project, idx) => {
                      const wrappers = ["one", "two", "three", "four"];
                      const metaText = [
                        "Coastal Villa",
                        "Historic Palazzo",
                        "Rural Restoration",
                        "Penthouse",
                      ];
                      return (
                        <div
                          key={idx}
                          className={`home-project-list-wrapper ${wrappers[idx]} w-dyn-list`}
                        >
                          <div className="home-project-list w-dyn-items" role="list">
                            <div className="home-project-item w-dyn-item" role="listitem">
                              <div className="home-project-card is-active" data-cat="residential">
                                <Image
                                  alt={project.title}
                                  className="home-project-thumbnail"
                                  src={project.mainImage}
                                  width={800}
                                  height={1000}
                                />
                                <div className="home-project-card-inner">
                                  <div className="home-project-card-title-block">
                                    <div className="home-project-meta-wrapper">
                                      <div className="project-item-meta">
                                        {metaText[idx]}
                                      </div>
                                    </div>
                                    <Link
                                      aria-label="Project Title"
                                      className="home-project-title-link w-inline-block"
                                      href={`/project/${project.slug}`}
                                    >
                                      <h3 className="home-project-card-title">
                                        {project.title}
                                      </h3>
                                    </Link>
                                  </div>
                                  <div className="button-wrapper">
                                    <Link
                                      className="primary-button w-inline-block"
                                      data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                                      data-wf-variant-state="base"
                                      href={`/project/${project.slug}`}
                                    >
                                      <div className="button-text-block">
                                        <div className="button-text">View Work</div>
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
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="home-project-category-wrapper">
                    <div className="home-project-category-list">
                      <div className="home-project-category-list-item">
                        <div className="home-project-category-line"></div>
                        <h3 className="home-project-category one">Residential</h3>
                        <div className="home-project-category-number">5</div>
                      </div>
                      <div className="home-project-category-list-item two">
                        <div className="home-project-category-line"></div>
                        <h3 className="home-project-category two">Hospitality</h3>
                        <div className="home-project-category-number">4</div>
                      </div>
                      <div className="home-project-category-list-item three">
                        <div className="home-project-category-line"></div>
                        <h3 className="home-project-category three">Heritage</h3>
                        <div className="home-project-category-number">7</div>
                      </div>
                      <div className="home-project-category-list-item four">
                        <div className="home-project-category-line"></div>
                        <h3 className="home-project-category four">Commercial</h3>
                        <div className="home-project-category-number">11</div>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <Link
                        className="secondary-button w-inline-block"
                        data-wf--secondary-button--variant="base"
                        data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                        data-wf-variant-state="base"
                        href="/projects"
                      >
                        <div className="button-text-block">
                          <div className="button-text">View Our Works</div>
                          <div className="secondary-button-bg"></div>
                          <div className="secondary-button-bg-inner"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process/Approach Section */}
        <section className="home-process-section">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="home-process-wrapper">
                <div className="home-process-content-wrapper">
                  <div className="section-title-inner">
                    <div
                      className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                      data-wf--subtitle-block--variant="spacing-bottom"
                    >
                      <div className="subtile-dot"></div>
                      <p className="subtitle-text">{homeData.approach.tag}</p>
                    </div>
                    <div className="section-title-block">
                      <h2 className="section-title">Turning Ideas Into Timeless Spaces</h2>
                    </div>
                  </div>

                  <div className="process-step-list-wrapper">
                    <div className="process-step-list">
                      {homeData.approach.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className={`process-step ${activeStep === idx ? "is-active" : ""}`}
                          onClick={() => setActiveStep(idx)}
                        >
                          <div className="process-step-head">
                            <p className="process-step-order">{step.order}</p>
                            <h3
                              className="process-step-title"
                              style={{ color: activeStep === idx ? "yellow" : "white" }}
                            >
                              {step.title}
                            </h3>
                            <div
                              className="process-step-arrow"
                              style={{
                                transform: activeStep === idx ? "rotate(45deg)" : "none",
                                backgroundColor: activeStep === idx ? "yellow" : "transparent",
                                color: activeStep === idx ? "black" : "white",
                                transition: "all 0.3s ease",
                              }}
                            >
                              <div className="process-step-arrow-icon w-embed">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <line x1="12" x2="12" y1="5" y2="19" />
                                  <line x1="5" x2="19" y1="12" y2="12" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            className="process-step-body"
                            style={{
                              height: activeStep === idx ? "auto" : 0,
                              overflow: "hidden",
                              transition: "height 0.4s ease",
                            }}
                          >
                            <div className="process-step-body-inner">
                              <p className="process-step-text">{step.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="button-wrapper">
                      <Link
                        className="secondary-button w-inline-block"
                        data-wf--secondary-button--variant="base"
                        data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                        data-wf-variant-state="base"
                        href="/contact"
                      >
                        <div className="button-text-block">
                          <div className="button-text">Request A Consultation</div>
                          <div className="secondary-button-bg"></div>
                          <div className="secondary-button-bg-inner"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="process-mdeia-wrapper">
                  {homeData.approach.mediaSlides.map((slide, idx) => (
                    <div
                      key={idx}
                      className="process-media-slide"
                      style={{
                        display: activeStep === idx ? "block" : "none",
                        opacity: activeStep === idx ? 1 : 0,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <Image
                        alt={slide.alt}
                        className="process-media-slide-img"
                        src={slide.image}
                        width={1408}
                        height={938}
                      />
                      <div className="process-media-slide-overlay">
                        <div className="process-info-card">
                          <div className="process-info-card-top">
                            <p className="process-media-card-title">{slide.card.title}</p>
                            <p className="process-media-card-status">{slide.card.status}</p>
                          </div>
                          <div className="process-info-list">
                            {slide.card.details.map((detail, dIdx) => (
                              <div key={dIdx} className="process-info-list-item">
                                <p>{detail.label}</p>
                                <p className="process-info-highlght">{detail.value}</p>
                              </div>
                            ))}
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
      </div>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="testimonials-wrapper">
              <div className="testimonial-content-wrapper">
                <div className="section-title-inner">
                  <div
                    className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                    data-wf--subtitle-block--variant="spacing-bottom"
                  >
                    <div className="subtile-dot"></div>
                    <p className="subtitle-text">{homeData.testimonials.tag}</p>
                  </div>
                  <div className="section-title-block home-testimonial">
                    <h2 className="section-title">
                      Reflections From Our <span className="title-span">Community.</span>
                    </h2>
                  </div>
                </div>
                <div className="testimonial-stat-block">
                  <div className="stat-number">
                    {homeData.testimonials.factNumber}
                    <span className="stats-span">{homeData.testimonials.factPercent}</span>
                  </div>
                  <div className="stat-label testimonial">
                    {homeData.testimonials.factLabel}
                  </div>
                </div>
              </div>

              {/* Testimonial Tabs */}
              <div className="testimonial-tabs w-tabs">
                <div className="testimonial-tab-content w-tab-content">
                  {homeData.testimonials.quotes.map((quote, idx) => (
                    <div
                      key={idx}
                      className={`testimonial-tab-pane w-tab-pane ${
                        activeTestimonial === idx ? "w--tab-active" : ""
                      }`}
                      style={{
                        display: activeTestimonial === idx ? "block" : "none",
                        opacity: activeTestimonial === idx ? 1 : 0,
                        transition: "opacity 300ms ease",
                      }}
                    >
                      <div className="testimonials-quote">
                        <p className="testimonials-quote-text">{quote.text}</p>
                        <div className="testimonials-quote-footer">
                          <div className="testimonials-quote-avatar">
                            <Image
                              alt="Testimonial Author"
                              className="testimonials-quote-avatar-img img"
                              src={quote.avatar}
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="testimonial-quote-info">
                            <div className="testimonials-quote-person-name">
                              {quote.author}
                            </div>
                            <div className="testimonials-quote-person-role">
                              {quote.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="testimonial-tab-menu w-tab-menu">
                  {homeData.testimonials.quotes.map((quote, idx) => (
                    <a
                      key={idx}
                      className={`testimonial-tab-link w-inline-block w-tab-link ${
                        activeTestimonial === idx ? "w--current" : ""
                      }`}
                      onClick={() => setActiveTestimonial(idx)}
                    >
                      <Image
                        alt="testimonial-tab-image"
                        className="testimonial-tab-image"
                        src={quote.avatar}
                        width={80}
                        height={80}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="home-blog-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{homeData.blog.tag}</p>
                </div>
                <div className="section-title-block home-blog">
                  <h2 className="section-title">
                    Design, Lifestyle &amp; <span className="title-span">Inspiration</span>
                  </h2>
                </div>
              </div>
              <div className="button-wrapper">
                <Link
                  className="secondary-button w-inline-block"
                  data-wf--secondary-button--variant="base"
                  data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                  data-wf-variant-state="base"
                  href="/blog"
                >
                  <div className="button-text-block">
                    <div className="button-text">All Journal Entries</div>
                    <div className="secondary-button-bg"></div>
                    <div className="secondary-button-bg-inner"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="horizontal-scroll-wrapper">
              <div className="blog-list-wrapper w-dyn-list">
                <div className="blog-collection-list w-dyn-items" role="list">
                  {cmsPosts.slice(0, 3).map((post, idx) => (
                    <div key={idx} className="blog-collection-list-item w-dyn-item" role="listitem">
                      <article className="post-card">
                        <div className="post-thumbnail-wrapper" data-cms-hover-trigger="true">
                          <Link className="post-thumbnail-link w-inline-block" href={`/post/${post.slug}`}>
                            <Image
                              alt={post.title}
                              className="post-thumbnail"
                              src={post.mainImage}
                              width={1575}
                              height={1050}
                            />
                          </Link>
                          <div
                            className="image-on-scroll-overlay"
                            data-wf-component-id="91305ce3-1f57-4dde-9cee-a20932724526"
                            data-wf-variant-state="base"
                          >
                            {[...Array(10)].map((_, i) => (
                              <div key={i} className="image-overlay-strip"></div>
                            ))}
                          </div>
                          <Link className="post-meta-link" href={`/blog-categories/${post.category.toLowerCase()}`}>
                            {post.category}
                          </Link>
                        </div>
                        <div className="post-card-content-block">
                          <div className="post-content-inner">
                            <div className="post-meta-wrapper">
                              <div className="post-meta-text">{post.published}</div>
                              <div className="post-meta-text">.</div>
                              <div className="post-meta-inner">
                                <div className="post-meta-text">{post.readingTime.split(' ')[0]}</div>
                                <div className="post-meta-text"> min read</div>
                              </div>
                            </div>
                            <Link
                              aria-label="Project Title"
                              className="cms-title-link w-inline-block"
                              href={`/post/${post.slug}`}
                            >
                              <h3 className="post-title">{post.title}</h3>
                            </Link>
                            <p className="post-excerpt">{post.excerpt}</p>
                          </div>
                          <Link className="link-button w-inline-block" href={`/post/${post.slug}`}>
                            <div>Read More</div>
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
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              <div className="horizontal-scroll-indicator">Swipe to explore →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" data-wf--booking--variant="top-ovelay-v2" id="booking">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="booking-inner">
              <div className="section-title-inner center">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{homeData.booking.tag}</p>
                </div>
                <div className="section-title-block booking">
                  <h2 className="section-title">
                    Ready To <span className="title-span">Talk About</span> Your Space?
                  </h2>
                </div>
                <p className="section-excerpt booking">{homeData.booking.excerpt}</p>
              </div>

              {/* Inquiries / Booking Form - Controlled Form */}
              <div className="booking-form w-form">
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
                        aria-label="Name Field"
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
                        aria-label="Email Field"
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
                      <input aria-label="Date Field" className="input-field" type="date" id="Date" />
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
          <div className="bookig-top-overlay w-variant-542d99cf-8f36-9298-a450-bdcffe7823ad"></div>
          <Image
            alt="Reservation Hero BG Image"
            className="booking-bg-image"
            src={homeData.booking.bgImage}
            width={2400}
            height={1600}
          />
          <div className="booking-bg-overlay"></div>
        </div>
      </section>
    </main>
  );
}
