import HeartIcon from '../../assets/heart.svg';

function Favourite({ onToggle }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onToggle}>
      <img src={HeartIcon} alt="Heart" />
      <span>Favourite Locations</span>
    </div>
  );
};
export default Favourite;