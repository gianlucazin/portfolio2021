const Gallery = ({ title, images }) => {
  const renderedImages = images.map((image, index) => {
    return (
      <div key={index} className="gallery__item">
        <img
          src={image.default}
          alt={`Gallery item ${index}`}
          className="gallery__img"
        />
      </div>
    );
  });

  return (
    <div
      className={`gallery ${title === 'Screenshots' ? 'gallery--colored' : ''}`}
    >
      <div className="container u-max-width-big">
        <h2 className="heading-secondary">{title}.</h2>
        <div className="gallery__slideshow">{renderedImages}</div>
      </div>
    </div>
  );
};

export default Gallery;
