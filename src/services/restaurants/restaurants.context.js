import { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await restaurantRequest();
        const transformedRes = restaurantsTransform(res);
        setRestaurants(transformedRes);
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
