import img from './../img/1/srtendaggi1.png';
import img2 from './../img/1/hivenue1.png';

const Gallery = ({ title, images }) => {
  return (
    <div
      className={`gallery ${title === 'Screenshots' ? 'gallery--colored' : ''}`}
    >
      <div className="container u-max-width-big">
        <h2 className="heading-secondary">{title}.</h2>
        <div className="gallery__slideshow">
          <div className="gallery__item">
            <img src={img} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img2} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img2} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img2} alt="" className="gallery__img" />
          </div>
          <div className="gallery__item">
            <img src={img} alt="" className="gallery__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
