import desk from './../img/desk.svg';
import ButtonRnd from './ButtonRnd';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="projects__wave-fill"
          ></path>
        </svg>
      </div>
      <div className="projects__desk">
        <div className="projects__controls u-max-width-small">
          <h2 className="heading-secondary ">Selected Projects.</h2>
          <div className="projects__select">
            <p className="paragraph">Select:</p>
            <ButtonRnd value="1" />
            <ButtonRnd value="2" />
            <ButtonRnd value="3" />
            <ButtonRnd value="4" />
          </div>
        </div>
        <img src={desk} alt="" className="projects__img-desk" />
      </div>
    </div>
  );
};

export default Projects;
