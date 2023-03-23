import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterRestraunt } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import Usercontext from "../utils/UserContext";

const Body = () => {
  const { user, setUser } = useContext(Usercontext);
  console.log("user context", user);
  // console.log("setuser context", setUser);

  // console.log("body", user);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // This place is best API Call
    getRestrauntList();
  }, []);

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

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    // return (
    <>
      <div className="searchContainer p-5 bg-pink-50 my-5 flex justify-center">
        <input
          className="focus:bg-gray-300 p-2 m-2"
          type="text"
          value={searchText}
          placeholder="search your food"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn m-3 p-2 bg-purple-500 hover:bg-gray-700 rounded-lg text-white"
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

        {/* updating the context */}
        <input
          type={"text"}
          value={user.name}
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type={"text"}
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button className="search-btn m-3 p-2 bg-purple-500 hover:bg-gray-700 rounded-lg text-white ">
          Update{" "}
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunt.map((restaurant) => {
          return (
            <Link
              to={"/restraunt/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
