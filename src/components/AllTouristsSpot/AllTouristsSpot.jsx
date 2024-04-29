import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import { useState } from "react";


const AllTouristsSpot = () => {
    const allTouristsSpotData = useLoaderData()
    const [touristsSpotData, setTouristsSpotData] = useState(allTouristsSpotData);
    const [render, setRender] = useState(true)
    const handleSelect = () => {
        const sortedData = allTouristsSpotData.sort(function (a, b) { return b.average_cost - a.average_cost });
        setTouristsSpotData(sortedData)
        setRender(!render)
    }

    return (
        <div>
            <div className="flex justify-center my-4">
                <details className="dropdown">
                    <summary className="m-1 btn select">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handleSelect} className="btn">Cost high to low</li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">

                {touristsSpotData?.map(touristsSpotData => <TouristsSpotCard
                    key={touristsSpotData._id} touristsSpotData={touristsSpotData}>
                </TouristsSpotCard>)}
            </div>
        </div>
    );
};

export default AllTouristsSpot;