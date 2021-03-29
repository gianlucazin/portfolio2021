const Mission = ({ mission }) => {
  return (
    <section className="mission">
      <div ref={mission} className="container u-max-width-big">
        <h1 className="heading-primary">I am a Web Developer</h1>
        <h1 className="heading-primary u-color-light">
          looking to make the world a better place <br /> with the help of
          programming
          <span>.</span>
        </h1>
      </div>
    </section>
  );
};

export default Mission;
