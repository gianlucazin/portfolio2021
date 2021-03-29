import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from './Link';

const Card = React.forwardRef((props, ref) => {
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

  const onMouseEnterLinkHandler = () => cardTween.current.play();
  const onMouseLeaveLinkHandler = () => cardTween.current.reverse();

  return (
    <Link
      refLink={cardRef}
      onMouseEnterLinkHandler={onMouseEnterLinkHandler}
      onMouseLeaveLinkHandler={onMouseLeaveLinkHandler}
      className="card"
      href={projectData.general.url}
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
        <button href={projectData.general.url} className="card__btn">
          Learn more
        </button>
      </div>
    </Link>
  );
});

export default Card;
