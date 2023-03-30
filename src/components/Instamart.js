import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Section = ({ title, desc, show, setVisible }) => {
  // const [show, setShow] = useState(false);

  let data = [
    "mange",
    "orange",
    "banana",
    "grapes",
    "kivi",
    "watermelon",
    "lichi",
    "narangi",
    "anar",
  ];

  return (
    <div className="border border-black p-3 m-4 rounded-md">
      <h3 className="font-bold text-xl m-2">{title}</h3>
      <button
        onClick={() => setVisible()}
        // onClick={onClick}
        className="border border-black p-2 rounded-md "
      >
        {/* Show desc */}
        {show ? "hide" : "show"}
        {" desc"}
      </button>
      {show && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  // const [sectionConfig, setSectionConfig] = useState({
  //   showProduct: false,
  //   showTeam: false,
  // });

  const [visibleSection, setVisibleSection] = useState("product");
  return (
    <div>
      <h2 className="font-bold text-3xl p-3 m-4">About Instamart</h2>
      {/* <Section
        title={"Product"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        // show={sectionConfig.showProduct}
        show={visibleSection === "product"}
        setVisible={() => {
          setVisibleSection("product");
        }}
      />
      <Section
        title={"Team  "}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        // show={sectionConfig.showTeam}
        show={visibleSection === "team"}
        setVisible={() => {
          setVisibleSection("team");
        }}
      /> */}
      <h2>Here i will show list of item</h2>
      {/* <ul>{listItem}</ul> */}

      {[
        "mange",
        "orange",
        "banana",
        "grapes",
        "kivi",
        "watermelon",
        "lichi",
        "narangi",
        "anar",
      ].map((item, index) => (
        <ul className="m-3 p-2 bg-pink-500 rounded-lg">
          <li className="font-bold text-2xl text-white" key={index}>
            {item}
          </li>

          <button
            onClick={() => handleAddItem(item)}
            className=" m-3 p-3 bg-purple-500 hover:bg-gray-700 rounded-lg
          text-white"
          >
            Add
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Instamart;
