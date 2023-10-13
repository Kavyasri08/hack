import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To  Unlocking Your Minds</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Inspiring the extraordinary in every child, our Cognitive Retraining Program nurtures young minds, fostering growth, resilience, and boundless potential. Join us on a journey of transformation and empowerment, where every child's unique abilities shine brightly. </p>
      <button type="button" className="custom__button">Explore Activities</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome3} alt="header_img" />
    </div>
  </div>
);

export default Header;