export const metadata = {
  title: "Style Guide | Orenda - Webflow HTML website template",
  description: "An in-depth guide to mastering color, typography, layout, and other essential design elements in the Orenda template.",
};

export default function StyleGuide() {
  const colors = [
    { name: "Yellow 400", hex: "#E6E646", className: "yellow-400" },
    { name: "Yellow 600", hex: "#E6E646", className: "yellow-600" },
    { name: "Background / Black 700", hex: "#222222", className: "black-700" },
    { name: "Background / Black 800", hex: "#161616", className: "black-800" },
    { name: "Background / Black 850", hex: "#1C1C1C", className: "black-850" },
    { name: "Background / Black 900", hex: "#0F0F0F", className: "black-900" },
    { name: "Background / Black 1000", hex: "#000000", className: "black-1000" },
    { name: "Border / Gray 800", hex: "#2A2A2A", className: "gray-800" },
    { name: "Border / Gray 850", hex: "#202020", className: "gray-850" },
    { name: "Text / White", hex: "#FFFFFF", className: "white" },
    { name: "Text / Gray 300", hex: "#BFBFBF", className: "gray-300" },
    { name: "Text / Gray 500", hex: "#8A8A8A", className: "gray-500" },
    { name: "Status / Green 400", hex: "#7BC98F", className: "green-400" },
    {
      name: "Status / Green 400 14A",
      hex: "rgba(76,175,80,0.14)",
      className: "green-400-14a",
    },
    {
      name: "Status / Green 400 25A",
      hex: "rgba(76,175,80,0.25)",
      className: "green-400-25a",
    },
    {
      name: "Alpha / Yellow 400 3A",
      hex: "rgba(251,251,76,0.025)",
      className: "yellow-400-3a",
    },
    {
      name: "Alpha / Yellow 400 10A",
      hex: "rgba(251,251,76,0.1)",
      className: "yellow-400-10a",
    },
    {
      name: "Alpha / Yellow 400 40A",
      hex: "rgba(251,251,76,0.4)",
      className: "yellow-400-40a",
    },
    {
      name: "Alpha / Black 900 35A",
      hex: "rgba(15,15,15,0.35)",
      className: "black-900-35a",
    },
    {
      name: "Alpha / Black 900 92A",
      hex: "rgba(15,15,15,0.92)",
      className: "black-900-92a",
    },
    {
      name: "Alpha / Black 950 60A",
      hex: "rgba(10,10,10,0.6)",
      className: "black-950-60a",
    },
    { name: "Alpha / White 6A", hex: "rgba(255,255,255,0.06)", className: "white-6a" },
  ];

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
                <h1 className="common-hero-title">Style Guide</h1>
                <p className="common-hero-excerpt style-guide">
                  An in-depth guide to mastering color, typography, layout, and other essential
                  design elements
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text">Insights</div>
      </section>

      <section className="style-guide-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="style-guide-grid">
              <div className="style-guide-sidebar">
                <div className="style-guide-link-wrapper">
                  <a className="style-guide-link" href="#colors">
                    Colors
                  </a>
                  <a className="style-guide-link" href="#typography">
                    Typography
                  </a>
                  <a className="style-guide-link" href="#buttons">
                    Buttons
                  </a>
                </div>
              </div>

              <div className="style-guide-content-wrapper">
                {/* Colors */}
                <div className="color-wrapper" id="colors">
                  <div className="style-guid-title-wrapper">
                    <h2 className="style-guide-heading">Colors</h2>
                  </div>
                  <div className="style-guide-details-wrapper">
                    <div className="style-guide-color-grid">
                      {colors.map((color, idx) => (
                        <div key={idx} className="color-card">
                          <div className={`color-block ${color.className}`}></div>
                          <div className="color-details-block">
                            <div className="color-heading">{color.name}</div>
                            <p className="color-code">{color.hex}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div className="typography-block" id="typography">
                  <div className="style-guid-title-wrapper">
                    <h2 className="style-guide-heading">Typography</h2>
                  </div>
                  <div className="style-guide-details-wrapper">
                    <div className="style-guide-details-block">
                      <h1>Heading 1</h1>
                      <p className="style-guide-short-info">
                        H1 - 132px /100% || Regular || Lora
                      </p>
                    </div>
                    <div className="style-guide-details-block">
                      <h2>Heading 2</h2>
                      <p className="style-guide-short-info">
                        H2 - 72px /105% || Regular || Lora
                      </p>
                    </div>
                    <div className="style-guide-details-block">
                      <h3>Heading 3</h3>
                      <p className="style-guide-short-info">
                        H3 - 32px /110% || Regular || Lora
                      </p>
                    </div>
                    <div className="style-guide-details-block">
                      <h4>Heading 4</h4>
                      <p className="style-guide-short-info">
                        H3 - 24px /130% || Regular || Lora
                      </p>
                    </div>
                    <div className="style-guide-details-block">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.
                      </p>
                      <p className="style-guide-short-info">
                        Paragraph - 16px /160% || Regular || Inter
                      </p>
                    </div>
                    <div className="style-guide-details-block">
                      <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla,
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="style-guide-button-wrapper" id="buttons">
                  <div className="style-guid-title-wrapper">
                    <h2 className="style-guide-heading">Buttons</h2>
                  </div>
                  <div className="style-guide-details-wrapper">
                    <div className="style-guide-button-block">
                      <a
                        className="primary-button w-inline-block"
                        data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                        data-wf-variant-state="base"
                        href="#"
                      >
                        <div className="button-text-block">
                          <div className="button-text">Button Text</div>
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
                        data-wf--secondary-button--variant="base"
                        data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                        data-wf-variant-state="base"
                        href="#"
                      >
                        <div className="button-text-block">
                          <div className="button-text">Button Text</div>
                          <div className="secondary-button-bg"></div>
                          <div className="secondary-button-bg-inner"></div>
                        </div>
                      </a>
                    </div>
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
