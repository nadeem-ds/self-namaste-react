import React, { useEffect, useState } from "react";
import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  //   const searchText = "biryani";
  const [restaurants, setRestaurants] = useState(restrauntData);
  const [searchText, setSearchText] = useState("");

  // console.log("render() for sereach");

  console.log("restaurants");

  useEffect(() => {
    // This place is best API Call
    // console.log("render useeffect");
    getRestrauntList();
  }, []);

  async function getRestrauntList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2507549&lng=77.41568889999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterRestraunt(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    return filterData;
  }

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          value={searchText}
          placeholder="search your food"
          className="seach-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterRestraunt(searchText, restaurants);
            //after filter update the state

            setRestaurants(data);
          }}
        >
          Search
        </button>
        {/* {searchText} */}
      </div>
      <div className="restrauntlist">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
