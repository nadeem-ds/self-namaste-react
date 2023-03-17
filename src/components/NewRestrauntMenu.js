import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
const NewRestrauntMenu = () => {
  // const [menuData, setMenuData] = useState(null);

  const params = useParams();
  const { id } = params;

  const menuData = useRestrauntMenu(id);

  //   https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${resId}

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



  //   if (!menuData) {
  //     return <Shimmer />;
  //   }

  return !menuData ? (
    <Shimmer />
  ) : (
    <div className="restraunt-menu-list">
      <div className="MainRestraunt">
        <img src={IMG_CDN + menuData?.cloudinaryImageId} alt="resPic" />
        <h1>{menuData?.name}</h1>
        <h1>The restaurant id : {id}</h1>
        <h2>{menuData?.area}</h2>
        <h2>{menuData?.city}</h2>
        <h3>{menuData?.avgRating} star</h3>
        <h3>{menuData?.costForTwoMsg}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        {Object.values(menuData?.menu?.items).map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
        {/* <div> {menuData?.menu?.items}</div> */}

        {/* {menuData.map((data) => {
          <li>{data}</li>;
        })} */}

        {/* <p>
          {menuListData.map((data) => (
            <li>{data}</li>
          ))}
        </p> */}
        <ul>
          {/* {Object.values(menuData.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))} */}

          {/* new api call */}
          {/* {Object.values(menuData.menu.item).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))} */}

          {/* {Object.values(menuData?.menu?.items).map((data) => (
            <li>{data.name}</li>
          ))} */}
        </ul>
        <ul>
          {/* {Object.values(menuDish?.cards[1]?.card?.card?.itemCards).map(
            (item) => (
              <li key={item.card.info.id}>{item.info.name}</li>
            )
          )} */}
        </ul>
        <ul>
          {/* {Object.values(menuData?.menu?.items).map((data, key) => (
            <li key={data.id}>{data.name}</li>
          ))} */}
        </ul>
      </div>
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
