import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="restrauntlist">
      {restrauntData.map((restaurant) => {
        return <RestrauntCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    
    </div>
  );
};

export default Body;
