import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
const NewRestrauntMenu = () => {
  const [menuData, setMenuData] = useState(null);

  // var apifinalres = null;
  const params = useParams();
  const { id } = params;
  console.log(id);
  const API_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
    id;

  console.log(API_URL);

  // const menuData = useRestrauntMenu(id);

  // return !menuData ? (
  //   <Shimmer />
  // ) : (
  //   <div className="restraunt-menu-list">
  //     <div className="MainRestraunt">
  //       <h1>THis is res menu section</h1>
  //       <img src={IMG_CDN + menuData?.cloudinaryImageId} alt="resPic" />
  //       <h1>{menuData?.name}</h1>
  //       <h1>The restaurant id : {id}</h1>
  //       <h2>{menuData?.area}</h2>
  //       <h2>{menuData?.city}</h2>
  //       <h3>{menuData?.avgRating} star</h3>
  //       <h3>{menuData?.costForTwoMsg}</h3>
  //     </div>

  //     <div>
  //       <h1>Menu</h1>
  //       {Object.values(menuData?.menu?.items).map((data) => (
  //         <li key={data.id}>{data.name}</li>
  //       ))}
  //       {/* <div> {menuData?.menu?.items}</div> */}

  //       {/* {menuData.map((data) => {
  //         <li>{data}</li>;
  //       })} */}

  //       {/* <p>
  //         {menuListData.map((data) => (
  //           <li>{data}</li>
  //         ))}
  //       </p> */}
  //       <ul>
  //         {/* {Object.values(menuData.menu.items).map((item) => (
  //           <li key={item.id}>{item.name}</li>
  //         ))} */}

  //         {/* new api call */}
  //         {/* {Object.values(menuData.menu.item).map((item) => (
  //           <li key={item.id}>{item.name}</li>
  //         ))} */}

  //         {/* {Object.values(menuData?.menu?.items).map((data) => (
  //           <li>{data.name}</li>
  //         ))} */}
  //       </ul>
  //       <ul>
  //         {/* {Object.values(menuDish?.cards[1]?.card?.card?.itemCards).map(
  //           (item) => (
  //             <li key={item.card.info.id}>{item.info.name}</li>
  //           )
  //         )} */}
  //       </ul>
  //       <ul>
  //         {/* {Object.values(menuData?.menu?.items).map((data, key) => (
  //           <li key={data.id}>{data.name}</li>
  //         ))} */}
  //       </ul>
  //     </div>
  //   </div>
  // );

  useEffect(() => {
    async function getMenudata() {
      const menuDataFetch = await fetch(API_URL);
      const data = await menuDataFetch.json();
      console.log("Api data", data);

      setMenuData(
        data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );

      // console.log("DATA", apifinalres);

      console.log(
        "Full api data",
        data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );

      console.log(
        "one item",
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards[1].card.info.name
      );

      console.log(
        "type check",
        typeof data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards
      );

      //it is working now
      // {
      //   data.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
      //     (item) => console.log(item.card.info.name)
      //   );
      // }

      console.log("Menu data", menuData);

      // setMenuData(apifinalres);
      // console.log(
      //   "DATA",
      //   data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      //     .itemCards
      // );
    }
    getMenudata();
  }, []);
  return (
    <div>
      <h1>Hotel menu data</h1>

      {console.log("OBJECT CONVERT", Object.values(menuData))}

      {Object.values(menuData).map((item) => (
        <li
          className="bg-gray-300 m-3 p-2 rounded-lg list-none"
          key={item.card.info.id}
        >
          {item.card.info.name}
        </li>
      ))}

      {/* {Object.values(menuData?.card).map((item) => console.log(item))} */}

      {/* {Object.values(
        menuData.map(({ card }) => {
          <li>{card}</li>;
        })
      )} */}
      {/* {menuData.map((item) => {
        console.log(item.itemCards.card.info.name);
      })} */}
      {/* {menuData.map((item) => (
        <li>{item}</li>
      ))} */}
      {/* <h2>{menuData}</h2> */}
      {/* {console.log(typeof apifinalres)}
      {Object.values(apifinalres).map((item) => (
        <li>{item.card.info.name}</li>
      ))} */}
    </div>
  );
};

export default NewRestrauntMenu;
// ///////////////////////////////////////////////////////
//  setRes(json?.data);
//  {Object.values(res?.menu?.items).map((item) => {})}

// setMenuData(json?.data)
// {Object.values(menuData.menu.items).map((item) => (
//             <li key={item.id}>{item.name}</li>
// ))}
