import Image from "next/image";
import Link from "next/link";
import aboutData from "@/data/about.json";

export const metadata = {
  title: "About | Orenda - Webflow HTML website template",
  description: "Learn more about Orenda, a boutique interior design studio based in Milan and Geneva.",
};

export default function About() {
  return (
    <main className="main-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-scroll-wraper">
          <section className="about-hero">
            <div className="about-hero-left">
              <h1 className="about-hero-h1" hero-title="true">
                We <span className="title-span">Design</span> Space Life
              </h1>
              <p className="about-hero-desc" hero-fade-in="0.2">
                {aboutData.hero.description}
              </p>
              <div className="about-hero-meta" hero-fade-in="0.4">
                {aboutData.hero.stats.map((stat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                    <div className="about-hero-meta-item">
                      <p className="about-hero-meta-num">{stat.number}</p>
                      <p className="about-hero-meta-label">{stat.label}</p>
                    </div>
                    {idx < aboutData.hero.stats.length - 1 && (
                      <div className="about-hero-meta-divider"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="about-hero-right">
              <Image
                alt="About Hero Image"
                className="about-hero-right-img"
                src={aboutData.hero.image}
                width={861}
                height={1148}
                priority
              />
              <div
                className="image-on-page-load-overlay"
                data-wf-component-id="6f211481-1501-3981-3432-cbde3a1a1d76"
                data-wf-variant-state="base"
              >
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="page-load-image-overlay-strip"></div>
                ))}
              </div>
              <div className="about-hero-right-after"></div>
              <div className="about-hero-img-label-badge" hero-fade-in="0.6">
                <p className="about-hero-img-label">{aboutData.hero.imageLabel}</p>
                <p className="about-hero-img-label-strong">
                  {aboutData.hero.imageLabelStrong}
                </p>
              </div>
            </div>
          </section>
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
            {aboutData.ticker.map((text, idx) => (
              <div key={idx} style={{ display: "contents" }}>
                <div className="ticker-text">{text}</div>
                <div className="ticker-dot"></div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Story Section */}
      <section className="our-story-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{aboutData.story.tag}</p>
                </div>
                <div className="section-title-block story">
                  <h2 className="section-title">
                    Slow Work. <span className="title-span">Lasting</span> Rooms.
                  </h2>
                </div>
              </div>
              <p className="story-quote">{aboutData.story.quote}</p>
            </div>

            <div className="our-story-wrapper">
              <div className="story-banner">
                <Image
                  alt="Story Image"
                  className="story-banner-img"
                  src={aboutData.story.bannerImage}
                  width={1400}
                  height={933}
                />
                <div className="story-banner-overlay"></div>
                <div className="story-banner-caption">
                  <div className="story-banner-caption-before"></div>
                  <div className="story-caption-text">{aboutData.story.bannerCaption}</div>
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

              <div className="story-content-wrapper">
                <div className="story-content-block">
                  <p className="our-story-text" fade-in="0">
                    {aboutData.story.paragraphs[0]}
                  </p>
                  <p className="our-story-text" fade-in="0.4">
                    None of that can be hurried. Each commission begins with weeks of
                    listening before a single line is drawn.
                  </p>
                </div>
                <div className="story-content-block">
                  <p className="our-story-text" fade-in="0.2">
                    {aboutData.story.paragraphs[1]}
                  </p>
                  <p className="our-story-text" fade-in="0.6">
                    We keep the team small. Fifteen people is the right size — enough to
                    take on difficult work, small enough that nothing passes without being
                    seen by someone who cares.
                  </p>
                </div>

                <div
                  className="story-aside"
                  fade-in="0.8"
                  id="w-node-_4adcd6f5-c13c-9620-91d1-6ec689f4749d-0d537dfd"
                >
                  <div className="story-founder">
                    <div className="story-founder-line"></div>
                    <div className="story-founder-info-wrapper">
                      <div className="story-founder-avatar">
                        <Image
                          alt={aboutData.story.founder.name}
                          className="story-founder-avatar-img"
                          src={aboutData.story.founder.avatar}
                          width={861}
                          height={861}
                        />
                      </div>
                      <div className="story-founder-info">
                        <div className="story-founder-name">
                          {aboutData.story.founder.name}
                        </div>
                        <p className="story-founder-title">
                          {aboutData.story.founder.title}
                        </p>
                      </div>
                    </div>
                    <p className="story-founder-quote">
                      {aboutData.story.founder.quote}
                    </p>
                  </div>
                  <div className="story-ctas">
                    <Link
                      className="secondary-button w-inline-block"
                      data-wf--secondary-button--variant="hover-white-bg"
                      data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                      data-wf-variant-state="40520a71-aa9b-6a51-5ecc-905a04a2984a"
                      href="/projects"
                    >
                      <div className="button-text-block">
                        <div className="button-text">View Our Projects</div>
                        <div className="secondary-button-bg w-variant-40520a71-aa9b-6a51-5ecc-905a04a2984a"></div>
                        <div className="secondary-button-bg-inner"></div>
                      </div>
                    </Link>
                    <Link
                      className="primary-button w-inline-block"
                      data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                      data-wf-variant-state="base"
                      href="/contact"
                    >
                      <div className="button-text-block">
                        <div className="button-text">Begin a Conversation</div>
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
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="stats-grid">
              {aboutData.stats.map((stat, idx) => {
                const fades = ["0", "0.2", "0.4", "0.6"];
                const isSecondNode = idx === 1;
                return (
                  <div
                    key={idx}
                    className="stats-item"
                    fade-in={fades[idx]}
                    id={
                      isSecondNode
                        ? "w-node-d5f149e4-a224-9278-1633-d8cbf84158b9-0d537dfd"
                        : undefined
                    }
                  >
                    <div className="stats-item-after"></div>
                    <div className="stats-item-before"></div>
                    <p className="stats-bg-text">{stat.number.replace("%", "")}</p>
                    <div className="about-stats-label">{stat.label}</div>
                    <div className="stats-count-block">
                      <div className="about-stats-count">{stat.number}</div>
                      <div className="stats-num-after"></div>
                    </div>
                    <p className="stats-desc">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="about-stats-top-line">
          <div className="about-stats-line"></div>
        </div>
        <div className="about-stats-bottom-line">
          <div className="about-stats-line"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{aboutData.values.tag}</p>
                </div>
                <div className="section-title-block values">
                  <h2 className="section-title">{aboutData.values.title}</h2>
                </div>
              </div>
              <p className="section-excerpt values" fade-in="0.2">
                {aboutData.values.description}
              </p>
            </div>

            <div className="horizontal-scroll-wrapper">
              <div className="values-grid">
                {aboutData.values.items.map((val, idx) => {
                  const fades = ["0.2", "0.4", "0.6", "0.2", "0.4", "0.6"];
                  const getSvg = (icon: string) => {
                    switch (icon) {
                      case "restraint":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L11 21.73a2 2 0 0 0 2 0L20 17.73A2 2 0 0 0 21 16z" />
                          </svg>
                        );
                      case "craft":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                            <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                            <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                            <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                            <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                            <path d="M15.5 9H17v1.5c0 .83-.67 1.5-1.5 1.5S14 11.33 14 10.5v-1c0-.55.45-1 1-1z" />
                            <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                            <path d="M8.5 15H7v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .55-.45 1-1 1z" />
                          </svg>
                        );
                      case "patience":
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
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        );
                      case "precision":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        );
                      case "dialogue":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        );
                      case "longevity":
                        return (
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3.5 21h17M3.5 21V7.5L12 3l8.5 4.5V21M9 21V12h6v9" />
                          </svg>
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <div key={idx} className="val-card" fade-in={fades[idx]}>
                      <div className="val-card-line"></div>
                      <p className="val-card-num">{val.num}</p>
                      <div className="val-card-icon">
                        <div className="val-icon w-embed">{getSvg(val.icon)}</div>
                      </div>
                      <h3 className="val-card-title">{val.title}</h3>
                      <p className="val-card-desc">{val.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="horizontal-scroll-indicator only-mobile">
                Swipe to explore →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{aboutData.team.tag}</p>
                </div>
                <div className="section-title-block team">
                  <h2 className="section-title">{aboutData.team.title}</h2>
                </div>
              </div>
              <div className="button-wrapper" fade-in="0.2">
                <Link
                  className="secondary-button w-inline-block"
                  data-wf--secondary-button--variant="base"
                  data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                  data-wf-variant-state="base"
                  href="/contact"
                >
                  <div className="button-text-block">
                    <div className="button-text">Join The Studio</div>
                    <div className="secondary-button-bg"></div>
                    <div className="secondary-button-bg-inner"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="horizontal-scroll-wrapper">
              <div className="team-grid">
                {aboutData.team.members.map((member, idx) => {
                  const fades = ["0", "0.2", "0.4", "0.6", "0.8"];
                  return (
                    <div key={idx} className="team-card" fade-in={fades[idx]}>
                      <div className="team-card-image-block">
                        <Image
                          alt={member.name}
                          className="team-card-media-img"
                          src={member.image}
                          width={861}
                          height={861}
                        />
                        <div className="team-card-overlay">
                          <p className="team-card-trait">{member.trait}</p>
                        </div>
                      </div>
                      <div className="team-card-info">
                        <h3 className="team-card-name">{member.name}</h3>
                        <p className="team-card-role">{member.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="horizontal-scroll-indicator only-mobile">
                Swipe to explore →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timline-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">{aboutData.timeline.tag}</p>
                </div>
                <div className="section-title-block time-line">
                  <h2 className="section-title">{aboutData.timeline.title}</h2>
                </div>
              </div>
              <p className="section-excerpt time-line" fade-in="0.2">
                {aboutData.timeline.description}
              </p>
            </div>

            <div className="timeline-track">
              <div className="timeline-track-before"></div>
              {aboutData.timeline.items.map((item, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className={`tl-item ${isEven ? "even-item" : ""} ${
                      idx === aboutData.timeline.items.length - 1 ? "last-item" : ""
                    }`}
                    fade-in="0.4"
                  >
                    <div className="tl-item-before"></div>
                    {isEven ? (
                      <>
                        <div className="tl-left">
                          <h3 className="tl-title">{item.title}</h3>
                          <p className="tl-desc">{item.description}</p>
                        </div>
                        <div className="tl-right">
                          <div className="tl-year">{item.year}</div>
                          <div className="tl-studio">{item.location}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="tl-left">
                          <div className="tl-year">{item.year}</div>
                          <div className="tl-studio">{item.location}</div>
                        </div>
                        <div className="tl-right">
                          <h3 className="tl-title">{item.title}</h3>
                          <p className="tl-desc">{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
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
