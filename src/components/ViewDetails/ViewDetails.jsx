import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const touristsSpotData = useLoaderData()
    const { image_url, country_Name, average_cost, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, } = touristsSpotData;
    return (
        <div className="card card-side shadow-xl">
            <div className="lg:flex p-4">
                <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src={image_url} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="text-4xl font-bold mb-4">{country_Name}</h2>
                    <p>{short_description}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <CiLocationOn />
                            <p>{location}</p>
                        </div>
                        <div><p><span className="font-bold">seasonality: </span>{seasonality}</p></div>
                    </div>
                    <div className="flex justify-between">
                        <p><span className="font-bold">Total visitors per year: </span>{total_visitors_per_year}</p>
                        <div><p><span className="font-bold">travel time: </span> {travel_time}</p></div>
                    </div>
                    <div className="flex justify-between">
                        <div><p className="text-lg font-bold">tourists spot name: {tourists_spot_name}</p></div>
                        <div><p className="text-xl font-bold text-cyan-600">average cost: ${average_cost}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;