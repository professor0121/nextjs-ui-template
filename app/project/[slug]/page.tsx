import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cmsProjects from "@/data/cms-projects.json";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cmsProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = cmsProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Orenda - Webflow HTML website template`,
    description: project.excerpt,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = cmsProjects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="main-wrapper">
      {/* Project Hero Section */}
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
                  <p className="subtitle-text">{project.subtitle}</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  {project.title}
                </h1>
                <p className="common-hero-excerpt contact" hero-fade-in="0.2">
                  {project.excerpt}
                </p>
                <div className="common-hero-button-wrapper" hero-fade-in="0.4">
                  <a className="primary-button w-inline-block" href="#gallery">
                    <div className="button-text-block">
                      <div className="button-text">View Gallery</div>
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
                </div>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.6">
                {project.stats.map((stat, idx) => {
                  const isLast = idx === project.stats.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`hero-stats-block ${isLast ? "last" : ""}`}
                      id={
                        isLast
                          ? "w-node-_2f735246-7589-804b-985e-179346af7f41-d2559598"
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
          Project
        </div>
      </section>

      {/* Overview Block */}
      <section className="project-details-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            {project.mainImage && (
              <div className="cms-image-wrapper">
                <Image
                  alt="Project Main Image"
                  className="cms-image"
                  src={project.mainImage}
                  width={939}
                  height={626}
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

            <div className="project-concept-section">
              <div className="project-concept-title-block">
                <div className="section-title-block">
                  <h2
                    className="section-title"
                    dangerouslySetInnerHTML={{ __html: project.conceptTitle }}
                  />
                </div>
              </div>
              <div
                className="project-details w-richtext"
                fade-in="0"
                dangerouslySetInnerHTML={{ __html: project.projectDetailsHtml }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="project-gallery-section" id="gallery">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="project-gallery-wrapper w-dyn-list">
              <div className="project-gallery w-dyn-items" role="list">
                {project.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="project-gallery-item w-dyn-item w-dyn-repeater-item"
                    role="listitem"
                  >
                    <a className="project-gallery-lightbox w-inline-block w-lightbox" href="#">
                      <Image
                        alt={`${project.title} gallery image ${idx + 1}`}
                        className="project-gallery-image"
                        src={img}
                        width={939}
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
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Material Ledger Section */}
      <section className="materials-info-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="materials-info-wrapper">
              <div className="project-quote-block">
                <h3 className="project-client-testimonial" inner-title="true">
                  {project.clientQuote}
                </h3>
                <div className="client-name" fade-in="0.2">
                  {project.clientAuthor}
                </div>
              </div>

              <div className="specs-card" fade-in="0.4">
                <h3 className="specs-title">Material Ledger</h3>
                <div className="material-list-wrapper">
                  {project.materials.map((mat, idx) => {
                    const isLast = idx === project.materials.length - 1;
                    return (
                      <div key={idx} style={{ display: "contents" }}>
                        <div className="material-item">
                          <p className="materials-label">{mat.label}</p>
                          <p className="materials-value">{mat.value}</p>
                        </div>
                        {!isLast && <div className="materials-separator"></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Next Project card link */}
            {project.nextProject && project.nextProject.title && (
              <div className="next-project-wrapper w-dyn-list">
                <div className="next-project-inner w-dyn-items" role="list">
                  <div className="next-project-item w-dyn-item" role="listitem">
                    <div className="next-project-card" fade-in="0.2">
                      <Image
                        alt="Next Project Thumbnail"
                        className="next-project-thumbnail"
                        src={project.nextProject.image}
                        width={939}
                        height={626}
                      />
                      <div className="next-project-card-title-block">
                        <div className="project-item-meta">{project.nextProject.meta}</div>
                        <Link
                          aria-label="Project Title"
                          className="cms-title-link w-inline-block"
                          href={project.nextProject.href}
                        >
                          <h3 className="next-project-card-title">
                            {project.nextProject.title}
                          </h3>
                        </Link>
                      </div>
                      <Link
                        aria-label="Project Link"
                        className="next-project-item-arrow w-inline-block"
                        href={project.nextProject.href}
                      >
                        <div className="link-arrow w-embed">
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
                      <div className="next-project-bg"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
