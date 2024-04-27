import { Link } from "react-router-dom";


const TouristsSpotCard = ({ touristsSpotData }) => {
    const { _id, image_url, tourists_spot_name, average_cost, tota_visitors_per_year, travel_time, seasonality } = touristsSpotData;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={image_url} alt={tourists_spot_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p>{average_cost}</p>
                <p>{tota_visitors_per_year}</p>
                <p>{travel_time}</p>
                <p>{seasonality}</p>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpotCard;