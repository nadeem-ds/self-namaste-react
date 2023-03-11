import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, setRes] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=107521"
    );
    const json = await data.json();
    setRes(json?.data);
    setIsLoaded(true);
  }
  if (!res) return null;

  return !isLoaded ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div>
          <img src={IMG_CDN + res?.cloudinaryImageId} />
        </div>
        <div>
          <p>{res?.name}</p>
          <p>{res?.cuisines.join(",")}</p>
          <p>{res?.locality}</p>
          <div>
            <p>{res?.avgRatingString}</p>
            <p>{res?.sla?.slaString}</p>
            <p>{res?.costForTwoMsg}</p>
          </div>
        </div>
        <div>
          <p>Offers : </p>
          <p>{res?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
          <p>{res?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
        </div>
      </div>
      {Object.values(res?.menu?.items).map((item) => {
        return (
          <div key={item.id}>
            {item?.cloudinaryImageId === "" ||
            !item?.cloudinaryImageId ? null : (
              <div>
                <div>
                  <p>{item?.name}</p>
                  <p>{item?.description}</p>
                </div>
                <div>
                  <img src={IMG_CDN + item?.cloudinaryImageId} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
