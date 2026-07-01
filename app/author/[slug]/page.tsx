import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cmsAuthors from "@/data/cms-authors.json";
import cmsPosts from "@/data/cms-posts.json";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cmsAuthors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const author = cmsAuthors.find((a) => a.slug === slug);
  if (!author) return {};

  return {
    title: `${author.name} | Orenda - Webflow HTML website template`,
    description: author.bio,
  };
}

export default async function AuthorDetail({ params }: Props) {
  const { slug } = await params;
  const author = cmsAuthors.find((a) => a.slug === slug);
  if (!author) {
    notFound();
  }

  // Filter posts written by this author
  const authorPosts = cmsPosts.filter(
    (post) => post.author && post.author.slug === slug
  );

  return (
    <main className="main-wrapper">
      {/* Author Hero Section */}
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
                  <p className="subtitle-text">Blog Author</p>
                </div>
                <h1 className="common-hero-title" hero-title="true">
                  {author.name}
                </h1>
                <p className="common-hero-excerpt projects" hero-fade-in="0.2">
                  {author.bio}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text" hero-title="true">
          Author
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

      {/* Author posts grid */}
      <section className="blog-archive-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            {authorPosts.length > 0 ? (
              <div className="blog-list-wrapper w-dyn-list">
                <div className="blog-archive w-dyn-items" role="list">
                  {authorPosts.map((post, idx) => (
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
            ) : (
              <div className="w-dyn-empty">
                <div>No essays found for this author.</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
