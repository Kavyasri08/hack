import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> We are dedicated to the art and science of cognitive retraining, where we envision a world where every child's potential knows no bounds. At our Cognitive Retraining Program, we embark on a journey of nurturing brilliance, fostering cognitive growth, and instilling resilience. We believe in the power of transformation, where each child's unique abilities become the key to unlocking a limitless future.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Our journey traces back to a commitment to reshape young minds through cognitive retraining. Over time, we've developed a rich history of crafting transformative activities that enhance attention, sharpen decision-making, nurture problem-solving skills, bolster memory, instill effective organization, and promote critical reasoning. Guided by this history, we continue to empower children on their path to cognitive excellence.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
