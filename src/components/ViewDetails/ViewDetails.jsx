import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


const ViewDetails = () => {
    const touristsSpotData = useLoaderData()
    const { image_url, country_name, average_cost, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, } = touristsSpotData;
    return (
        <div className="card card-side shadow-xl">
            <div className="lg:flex p-4">
                <div className="w-full">
                    <img className="rounded-lg" src={image_url} alt="Movie" />
                </div>
                <div className="card-body w-full">
                    <h2 className="text-4xl font-bold mb-4"><Typewriter
                        words={[country_name, tourists_spot_name]}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    /></h2>
                    <div className="flex gap-2 items-center text-xl font-bold text-cyan-600">
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                    <div className="flex justify-between">
                        <span><span className="font-bold">Total visitors per year: </span>{total_visitors_per_year}</span>
                        <span><span className="font-bold">travel time: </span> {travel_time}</span>
                    </div>
                    <div className="flex justify-between">
                        <span><span className="font-bold">seasonality: </span>{seasonality}</span>
                        <span className="text-xl font-bold">average cost: ${average_cost}</span>
                    </div>
                    <p>{short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;