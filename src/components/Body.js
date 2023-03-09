import React, { useEffect, useState } from "react";
import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //   const searchText = "biryani";
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("render() for sereach");

  // console.log("restaurants");

  useEffect(() => {
    // This place is best API Call
    // console.log("render useeffect");
    getRestrauntList();
  }, []);
  // console.log(filteredRestraunt);

  async function getRestrauntList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2507549&lng=77.41568889999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterRestraunt(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }

  if (!allRestaurants) return null;

  // if (filteredRestraunt?.length == 0)
  //   return <h1>No restaurant found with your match</h1>;
  // if (json?.data?.cards[2]?.data?.data?.cards.length == 0) {
  //   <Shimmer />;
  // }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    // return (
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
            const data = filterRestraunt(searchText, allRestaurants);
            console.log("data return of filtered", data);
            //after filter update the state

            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restrauntlist">
        {filteredRestraunt.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
