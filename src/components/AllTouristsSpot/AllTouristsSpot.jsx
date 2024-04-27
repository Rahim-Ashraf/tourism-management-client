import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";


const AllTouristsSpot = () => {
    const allTouristsSpotData = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {allTouristsSpotData.map(touristsSpotData => <TouristsSpotCard key={touristsSpotData._id} touristsSpotData={touristsSpotData}></TouristsSpotCard>)}
        </div>
    );
};

export default AllTouristsSpot;