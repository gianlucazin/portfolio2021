const About = () => {
  return (
    <div id="about" className="about u-max-width-small">
      <h2 className="heading-secondary">About me.</h2>
      <div className="about__video">
        <div className="container">
          <iframe
            title="About me"
            src="https://www.youtube.com/embed/gA6ppby3JC8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="about__iframe"
          ></iframe>
        </div>
      </div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
    </div>
  );
};

export default About;
