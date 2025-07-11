import React from 'react';
// import meImage from '../assets/images/me.jpg';

const Home = () => (
  <article id="home" className="panel intro">
    <header>
      <h1>Jane Doe</h1>
      <p>Senior Astral Projectionist</p>
    </header>
    <a href="#work" className="jumplink pic">
      <span className="arrow icon solid fa-chevron-right">
        <span>See my work</span>
      </span>
     {/* <img src={meImage} alt=""/> */}
    </a>
  </article>
);

export default Home;