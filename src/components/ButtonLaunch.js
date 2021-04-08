const BottonLaunch = ({ url }) => {
  return (
    <a
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
