const Burger = ({ menuOpen, onClickMenuHandler }) => {
  return (
    <div className="burger" onClick={onClickMenuHandler}>
      <input
        className={`burger__cheeckbox ${menuOpen ? 'open' : ''}`}
        type="checkbox"
      />
      <div className="burger__cross">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Burger;
