const Burger = ({ onClickMenuHandler }) => {
  return (
    <div className="burger" onClick={onClickMenuHandler}>
      <input className="burger__cheeckbox" type="checkbox" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Burger;
