import { useContext } from "react";
import { FavouriteContext } from "../context";

function useFavouriteContext() {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error('useFavouriteContext must be used within a FavouriteProvider');
  }
  return context;
}
export default useFavouriteContext;