import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cmsServices from "@/data/cms-services.json";
import BookingForm from "@/components/BookingForm";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cmsServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = cmsServices.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Orenda - Webflow HTML website template`,
    description: service.excerpt,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = cmsServices.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <main className="main-wrapper">
      {/* Service Detail Hero */}
      <section className="common-hero-section boder-bottom">
        <div className="w-layout-blockcontainer container-default w-container">
          <section className="common-hero-wrapper">
            <div className="common-hero-content-wrapper with-stats">
              <div className="common-hero-content-block service">
                <div
                  className="subtitle-block"
                  data-wf--subtitle-block--variant="base"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">Service Details</p>
                </div>
                <h1 className="common-hero-title">{service.title}</h1>
                <p className="common-hero-excerpt">{service.excerpt}</p>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.4">
                {service.stats.map((stat, idx) => {
                  const isLast = idx === service.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_294ad465-6bc1-55ee-9257-f8cd1bdfe07a-dfdd8dce"
                          : undefined
                      }
                    >
                      <p className="hero-stats-label" style={{ whiteSpace: "pre-line" }}>
                        {stat.label}
                      </p>
                      {stat.count && (
                        <div className="hero-stats-count">{stat.count}</div>
                      )}
                      {stat.text && <p className="hero-stats-text">{stat.text}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text">Services</div>
      </section>

      {/* Overview Block */}
      <section className="services-details-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper border-bottom">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">Overview</p>
                </div>
                <div className="section-title-block services-details">
                  <h2 className="section-title">{service.overviewTitle}</h2>
                </div>
              </div>
              <p className="section-excerpt service-overview" fade-in="0.2">
                {service.overviewExcerpt}
              </p>
            </div>

            {service.overviewImage && (
              <div className="cms-image-wrapper">
                <Image
                  alt="Service Overview Image"
                  className="cms-image"
                  src={service.overviewImage}
                  width={2400}
                  height={1600}
                  priority
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
            )}

            <div className="services-details-wrapper">
              <div className="services-details-left">
                <h2 className="service-inner-title">{service.standardTitle}</h2>
                <div
                  className="service-details w-richtext"
                  dangerouslySetInnerHTML={{ __html: service.richTextHtml }}
                />
              </div>

              {/* Service Features list */}
              <div className="services-details-right">
                <h3 className="service-details-right-title">Deliverables</h3>
                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-features-item">
                      <div className="service-features-icon-block">
                        <div className="service-features-icon w-embed">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="service-features-title">{feature.title}</h4>
                        <p className="service-features-text">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="services-details-process-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="section-title-wrapper border-bottom white-border">
              <div className="section-title-inner">
                <div
                  className="subtitle-block w-variant-bc0b6b29-b2ff-4e7b-6bfc-075985170731"
                  data-wf--subtitle-block--variant="spacing-bottom"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">The Process</p>
                </div>
                <div className="section-title-block services-process">
                  <h2 className="section-title white-title">
                    Our <span className="title-span">Approach</span> to {service.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="service-process-grid">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="service-process-card">
                  <div className="service-process-card-top">
                    <p className="detail-step">{step.stepNum}</p>
                    <p className="service-proces-index">{step.phase}</p>
                  </div>
                  <div className="service-process-card-content">
                    <h3 className="service-process-title">{step.title}</h3>
                    <p className="service-proces-excerpt">{step.excerpt}</p>
                    <p className="service-process-label">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Work & Second Rich Text */}
      <section className="related-work-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="related-work-wrapper">
              <div className="related-work-aside">
                <div className="reletaed-work-card">
                  <p className="related-work-label">{service.relatedWork.label}</p>
                  <Link
                    aria-label="Project Title"
                    className="cms-title-link w-inline-block"
                    href={service.relatedWork.href || "#"}
                  >
                    <h3 className="project-title">{service.relatedWork.title}</h3>
                  </Link>
                  <p className="related-work-text">{service.relatedWork.text}</p>
                  <Link
                    className="link-button w-inline-block"
                    href={service.relatedWork.href || "#"}
                  >
                    <div>View Case Study</div>
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
                  {service.relatedWork.image && (
                    <div className="related-work-card-image">
                      <Image
                        alt={service.relatedWork.title}
                        className="featured-project-image"
                        src={service.relatedWork.image}
                        width={939}
                        height={626}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="related-work-right">
                <div
                  className="service-details-two w-richtext"
                  dangerouslySetInnerHTML={{ __html: service.richTextTwoHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <BookingForm />
    </main>
  );
}
