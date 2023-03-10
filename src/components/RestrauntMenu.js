import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
const RestrauntMenu = () => {
  const [menuData, setMenuData] = useState({});
  const params = useParams();
  const { id } = params;

  //   const {} = menuData.data.cards;
  //   console.log(
  //     "data received",
  //     menuData?.data?.cards[0]?.card?.card?.info?.name
  //   );

  //   console.log(params);
  //   console.log("res id", menuData?.data?.cards[0]?.card?.card?.info?.id);
  //   console.log(
  //     "first dish name",
  //     menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //       .itemCards[0].card.info.name
  //   );
  //   data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name

  const URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2507549&lng=77.41568889999999&restaurantId=107521";

  //   const URL =
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2507549&lng=77.41568889999999&restaurantId=107521";

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  async function getRestrauntMenu() {
    const data = await fetch(URL);
    const json = await data.json();
    console.log("Menu data ", json.data.cards[0].card.card.info);
    setMenuData(json.data.cards[0].card.card.info);
  }
  return (
    <div>
      <h1>The restaurant id : {id}</h1>
      <h2>{}</h2>
      <img src={IMG_CDN + menuData.cloudinaryImageId} />
      <h1>{menuData.name}</h1>

      <h1>THis is nested route restaurant page </h1>
    </div>
  );
};

export default RestrauntMenu;
