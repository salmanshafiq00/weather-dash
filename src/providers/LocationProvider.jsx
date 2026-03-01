import { useState } from "react";
import { LocationContext } from "../context";

function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  return (
    <LocationContext value={{ location, setLocation }}>
      {children}
    </LocationContext>
  );
};
export default LocationProvider;