import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";


const AllTouristsSpot = () => {
    const allTouristsSpotData = useLoaderData()

    return (
        <div>
            {allTouristsSpotData.map(touristsSpotData => <TouristsSpotCard key={touristsSpotData._id} touristsSpotData={touristsSpotData}></TouristsSpotCard>)}
        </div>
    );
};

export default AllTouristsSpot;