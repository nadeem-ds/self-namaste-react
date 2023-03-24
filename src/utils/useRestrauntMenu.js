import React, { useState, useEffect } from "react";
// import { GET_RESTAURANT_MENU } from "../config";

import { GET_RESTAURANT_MENU } from "../config";
const useRestrauntMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  console.log("id", id);
  //first fetch the data from server
  const URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2507549&lng=77.41568889999999&restaurantId=" +
    id;

  const URL1 =
    "https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=" +
    id;

  const url = `https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${id}`;
  const newurl =
    "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
    { id };
  console.log("res menu data api url", url);

  //   const URL =
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2507549&lng=77.41568889999999&restaurantId=107521";
  // console.log(GET_RESTAURANT_MENU + id);

  // console.log(GET_RESTAURANT_MENU);
  const burl = GET_RESTAURANT_MENU + id;
  console.log("burl", burl);
  useEffect(() => {
    getRestrauntMenu();
  }, []);

  async function getRestrauntMenu() {
    const data = await fetch(burl);
    const json = await data.json();

    console.log("Menu data ", json.data);
    setMenuData(json?.data);
  }
  //return the data
  return menuData;
};

export default useRestrauntMenu;
