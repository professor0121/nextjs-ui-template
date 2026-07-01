"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navData from "@/data/nav.json";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close menus on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="header">
      <div className="w-layout-blockcontainer container-default w-container">
        <div
          className="nav-container w-nav"
          data-animation="over-left"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
        >
          <div className="nav-wrapper">
            <Link
              className={`nav-brand w-nav-brand ${
                pathname === "/" ? "w--current" : ""
              }`}
              href="/"
            >
              <img
                alt={navData.logo.alt}
                className="brand-logo"
                loading="lazy"
                src={navData.logo.src}
              />
            </Link>

            <nav
              className={`nav-menu-wrapper w-nav-menu ${
                mobileMenuOpen ? "w--open" : ""
              }`}
              style={{
                transform: mobileMenuOpen ? "translateX(0px)" : undefined,
                transition: "transform 400ms ease",
              }}
              role="navigation"
            >
              <ul className="nav-menu w-list-unstyled" role="list">
                <li className="nav-mobile-brand">
                  <Link className="nav-brand w-nav-brand" href="/">
                    <img
                      alt={navData.logo.alt}
                      className="brand-logo"
                      loading="lazy"
                      src={navData.logo.src}
                    />
                  </Link>
                </li>

                {navData.menuItems.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <li key={index} className="nav-menu-list">
                        <div className="nav-menu-link-wrapper">
                          <Link
                            className={`nav-menu-link ${
                              isActive(item.href || "") ? "w--current" : ""
                            }`}
                            href={item.href || "/"}
                          >
                            {item.label}
                          </Link>
                        </div>
                      </li>
                    );
                  }

                  if (item.type === "dropdown") {
                    return (
                      <li key={index} className="nav-menu-list">
                        <div
                          className={`nav-dropdown w-dropdown ${
                            dropdownOpen ? "w--open" : ""
                          }`}
                          style={{ zIndex: 901 }}
                        >
                          <div
                            className={`nav-dropdown-toggle w-dropdown-toggle ${
                              dropdownOpen ? "w--open" : ""
                            }`}
                            aria-haspopup="menu"
                            aria-expanded={dropdownOpen}
                            role="button"
                            tabIndex={0}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                          >
                            <div>{item.label}</div>
                            <div className="nav-dropdown-icon w-embed">
                              <svg
                                fill="none"
                                height="6"
                                viewBox="0 0 10 6"
                                width="10"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  transform: dropdownOpen
                                    ? "rotate(180deg)"
                                    : "none",
                                  transition: "transform 200ms ease",
                                }}
                              >
                                <path
                                  d="M0.666687 0.666668L4.66669 4.66667L8.66669 0.666668"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.33333"
                                />
                              </svg>
                            </div>
                          </div>
                          <nav
                            className={`nav-dropdown-list mega-menu w-dropdown-list ${
                              dropdownOpen ? "w--open" : ""
                            }`}
                            style={{
                              display: dropdownOpen ? "block" : "none",
                              opacity: dropdownOpen ? 1 : 0,
                              transform: dropdownOpen
                                ? "translateY(0)"
                                : "translateY(10px)",
                              transition:
                                "opacity 200ms ease, transform 200ms ease",
                            }}
                          >
                            <div className="nav-dropdown-flex">
                              {item.groups?.map((group, groupIdx) => (
                                <div key={groupIdx} className="nav-dropdown-column">
                                  <div
                                    className={`nav-title ${
                                      groupIdx > 0 &&
                                      group.title === "CMS pages"
                                        ? "margin-top"
                                        : ""
                                    }`}
                                  >
                                    {group.title}
                                  </div>
                                  {group.items.map((sublink, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      className={`nav-dropdown-link-block w-inline-block ${
                                        pathname === sublink.href
                                          ? "w--current"
                                          : ""
                                      }`}
                                      href={sublink.href}
                                    >
                                      <div className="dropdown-link-text">
                                        {sublink.label}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </nav>
                        </div>
                      </li>
                    );
                  }

                  return null;
                })}

                <li className="nav-menu-list nav-list-button">
                  <div className="nav-button-wrapper">
                    <Link
                      className="secondary-button w-inline-block"
                      data-wf--secondary-button--variant="base"
                      data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                      data-wf-variant-state="base"
                      href={navData.cta.href}
                    >
                      <div className="button-text-block">
                        <div className="button-text">{navData.cta.label}</div>
                        <div className="secondary-button-bg"></div>
                        <div className="secondary-button-bg-inner"></div>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="nav-button-block">
              <Link
                className="secondary-button w-inline-block"
                data-wf--secondary-button--variant="base"
                data-wf-component-id="090db619-47fc-8a07-7e51-33fe9a2e96e9"
                data-wf-variant-state="base"
                href={navData.cta.href}
              >
                <div className="button-text-block">
                  <div className="button-text">{navData.cta.label}</div>
                  <div className="secondary-button-bg"></div>
                  <div className="secondary-button-bg-inner"></div>
                </div>
              </Link>
            </div>

            <div
              className={`menu-button w-nav-button ${
                mobileMenuOpen ? "w--open" : ""
              }`}
              aria-label="menu"
              role="button"
              tabIndex={0}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className="w-nav-overlay"
          style={{ display: "block", height: "100%", opacity: 1 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
