const Competencies = () => {
  return (
    <div id="competencies" className="competencies ">
      <div className="container u-max-width-small">
        <p className="competencies__title paragraph u-center-text">
          Competencies:
        </p>
        <p className="paragraph">
          <span className="label">FRONTEND:</span>
          <br />
          HTML5, CSS3/SCSS, Responsive Web Design, Javascript, JSX, React,
          Redux, JSON, Webpack, D3.js, GSAP.
        </p>
        <p className="paragraph">
          <span className="label">BACKEND:</span> <br />
          NodeJS, Express, REST, MongoDB, Mongooge, Chai Testing.
        </p>
        <p className="paragraph">
          <span className="label"> SOFT SKILLS:</span> <br />
          Organization, Collaboration, Leadership, Design, Business, Marketing.
        </p>
        <p className="paragraph">
          <span className="label">OTHER:</span> <br />
          Illustrator, Photoshop, Adobe XD, InDesign, GitHub, Git, Trello.
        </p>
      </div>
    </div>
  );
};

export default Competencies;
