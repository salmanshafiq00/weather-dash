import { FavouriteContext } from '../context';
import { useLocalStorage } from '../hooks';

function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage('favourites', []);

  const addToFavourites = (location, latitude, longitude) => {
    if (!favourites.some(fav => fav.location === location)) {
      setFavourites([...favourites, { location, latitude, longitude }]);
    }
  };

  const removeFromFavourites = (location) => {
    setFavourites(favourites.filter((fav) => fav.location !== location));
  };

  return (
    <FavouriteContext value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext>
  );
};
export default FavouriteProvider;