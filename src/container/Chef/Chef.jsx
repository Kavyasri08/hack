import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Nurturing Brilliance, Unleashing Potential.</p>
        </div>
        <p className="p__opensans"> At our Cognitive Retraining Program, we are driven by a deep commitment to fostering cognitive growth, unlocking potential, and nurturing the unique abilities of every child. We believe in the power of personalized learning, resilience, and the boundless potential that young minds hold. </p>
      </div>

      <div className="app__chef-sign">
        <p>K ^ 4</p>
        <p className="p__opensans">Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;