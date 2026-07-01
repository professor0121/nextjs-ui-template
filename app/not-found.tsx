import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main-wrapper">
      <section className="section-404">
        <div className="w-layout-blockcontainer container-default w-container">
          <div className="wrapper-404">
            <div className="content-block-404">
              <h1 className="text-404">
                4<span className="span-404">0</span>4
              </h1>
              <div className="inner-content-block-404">
                <h2 className="title-404">Oops... Page Not Found!</h2>
                <p className="excerpt-404">
                  Please return to the site&apos;s homepage, It looks like nothing was
                  found at this location.
                </p>
                <Link
                  className="primary-button w-inline-block"
                  data-wf-component-id="a5edda71-ecf7-6652-fd62-733b95485841"
                  data-wf-variant-state="base"
                  href="/"
                >
                  <div className="button-text-block">
                    <div className="button-text">Go Back to Home</div>
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
      </section>
    </main>
  );
}
