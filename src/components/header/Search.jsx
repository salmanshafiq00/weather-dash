import { useEffect, useState } from "react";
import SearchIcon from '../../assets/search.svg';
import { getLocationByName } from '../../data/location';
import { useLocationContext } from "../../hooks";
import useDebounce from '../../hooks/useDebounce';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { setLocation } = useLocationContext();

  useEffect(() => {
    if (!debouncedSearchTerm) return;
    const location = getLocationByName(debouncedSearchTerm);
    setLocation(location);
  }, [debouncedSearchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    const location = getLocationByName(searchTerm);
    setLocation(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search" placeholder="Search Location" required />
        <button type="submit">
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </form>
  );
};
export default Search;