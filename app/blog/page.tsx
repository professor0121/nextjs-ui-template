"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blog.json";
import cmsPosts from "@/data/cms-posts.json";

export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    { label: "All Project", slug: "all" },
    { label: "Studio", slug: "studio" },
    { label: "Hospitality", slug: "hospitality" },
    { label: "Process", slug: "process" },
    { label: "Material", slug: "material" },
    { label: "Light", slug: "light" },
  ];

  // Featured blog posts (first 3 posts in layout)
  const featuredPosts = cmsPosts.slice(0, 3);
  // Archive list contains all posts from index 3 onwards, but we'll show all matching posts in the archive grid
  const archivePosts = cmsPosts.filter((post) => {
    if (selectedFilter === "all") return true;
    return post.category.toLowerCase() === selectedFilter;
  });

  const handleFilterClick = (slug: string) => {
    setSelectedFilter(slug);
  };

  return (
    <main className="main-wrapper">
      {/* Blog Hero Section */}
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
                  <p className="subtitle-text">{blogData.hero.tag}</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  Insights From The World Of{" "}
                  <span className="title-span">Interiors</span>
                </h1>
                <p className="common-hero-excerpt blog" hero-fade-in="0.2">
                  {blogData.hero.description}
                </p>
                <div className="common-hero-button-wrapper" hero-fade-in="0.4">
                  <a className="primary-button w-inline-block" href="#featured-blog">
                    <div className="button-text-block">
                      <div className="button-text">Read Featured Essay</div>
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
                {blogData.hero.stats.map((stat, idx) => {
                  const isLast = idx === blogData.hero.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_39c898c8-113f-75da-0d66-2d4f7beaebb2-dac3aa3a"
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
          Journal
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

      {/* Featured Essays Section */}
      <section className="featured-blog-section">
        <div className="section-gap" id="featured-blog">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{blogData.featured.tag}</p>
                </div>
                <div className="section-title-block featured-blog">
                  <h2 className="section-title">
                    Three <span className="title-span">Stories</span> From The Studio
                    Desk.
                  </h2>
                </div>
              </div>
              <p className="section-excerpt featured-blog" fade-in="0.2">
                {blogData.featured.description}
              </p>
            </div>

            {featuredPosts.length >= 3 && (
              <div className="featured-work-grid">
                {/* Major Lead Left Post */}
                <div className="featured-blog-list-wrapper w-dyn-list">
                  <div className="featured-blog-list w-dyn-items" role="list">
                    <div className="featured-blog w-dyn-item" fade-in="0.4" role="listitem">
                      <div className="featured-blog-card" cms-hover-trigger="true">
                        <div className="featured-blog-bg">
                          <Image
                            alt={featuredPosts[0].title}
                            className="featured-blog-bg-image"
                            src={featuredPosts[0].mainImage}
                            width={939}
                            height={626}
                            priority
                          />
                          <div className="featured-blog-overlay"></div>
                        </div>
                        <div className="featured-blog-content-block">
                          <div className="feature-blog-meta-block">
                            <Link
                              className="blog-card-category"
                              href={`/blog-categories/${featuredPosts[0].category.toLowerCase()}`}
                            >
                              {featuredPosts[0].category}
                            </Link>
                            <p className="blog-meta-text">{featuredPosts[0].published}</p>
                          </div>
                          <div className="featured-blog-content-inner">
                            <Link
                              aria-label="Blog Title"
                              className="cms-title-link w-inline-block"
                              href={`/post/${featuredPosts[0].slug}`}
                            >
                              <h3 className="featured-blog-title">
                                {featuredPosts[0].title}
                              </h3>
                            </Link>
                            <p className="featured-blog-summary">
                              {featuredPosts[0].excerpt}
                            </p>
                          </div>
                          <div className="featured-blog-footer">
                            <div className="blog-card-topic-wrapper">
                              {featuredPosts[0].topics.slice(0, 3).map((topic, tIdx) => (
                                <p key={tIdx} className="blog-topic">
                                  {topic}
                                </p>
                              ))}
                            </div>
                            <Link
                              className="primary-button w-inline-block"
                              data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                              data-wf-variant-state="base"
                              href={`/post/${featuredPosts[0].slug}`}
                            >
                              <div className="button-text-block">
                                <div className="button-text">read Article</div>
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

                {/* Minor Right Column (2 posts) */}
                <div className="featured-blog-list-wrapper w-dyn-list">
                  <div className="featured-blog-collection w-dyn-items" role="list">
                    {featuredPosts.slice(1, 3).map((post, idx) => (
                      <div
                        key={idx}
                        className="featured-blog w-dyn-item"
                        fade-in="0.6"
                        role="listitem"
                      >
                        <div className="featured-blog-card-two" cms-hover-trigger="true">
                          <div className="featured-blog-bg">
                            <Image
                              alt={post.title}
                              className="featured-blog-bg-image"
                              src={post.mainImage}
                              width={939}
                              height={450}
                            />
                            <div className="featured-blog-overlay"></div>
                          </div>
                          <div className="featured-blog-content-wrapper">
                            <Link
                              className="blog-card-category"
                              href={`/blog-categories/${post.category.toLowerCase()}`}
                            >
                              {post.category}
                            </Link>
                            <div>
                              <Link
                                aria-label="Blog Title"
                                className="cms-title-link w-inline-block"
                                href={`/post/${post.slug}`}
                              >
                                <h3 className="featured-blog-title-two">{post.title}</h3>
                              </Link>
                              <Link
                                className="link-button w-inline-block"
                                href={`/post/${post.slug}`}
                              >
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

      {/* Editorial Archive Section */}
      <section className="blog-archive-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{blogData.archive.tag}</p>
                </div>
                <div className="section-title-block blog">
                  <h2 className="section-title">
                    Discover More From Our <span className="title-span">Journal</span>
                  </h2>
                </div>
              </div>
              <p className="section-excerpt blog" fade-in="0.2">
                {blogData.archive.description}
              </p>
            </div>

            {/* Filter Tabs */}
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

            {/* Grid of Archive Posts */}
            <div className="blog-list-wrapper w-dyn-list">
              <div className="blog-archive w-dyn-items" role="list">
                {archivePosts.map((post, idx) => (
                  <div key={idx} className="blog-list-item w-dyn-item" role="listitem">
                    <article className="blog-card">
                      <div className="post-thumbnail-wrapper">
                        <Link
                          className="post-thumbnail-link w-inline-block"
                          cms-hover-trigger="true"
                          href={`/post/${post.slug}`}
                        >
                          <Image
                            alt={post.title}
                            className="post-thumbnail"
                            src={post.mainImage}
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

                      <div className="blog-card-content-block" fade-in="0.4">
                        <div className="blog-meta-wrapper">
                          <div className="blog-meta-inner-block">
                            <Link
                              className="blog-card-category"
                              href={`/blog-categories/${post.category.toLowerCase()}`}
                            >
                              {post.category}
                            </Link>
                            <div className="post-meta-text">{post.published}</div>
                          </div>
                          <div className="post-meta-inner">
                            <div className="post-meta-text higlight">
                              {post.readingTime.split(" ")[0]}
                            </div>
                            <div className="post-meta-text"> min read</div>
                          </div>
                        </div>
                        <div className="post-content-inner">
                          <Link
                            aria-label="Blog Title"
                            className="cms-title-link w-inline-block"
                            href={`/post/${post.slug}`}
                          >
                            <h3 className="post-title">{post.title}</h3>
                          </Link>
                          <p className="post-excerpt">{post.excerpt}</p>
                        </div>
                        <div className="blog-card-topic-inner">
                          <div className="blog-card-topic-wrapper">
                            {post.topics.slice(0, 3).map((topic, tIdx) => (
                              <p key={tIdx} className="blog-topic">
                                {topic}
                              </p>
                            ))}
                          </div>
                          <Link
                            className="link-button w-inline-block"
                            href={`/post/${post.slug}`}
                          >
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
                      </div>
                    </article>
                  </div>
                ))}
              </div>
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
