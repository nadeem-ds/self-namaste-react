import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterRestraunt } from "../utils/helper";
import useOnline from "../utils/useOnline";

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

  //create a custom hook
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴🔴Offline please check your internet connection !!!</h1>;
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
      <div className="searchContainer p-5 bg-pink-50 my-5 flex justify-center">
        <input
          className="seach-input w-50 rounded-xl"
          type="text"
          value={searchText}
          placeholder="search your food"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn m-3 p-2 bg-purple-500 rounded-lg text-white"
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
      <div className="flex flex-wrap">
        {filteredRestraunt.map((restaurant) => {
          return (
            <Link
              to={"/restraunt/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
