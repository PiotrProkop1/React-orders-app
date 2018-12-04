import React from 'react';

import bg from '../../imgs/bg.jpg';

import './Landing.scss';

const Landing = () => (
  <div className="Landing">
    <img src={bg} alt="Background image" className="bg-img" />
    <div className="bg-div"></div>
    <Link to="/order">Order something!</Link>
  </div>
);

export default Landing;
