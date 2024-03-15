import React from "react";
import RestaurantCard from "./restaurant-card.component";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  return (
    <RestaurantCard
      name={name}
      photoUrl={photos[0]}
      address={address}
      rating={rating}
      isOpenNow={isOpenNow}
      isClosedTemporarily={isClosedTemporarily}
      icon={icon}
    />
  );
};

export default RestaurantInfo;
