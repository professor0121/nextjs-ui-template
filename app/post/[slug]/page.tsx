import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cmsPosts from "@/data/cms-posts.json";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cmsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = cmsPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Orenda - Webflow HTML website template`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetail({ params }: Props) {
  const { slug } = await params;
  const post = cmsPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = cmsPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="main-wrapper">
      {/* Blog Details Hero Section */}
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
                  <p className="subtitle-text">Blog Details</p>
                </div>
                <h1 className="common-hero-title blog-details" hero-title="true">
                  {post.title}
                </h1>
                <p className="common-hero-excerpt blog-details-summary" hero-fade-in="0.2">
                  {post.excerpt}
                </p>
              </div>

              <div className="hero-stats-wrapper" hero-fade-in="0.4">
                <div className="hero-stats-block">
                  <p className="hero-stats-label">Published</p>
                  <div className="hero-stats-count">{post.published}</div>
                </div>
                <div className="hero-stats-block">
                  <p className="hero-stats-label">Category</p>
                  <div className="hero-stats-count">{post.category}</div>
                </div>
                <div
                  className="hero-stats-block last"
                  id="w-node-_294ad465-6bc1-55ee-9257-f8cd1bdfe07a-dfdd8dce"
                >
                  <p className="hero-stats-label">Reading Time</p>
                  <div className="hero-stats-inner">
                    <div className="hero-stats-count">
                      {post.readingTime.split(" ")[0]}
                    </div>
                    <div className="hero-stats-count">Min</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text">Journal</div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="blog-details-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            {post.mainImage && (
              <div className="cms-image-wrapper">
                <Image
                  alt="Blog Main Image"
                  className="cms-image"
                  src={post.mainImage}
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

            <div className="blog-details-wrapper">
              <div
                className="blog-details-rich-text w-richtext"
                dangerouslySetInnerHTML={{ __html: post.blogDetailsHtml }}
              />

              <div className="blog-details-sidebar">
                {/* Author Card */}
                {post.author && post.author.name && (
                  <div
                    className="author-card"
                    fade-in="0.2"
                    id="w-node-d02b0510-4eed-f491-36e5-85dd59e8812a-dfdd8dce"
                  >
                    <Link
                      className="author-info w-inline-block"
                      href={`/author/${post.author.slug}`}
                    >
                      <div className="author-image-block">
                        <Image
                          alt="Blog author portrait"
                          className="author-thumbnail"
                          src={post.author.avatar}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <h2 className="author-name">{post.author.name}</h2>
                        <p className="author-designation">{post.author.designation}</p>
                      </div>
                    </Link>
                    <p className="author-bio">{post.author.bio}</p>
                  </div>
                )}

                {/* Topics Widget */}
                {post.topics && post.topics.length > 0 && (
                  <div className="sidebar-widget" fade-in="0.4">
                    <h3 className="sidebar-title">Article Topics</h3>
                    <div className="blog-details-topic-wrapper">
                      {post.topics.map((topic, idx) => (
                        <p key={idx} className="blog-details-topic">
                          {topic}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Widget */}
                <div className="sidebar-widget" fade-in="0.6">
                  <h4 className="sidebar-title">Share Essay</h4>
                  <div className="blog-details-social-share">
                    <a
                      aria-label="Instagram Link"
                      className="share-links-a"
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="blog-details-socila-icon w-embed">
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
                      </div>
                    </a>
                    <a
                      aria-label="LinkedIn Link"
                      className="share-links-a"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="blog-details-socila-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect height="12" width="4" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </div>
                    </a>
                    <a
                      aria-label="X Link"
                      className="share-links-a"
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="blog-details-socila-icon w-embed">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Archive / Related Posts */}
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
                  <p className="subtitle-text">Editorial Archive</p>
                </div>
                <div className="section-title-block blog">
                  <h2 className="section-title">More From Our Journal</h2>
                </div>
              </div>
              <div className="button-wrapper" fade-in="0.2">
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
                <div className="blog-collection-archive w-dyn-items" role="list">
                  {relatedPosts.map((rPost, idx) => (
                    <div
                      key={idx}
                      className="blog-collection-list-item w-dyn-item"
                      role="listitem"
                    >
                      <article className="blog-card">
                        <div className="post-thumbnail-wrapper">
                          <Link
                            className="post-thumbnail-link w-inline-block"
                            cms-hover-trigger="true"
                            href={`/post/${rPost.slug}`}
                          >
                            <Image
                              alt={rPost.title}
                              className="post-thumbnail"
                              src={rPost.mainImage}
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
                                href={`/blog-categories/${rPost.category.toLowerCase()}`}
                              >
                                {rPost.category}
                              </Link>
                              <div className="post-meta-text">{rPost.published}</div>
                            </div>
                            <div className="post-meta-inner">
                              <div className="post-meta-text higlight">
                                {rPost.readingTime.split(" ")[0]}
                              </div>
                              <div className="post-meta-text"> min read</div>
                            </div>
                          </div>
                          <div className="post-content-inner">
                            <Link
                              aria-label="Blog Title"
                              className="cms-title-link w-inline-block"
                              href={`/post/${rPost.slug}`}
                            >
                              <h3 className="post-title">{rPost.title}</h3>
                            </Link>
                            <p className="post-excerpt">{rPost.excerpt}</p>
                          </div>
                          <div className="blog-card-topic-inner">
                            <div className="blog-card-topic-wrapper">
                              {rPost.topics.slice(0, 3).map((topic, tIdx) => (
                                <p key={tIdx} className="blog-topic">
                                  {topic}
                                </p>
                              ))}
                            </div>
                            <Link
                              className="link-button w-inline-block"
                              href={`/post/${rPost.slug}`}
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
              <div className="horizontal-scroll-indicator">Swipe to explore →</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
