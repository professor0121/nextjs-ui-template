export const metadata = {
  title: "Changelog | Orenda - Webflow HTML website template",
  description: "A detailed overview of the updates in this template.",
};

export default function Changelog() {
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
                <h1 className="common-hero-title">Changelog</h1>
                <p className="common-hero-excerpt changelog">
                  A detailed overview of the growth, updates, and changes in this Webflow
                  template evolution
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="common-hero-bg-text">Insights</div>
      </section>

      <section className="change-log-section">
        <div className="section-gap">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="change-log-container">
              <h2 className="changelog-heading">
                Version <span className="changelog-span">1.0</span>
              </h2>
              <div className="release-date-wrapper">
                <div className="initial-release">Initial Release</div>
                <div className="release-date">26th March, 2026</div>
              </div>
              <div className="changelog-text">The template has been released!</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
