"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import cmsProjects from "@/data/cms-projects.json";

// Map projects to their categories for filtering
const projectCategoryMap: Record<string, { slug: string; label: string }> = {
  "villa-serenoa": { slug: "hospitality", label: "Hospitality" },
  "palazzo-nero": { slug: "heritage", label: "Heritage" },
  "casa-bellini": { slug: "heritage", label: "Heritage" },
  "studio-altura": { slug: "residential", label: "Residential" },
  "luce-series": { slug: "lighting", label: "Lighting" },
  "atelier-rive": { slug: "commercial", label: "Commercial" },
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    { label: "All Project", slug: "all" },
    { label: "Lighting", slug: "lighting" },
    { label: "Commercial", slug: "commercial" },
    { label: "Heritage", slug: "heritage" },
    { label: "Hospitality", slug: "hospitality" },
    { label: "Residential", slug: "residential" },
  ];

  // Featured projects list (first 4 items, sorted to match the layout index)
  const featuredSlugs = ["villa-serenoa", "palazzo-nero", "casa-bellini", "studio-altura"];
  const featuredProjects = featuredSlugs
    .map((slug) => cmsProjects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof cmsProjects;

  const handleFilterClick = (slug: string) => {
    setSelectedFilter(slug);
  };

  const filteredProjects = cmsProjects.filter((project) => {
    if (selectedFilter === "all") return true;
    const cat = projectCategoryMap[project.slug];
    return cat && cat.slug === selectedFilter;
  });

  return (
    <main className="main-wrapper">
      {/* Hero Section */}
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
                  <p className="subtitle-text">{projectsData.hero.tag}</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  Spaces That Tell A <span className="title-span">Story</span> Slowly.
                </h1>
                <p className="common-hero-excerpt projects" hero-fade-in="0.2">
                  {projectsData.hero.description}
                </p>
                <div className="common-hero-button-wrapper" hero-fade-in="0.4">
                  <a className="primary-button w-inline-block" href="#featured-works">
                    <div className="button-text-block">
                      <div className="button-text">Explore Featured Work</div>
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
                  <Link
                    className="secondary-button w-inline-block"
                    data-wf--secondary-button--variant="hover-white-bg"
                    data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                    data-wf-variant-state="40520a71-aa9b-6a51-5ecc-905a04a2984a"
                    href="/contact"
                  >
                    <div className="button-text-block">
                      <div className="button-text">Book Consultation</div>
                      <div className="secondary-button-bg w-variant-40520a71-aa9b-6a51-5ecc-905a04a2984a"></div>
                      <div className="secondary-button-bg-inner"></div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.6">
                {projectsData.hero.stats.map((stat, idx) => {
                  const isLast = idx === projectsData.hero.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_39c898c8-113f-75da-0d66-2d4f7beaebb2-45e960d2"
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
          Projects
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

      {/* Featured Works Section */}
      <section className="featured-work-section" id="featured-works">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{projectsData.featured.tag}</p>
                </div>
                <div className="section-title-block featured-work">
                  <h2 className="section-title">
                    Latest <span className="title-span">Featured</span> Creations
                  </h2>
                </div>
              </div>
              <p className="section-excerpt featured-project" fade-in="0.2">
                {projectsData.featured.description}
              </p>
            </div>

            {featuredProjects.length > 0 && (
              <div className="featured-work-wrapper">
                {/* Major Lead Featured Project card */}
                <div className="featured-project-list-wrapper w-dyn-list" fade-in="0.4">
                  <div className="featured-project-list w-dyn-items" role="list">
                    <div className="featured-project w-dyn-item" role="listitem">
                      <article className="featured-project-card" cms-hover-trigger="true">
                        <div className="featured-project-thumbnail-block">
                          <Image
                            alt={featuredProjects[0].title}
                            className="featured-project-thumbnail"
                            src={featuredProjects[0].mainImage}
                            width={939}
                            height={626}
                          />
                        </div>
                        <div className="featured-project-overlay"></div>
                        <div className="featured-project-header">
                          <Link
                            aria-label="Project Category"
                            className="featured-card-tag w-inline-block"
                            href={`/project-category/${
                              projectCategoryMap[featuredProjects[0].slug]?.slug
                            }`}
                          >
                            <div>
                              {projectCategoryMap[featuredProjects[0].slug]?.label}
                            </div>
                            <div className="featured-card-tag-dot"></div>
                          </Link>
                          <p className="featured-lead-index">01 / 04</p>
                        </div>
                        <div className="featured-project-content-wrapper">
                          <div className="featured-project-content-block">
                            <div className="featured-lead-meta">
                              <p className="featured-project-meta">
                                {featuredProjects[0].stats[0]?.text.split(".")[0] ||
                                  "Coastal Villa"}
                              </p>
                              <p className="featured-project-meta">
                                {featuredProjects[0].stats[0]?.count}
                              </p>
                              <p className="featured-project-meta">
                                {featuredProjects[0].stats[1]?.count}
                              </p>
                            </div>
                            <Link
                              aria-label="Project Title"
                              className="cms-title-link w-inline-block"
                              href={`/project/${featuredProjects[0].slug}`}
                            >
                              <h3 className="featured-project-title">
                                {featuredProjects[0].title}
                              </h3>
                            </Link>
                            <p className="featured-project-excerpt">
                              {featuredProjects[0].excerpt}
                            </p>
                            <div className="featured-lead-stats">
                              <div className="featured-lead-stat">
                                <p className="featured-lead-stat-val">9</p>
                                <p className="featured-lead-stat-label">Months</p>
                              </div>
                              <div className="featured-lead-stat">
                                <p className="featured-lead-stat-val">14</p>
                                <p className="featured-lead-stat-label">Custom Pieces</p>
                              </div>
                              <div className="featured-lead-stat">
                                <p className="featured-lead-stat-val">1</p>
                                <p className="featured-lead-stat-label">Lead Steward</p>
                              </div>
                            </div>
                          </div>
                          <div className="button-wrapper">
                            <Link
                              className="primary-button w-inline-block"
                              data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                              data-wf-variant-state="base"
                              href={`/project/${featuredProjects[0].slug}`}
                            >
                              <div className="button-text-block">
                                <div className="button-text">View Project</div>
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
                      </article>
                    </div>
                  </div>
                </div>

                {/* Remaining 3 Featured Grid items */}
                <div className="featured-project-grid-wrapper w-dyn-list">
                  <div className="featured-project-grid w-dyn-items" role="list">
                    {featuredProjects.slice(1, 4).map((project, idx) => (
                      <div key={idx} className="featured-project w-dyn-item" role="listitem">
                        <div className="featured-project-item">
                          <div className="featured-card-image">
                            <Link
                              className="cms-thumbnail-block w-inline-block"
                              cms-hover-trigger="true"
                              href={`/project/${project.slug}`}
                            >
                              <Image
                                alt="Project Thumbnail"
                                className="featured-project-image"
                                src={project.mainImage}
                                width={939}
                                height={626}
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
                          </div>

                          <div className="featured-card-content-block" fade-in="0.4">
                            <div className="featured-card-top">
                              <Link
                                aria-label="Project Category"
                                className="featured-card-tag w-inline-block"
                                href={`/project-category/${
                                  projectCategoryMap[project.slug]?.slug
                                }`}
                              >
                                <div>{projectCategoryMap[project.slug]?.label}</div>
                                <div className="featured-card-tag-dot"></div>
                              </Link>
                              <p className="featured-card-index">0{idx + 2} / 04</p>
                            </div>
                            <div className="featured-card-meta-block">
                              <p className="featured-card-meta">
                                {project.stats[0]?.count}
                              </p>
                              <p className="featured-card-meta">
                                {project.stats[1]?.count}
                              </p>
                            </div>
                            <Link
                              aria-label="project Title"
                              className="cms-title-link w-inline-block"
                              href={`/project/${project.slug}`}
                            >
                              <h3 className="project-title">{project.title}</h3>
                            </Link>
                            <p className="featured-card-text">{project.excerpt}</p>
                            <div className="featured-card-footer">
                              <div className="featured-card-meta-wrapper">
                                <p className="featured-card-meta">
                                  {project.stats[0]?.text.split(".")[0]}
                                </p>
                                <p className="featured-card-meta">9 Months</p>
                              </div>
                              <Link
                                className="link-button w-inline-block"
                                href={`/project/${project.slug}`}
                              >
                                <div>View</div>
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
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Portfolio Section */}
      <section className="project-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{projectsData.portfolio.tag}</p>
                </div>
                <div className="section-title-block project">
                  <h2 className="section-title">
                    Our <span className="title-span">Latest</span> Creations
                  </h2>
                </div>
              </div>
              <p className="section-excerpt projects" fade-in="0.2">
                {projectsData.portfolio.description}
              </p>
            </div>

            {/* Portfolio Category Filters */}
            <div className="cms-category-wrapper w-dyn-list" fade-in="0.4">
              <div className="cms-category-list w-dyn-items" role="list">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="cms-category-item w-dyn-item"
                    role="listitem"
                  >
                    <a
                      className={`cms-category-link ${
                        selectedFilter === cat.slug ? "w--current" : ""
                      }`}
                      onClick={() => handleFilterClick(cat.slug)}
                    >
                      {cat.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid of Projects */}
            <div className="project-wrapper w-dyn-list">
              <div className="project-grid w-dyn-items" role="list">
                {filteredProjects.map((project, idx) => (
                  <div key={idx} className="project-item w-dyn-item" role="listitem">
                    <div className="project-card">
                      <div className="project-thumbnail-wrapper">
                        <Link
                          className="project-thumbnail-block w-inline-block"
                          cms-hover-trigger="true"
                          href={`/project/${project.slug}`}
                        >
                          <Image
                            alt="Project Thumbnail"
                            className="project-thumbnail"
                            src={project.mainImage}
                            width={939}
                            height={751}
                          />
                        </Link>
                        <Link
                          className="project-meta-link"
                          href={`/project-category/${
                            projectCategoryMap[project.slug]?.slug
                          }`}
                        >
                          {projectCategoryMap[project.slug]?.label}
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
                      </div>

                      <div className="project-card-content-block" fade-in="0.4">
                        <div className="project-card-meta-block">
                          <div className="project-meta-block">
                            <div className="project-meta-dot"></div>
                            <p className="project-card-meta-text">
                              {project.stats[0]?.text}
                            </p>
                          </div>
                          <div className="project-meta-block">
                            <div className="project-meta-dot"></div>
                            <p className="project-card-meta-text">
                              {project.stats[0]?.count}
                            </p>
                          </div>
                        </div>
                        <Link
                          aria-label="Project Title"
                          className="cms-title-link w-inline-block"
                          href={`/project/${project.slug}`}
                        >
                          <h3 className="project-title">{project.title}</h3>
                        </Link>
                        <p className="project-card-excerpt">{project.excerpt}</p>
                        <div className="project-card-footer">
                          <div className="project-card-meta-wrapper">
                            <p className="project-card-meta">9 Months</p>
                            <p className="project-card-meta">
                              {project.stats[0]?.text.split(".")[0]}
                            </p>
                            <p className="project-card-meta">
                              {project.stats[1]?.count}
                            </p>
                          </div>
                          <Link
                            className="link-button w-inline-block"
                            href={`/project/${project.slug}`}
                          >
                            <div>View Project</div>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="project-info-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{projectsData.recognition.tag}</p>
                </div>
                <div className="section-title-block recognition">
                  <h2 className="section-title">
                    Press Notices, <span className="title-span">Clients</span> Feel
                  </h2>
                </div>
              </div>
              <p className="section-excerpt recognition" fade-in="0.2">
                {projectsData.recognition.description}
              </p>
            </div>

            <div className="recognition-grid">
              <div className="recognition-quote" fade-in="0">
                <div className="recognition-quote-mark">“</div>
                <h3 className="recognition-quote-text" inner-title-scroll="true">
                  {projectsData.recognition.quote.text.replace(/[“”]/g, "")}
                </h3>
                <div className="recognition-quote-foot" fade-in="0.4">
                  <div className="recognition-quote-avatar">
                    <Image
                      alt="Dani Whitmore portrait"
                      className="recognition-quote-avatar-img"
                      src={projectsData.recognition.quote.avatar}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h4 className="recognition-quote-name">
                      {projectsData.recognition.quote.author}
                    </h4>
                    <p className="recognition-quote-role">
                      {projectsData.recognition.quote.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="horizontal-scroll-wrapper">
                <div className="recognition-list-wrapper" fade-in="0.2">
                  {/* Press Column */}
                  <div className="recognition-list" fade-in="0.4">
                    <div className="recognition-list-top">
                      <p className="recognition-list-label">
                        {projectsData.recognition.press.label}
                      </p>
                      <p className="recognition-list-value">
                        {projectsData.recognition.press.value}
                      </p>
                    </div>
                    <ul className="recgnition-list" role="list">
                      {projectsData.recognition.press.items.map((item, idx) => {
                        const isLast =
                          idx === projectsData.recognition.press.items.length - 1;
                        return (
                          <li
                            key={idx}
                            className={`recognition-list-item ${
                              isLast ? "recognition-list-item-data-last-true" : ""
                            }`}
                            data-last={isLast ? "true" : undefined}
                          >
                            <div>
                              <p className="recognition-list-item-title">{item.title}</p>
                              <p className="recognition-list-item-desc">
                                {item.description}
                              </p>
                            </div>
                            <p className="recognition-list-item-year">{item.year}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Awards & Returns Column */}
                  <div className="recognition-list" fade-in="0.6">
                    <div className="recognition-list-top">
                      <p className="recognition-list-label">
                        {projectsData.recognition.awards.label}
                      </p>
                      <p className="recognition-list-value">
                        {projectsData.recognition.awards.value}
                      </p>
                    </div>
                    <ul className="recgnition-list" role="list">
                      {projectsData.recognition.awards.items.map((item, idx) => {
                        const isLast =
                          idx === projectsData.recognition.awards.items.length - 1;
                        return (
                          <li
                            key={idx}
                            className={`recognition-list-item ${
                              isLast ? "recognition-list-item-data-last-true" : ""
                            }`}
                            data-last={isLast ? "true" : undefined}
                          >
                            <div>
                              <p className="recognition-list-item-title">{item.title}</p>
                              <p className="recognition-list-item-desc">
                                {item.description}
                              </p>
                            </div>
                            <p className="recognition-list-item-year">{item.year}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="horizontal-scroll-indicator">Swipe to explore →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Block */}
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
