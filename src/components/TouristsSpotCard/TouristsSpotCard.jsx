import { Link } from "react-router-dom";


const TouristsSpotCard = ({ touristsSpotData }) => {
    const { _id, image_url, tourists_spot_name, average_cost, total_visitors_per_year, travel_time, seasonality } = touristsSpotData;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={image_url} alt={tourists_spot_name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{tourists_spot_name}</h2>
                <div className="flex justify-between">
                    <span className="font-bold">Average Cost: ${average_cost}</span>
                    <span className="font-bold">Visitors: {total_visitors_per_year}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Travel time: {travel_time}</span>
                    <span className="font-bold">Seasonality: {seasonality}</span>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpotCard;