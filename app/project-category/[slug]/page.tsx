import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cmsProjectCategories from "@/data/cms-project-categories.json";
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

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cmsProjectCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = cmsProjectCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} | Orenda - Webflow HTML website template`,
    description: `Browse all ${category.title} design projects.`,
  };
}

export default async function ProjectCategoryDetail({ params }: Props) {
  const { slug } = await params;
  const category = cmsProjectCategories.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }

  // Filter projects belonging to this category
  const filteredProjects = cmsProjects.filter((project) => {
    const cat = projectCategoryMap[project.slug];
    return cat && cat.slug === slug;
  });

  return (
    <main className="main-wrapper">
      {/* Category Hero Section */}
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
                  <p className="subtitle-text">Project Category</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  {category.title}
                </h1>
                <p className="common-hero-excerpt projects" hero-fade-in="0.2">
                  Slow-designed commissions, tailored to the unique light, circulation, and history of the space.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text" hero-title="true">
          Category
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

      {/* Category Projects Grid */}
      <section className="project-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            {filteredProjects.length > 0 ? (
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
                            href={`/project-category/${slug}`}
                          >
                            {category.title}
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
            ) : (
              <div className="w-dyn-empty">
                <div>No projects found in this category.</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
