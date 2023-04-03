import React, { useState, useEffect } from "react";

import { GET_RESTAURANT_MENU } from "../config";
const useRestrauntMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  console.log("id", id);

  useEffect(() => {
    async function getRestrauntMenu() {
      const data = await fetch(
        " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241#"
      );
      const json = await data.json();
      console.log("Menu data ", json.data);
    }
    getRestrauntMenu();
  }, []);
  return menuData;
};

export default useRestrauntMenu;
