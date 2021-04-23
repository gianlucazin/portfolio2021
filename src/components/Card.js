import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Card = (props) => {
  const cardRef = useRef();
  const previewRef = useRef();
  const detailsRef = useRef();
  const moreRef = useRef();
  const cardTween = useRef();
  const projectData = props.projectData;

  useEffect(() => {
    cardTween.current = gsap
      .timeline({ paused: true })
      .to(detailsRef.current, { y: 50 })
      .to(previewRef.current, { scale: 2 }, 0)
      .set(moreRef.current, { visibility: 'visible' }, 0)
      .to(moreRef.current, { opacity: 1 }, 0);
  }, []);

  const onMouseEnterHandler = () => cardTween.current.play();
  const onMouseLeaveHandler = () => cardTween.current.reverse();

  return projectData.general.live ? (
    <Link
      to={{
        pathname: projectData.general.id,
      }}
    >
      <div
        ref={cardRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className="card"
      >
        <div ref={previewRef} className="card__preview">
          <img
            src={projectData.cover}
            alt={projectData.general.title}
            className="card__img"
          />
        </div>
        <div ref={detailsRef} className="card__details">
          <p className="label">{projectData.general.title}</p>
          <p className="label">{projectData.general.year}</p>
        </div>
        <div ref={moreRef} className="card__more">
          <button href={projectData.general.id} className="card__btn">
            Learn more
          </button>
        </div>
      </div>
    </Link>
  ) : (
    <div>
      <div
        ref={cardRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className="card no-live"
      >
        <div ref={previewRef} className="card__preview">
          <img
            src={projectData.cover}
            alt={projectData.general.title}
            className="card__img"
          />
        </div>
        <div ref={detailsRef} className="card__details">
          <p className="label">{projectData.general.title}</p>
          <p className="label">{projectData.general.year}</p>
        </div>
        <div ref={moreRef} className="card__more">
          <button href={projectData.general.id} className="card__btn">
            Ongoing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
