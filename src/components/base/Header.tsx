import React from 'react';

const Header = () => {
  const a = 1;
  return (
    <header className="header header--no-js">
      {/* toaster */}
      <div className="header__wrapper">
        <a
          className="header__logo header__logo--@@page"
          href="main.html"
          aria-label="Переход на главную"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="img/svg/logo-head-mobile.svg"
            />

            <img
              src="img/svg/logo-head-mobile.svg"
              alt="Logotype «CENTRAL FIRE SERVICES INC»"
              height="76"
              width="378"
            />

            <img
              src="img/svg/logo-head.svg"
              alt="Logotype «CENTRAL FIRE SERVICES INC»"
              height="76"
              width="378"
            />
          </picture>
        </a>
        <div className="header__menu-wrapper">
          <nav className="header__menu  header__menu--no-js">
            <button type="button" className="header__menu-btn">
              Open menu
            </button>
            <ul>
              <li>
                <a
                  href="main.html"
                  className="header__menu-link @@if (context.page === 'main') {header__menu-link--active}"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="service.html"
                  className="header__menu-link @@if (context.page === 'services') {header__menu-link--active}"
                >
                  Services
                </a>
                <ul className="header__side-menu">
                  <li>
                    <a href="service.html" className="header__menu-link">
                      Kitchen Fire Suppression System
                    </a>
                  </li>

                  <li>
                    <a href="service.html" className="header__menu-link">
                      Fire Extinguisher
                    </a>
                  </li>

                  <li>
                    <a href="service.html" className="header__menu-link">
                      Fire sprinkler system
                    </a>
                  </li>
                </ul>
                <button type="button" className="header__side-menu-btn">
                  Open side
                </button>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="header__menu-link @@if (context.page === 'gallery') {header__menu-link--active}"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="news.html"
                  className="header__menu-link @@if (context.page === 'news') {header__menu-link--active}"
                >
                  News
                </a>
              </li>

              <li>
                <a
                  href="#contacts"
                  className="header__menu-link @@if (context.page === 'contact') {header__menu-link--active}"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="tel:4088540320" className="header__contact">
          <span className="header__contact-phone" />
          <p className="header__contact-number">408-854-0320</p>
          <p className="header__contact-adress">24/7 emergency call out</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
