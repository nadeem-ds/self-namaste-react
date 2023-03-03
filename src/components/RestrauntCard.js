import { IMG_CDN } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      {/* <h3>{cousinName.join(", ")}</h3> */}
      <h3>{cuisines.join(", ")}</h3>

      <h4>{totalRatingsString} </h4>
    </div>
  );
};

export default RestrauntCard;
