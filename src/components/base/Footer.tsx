import React from 'react';

const FooterComponent = () => (
  <footer className="footer">
    <div className="footer__contact">
      <div className="footer__contact-wrapper">
        <div className="footer__contact-lists">
          <ul>
            <li>Contacts</li>
            <li>
              <a href="tel:4088540320">408-854-0320</a>
            </li>
            <li>
              <a href="mailto:centralfireinc@gmail.com">
                centralfireinc@gmail.com
              </a>
            </li>
          </ul>

          <ul>
            <li>Address</li>
            <li>
              <span>
                2512 Seaboard Ave, San Jose, CA 95131 San Jose, CA 95134
              </span>
            </li>
          </ul>

          <ul>
            <li>Licence Number</li>
            <li>
              <span>1042911 CSLB</span>
            </li>
          </ul>
        </div>

        <div className="footer__yelp">
          <picture>
            <img
              src="img/content/yelp.png"
              srcSet="img/content/yelp-2x.png 2x"
              alt="yelp"
              width="118"
              height="57"
            />
          </picture>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="footer__bottom-wrapper">
        <a className="footer__logo" href="main.html">
          <picture>
            <img
              src="img/svg/logo-footer-d.svg"
              width="301"
              height="60"
              alt="Logotype «CENTRAL FIRE SERVICES INC»"
            />
          </picture>
        </a>

        <p className="footer__copyright">© 2022 Central fire services inc</p>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
