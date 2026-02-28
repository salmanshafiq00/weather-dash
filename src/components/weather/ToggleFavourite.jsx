import HeartRedIcon from '../../assets/heart-red.svg';
import FavouriteIcon from '../../assets/heart.svg';
import { useFavouriteContext, useWeatherContext } from "../../hooks";

function ToggleFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } = useFavouriteContext();
  const { weatherData } = useWeatherContext();
  const { location, latitude, longitude } = weatherData || {};

  const isFavourite = favourites.some(fav => fav.location === location);
  const handleClick = () => {
    if (isFavourite) {
      removeFromFavourites(location);
    } else {
      addToFavourites(location, latitude, longitude);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleClick}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer">
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartRedIcon : FavouriteIcon} alt="favourite" />
        </button>
      </div>
    </div>
  );
};
export default ToggleFavourite;