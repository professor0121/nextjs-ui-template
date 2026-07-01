import Link from "next/link";

export const metadata = {
  title: "Licenses | Orenda - Webflow HTML website template",
  description: "Asset licenses used in the Orenda template.",
};

export default function Licenses() {
  return (
    <main className="main-wrapper">
      <section className="common-hero-section boder-bottom">
        <div className="w-layout-blockcontainer container-default w-container">
          <section className="common-hero-wrapper">
            <div className="common-hero-content-wrapper">
              <div className="common-hero-content-block">
                <div
                  className="subtitle-block"
                  data-wf--subtitle-block--variant="base"
                >
                  <div className="subtile-dot"></div>
                  <p className="subtitle-text">Template Info</p>
                </div>
                <h1 className="common-hero-title">Licenses</h1>
                <p className="common-hero-excerpt licenses">
                  All graphical assets in this template are licensed for personal and
                  commercial use. If you&apos;d like to use a specific asset, please check the
                  license below.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text">Insights</div>
      </section>

      <section className="license-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="license-info-grid">
              {/* Images */}
              <div className="license-info-card">
                <div className="license-heading-block">
                  <h2 className="license-title">Images</h2>
                </div>
                <div className="license-details-wrapper">
                  <p className="license-summary">
                    All images are sourced from Magnefik. Find the Magnefik license information
                    here.
                  </p>
                  <a
                    className="link-button w-inline-block"
                    href="https://www.magnific.com/ai/docs/licenses-attribution"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              </div>

              {/* Icons */}
              <div className="license-info-card">
                <div className="license-heading-block">
                  <h2 className="license-title">Icons</h2>
                </div>
                <div className="license-details-wrapper">
                  <p className="license-summary">
                    The Orenda template uses SVG image format for all Icon font icons. Find
                    license information here.
                  </p>
                  <a
                    className="link-button w-inline-block"
                    href="https://www.flaticon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              </div>

              {/* Fonts */}
              <div className="license-info-card">
                <div className="license-heading-block">
                  <h2 className="license-title">Fonts</h2>
                </div>
                <div className="license-details-wrapper">
                  <p className="license-summary">
                    The Orenda template uses Google fonts. Find Inter &amp; Lora license info here.
                  </p>
                  <div className="read-more-button-wrapper">
                    <a
                      className="link-button w-inline-block"
                      href="https://fonts.google.com/specimen/Inter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>Inter</div>
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
                    </a>
                    <a
                      className="link-button w-inline-block"
                      href="https://fonts.google.com/specimen/Lora"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>Lora</div>
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
