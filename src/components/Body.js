import { restrauntData } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="restrauntlist">
      {restrauntData.map((restaurant) => {
        return <RestrauntCard key={restaurant.data.id} {...restaurant.data} />;
      })}
      {/* three dot is spread data */}

      {/* <RestrauntCard {...restrauntData[1].data} />
        <RestrauntCard {...restrauntData[2].data} /> */}

      {/* <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard /> */}
    </div>
  );
};

export default Body;
