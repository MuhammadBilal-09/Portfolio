import React from 'react';
//import images from '../assets/images';

const Work = () => (
  <article id="work" className="panel">
    <header>
      <h2>Work</h2>
    </header>
    <p>
      Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      luctus elit eget interdum.
    </p>
    <section>
      <div className="row">
        { /* {images.map((img, index) => (
          <div className="col-4 col-6-medium col-12-small" key={index}>
            <a href="#" className="image fit">
              <img src={img.src} alt={img.alt} />
            </a>
          </div>
        ))} */ }
      </div>
    </section>
  </article>
);

export default Work;
