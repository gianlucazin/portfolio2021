import ReactGA from 'react-ga';

const BottonLaunch = ({ url }) => {
  const onClickHandler = (e) => {
    ReactGA.event({
      category: 'Website launched',
      action: 'url: ' + e.target.href,
    });
  };
  return (
    <a
      onClick={onClickHandler}
      href={'https://' + url}
      target="_blank"
      rel="noreferrer"
      className="btnLaunch"
    >
      Launch
    </a>
  );
};

export default BottonLaunch;
