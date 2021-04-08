import Scroll from './Scroll';

const Mission = ({ missionRef }) => {
  return (
    <section className="mission">
      <div ref={missionRef} className="container u-max-width-big">
        <h1 className="heading-primary">I am a Web Developer</h1>
        <h1 className="heading-primary u-color-light">
          looking to make the world a better place <br /> with the help of
          programming
          <span>.</span>
        </h1>
      </div>
      <Scroll />
    </section>
  );
};

export default Mission;
