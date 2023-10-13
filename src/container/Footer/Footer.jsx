import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">K^4 Groups</p>
        <p className="p__opensans">8667676122</p>
        <p className="p__opensans">044-0664-777</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht1} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the PROCESS.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">24 Hours</p>
        
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 NeuroSpark. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;