import Link from './Link';

const ButtonRnd = ({ value, projectName }) => {
  return (
    <Link href={projectName} className="btnRnd">
      {value}
    </Link>
  );
};

export default ButtonRnd;
