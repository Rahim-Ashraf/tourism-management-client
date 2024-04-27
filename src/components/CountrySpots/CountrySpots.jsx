import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const CountrySpots = () => {
    const loadedSpots = useLoaderData()
    console.log(loadedSpots)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {loadedSpots?.map(spots => <div key={spots._id} className="card card-compact h-full bg-base-100 shadow-xl">
                <figure><img src={spots.image_url} alt={spots.tourists_spot_name} /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{spots.tourists_spot_name}</h2>
                        <h2 className="card-title">{spots.country_name}</h2>
                    </div>
                    <div className="flex justify-between">
                        <span>{spots.short_description}</span>
                        <span>{spots.average_cost}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-2"><FaLocationDot></FaLocationDot><span>{spots.location}</span></span>
                        <span>{spots.seasonality}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/view-details/${spots._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default CountrySpots;