import { useState, useEffect } from "react";

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

  //   const URL =
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2507549&lng=77.41568889999999&restaurantId=107521";

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  async function getRestrauntMenu() {
    const data = await fetch(URL1);
    const json = await data.json();

    console.log("Menu data ", json.data);
    setMenuData(json?.data);
  }
  //return the data
  return menuData;
};

export default useRestrauntMenu;
