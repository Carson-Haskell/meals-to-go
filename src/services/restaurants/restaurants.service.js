import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("Not found");
    }

    resolve(mock);
  });
};

const generateRandomPhotos = (photos) => {
  return photos.map(
    () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = generateRandomPhotos(restaurant.photos);

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
    };
  });

  return camelize(mappedResults);
};
