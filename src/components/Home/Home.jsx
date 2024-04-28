import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle';


const Home = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [touristsSpotsData, setTouristsSpotsData] = useState([]);
    register();
    useEffect(() => {
        fetch("https://tourism-management-server-ecru.vercel.app/tourists-countries")
            .then(res => res.json())
            .then(data => setCountriesData(data));
        fetch("http://localhost:5000/tourists-spots")
            .then(res => res.json())
            .then(data => setTouristsSpotsData(data))
    }, []);

    return (
        <div>
            <section className="mb-6">
                <swiper-container speed="500" loop="true" navigation="true" pagination="true" autoplay="true">
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/jZYhhNH/seint-martin.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/jbvp5nt/bangkok.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/nfT0m5m/cox-s-bazar.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/cFx6Fpt/sunderbans.jpg" alt="" /></swiper-slide>
                </swiper-container>
            </section>
            <section>
                <h1 className='text-center'>Tourists Spots</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 bg-slate-400 py-10 px-10 lg:px-20 rounded-lg my-10'>
                    {touristsSpotsData?.map(touristSpot => <div key={touristSpot._id} className="card card-compact bg-base-100 shadow-2xl">
                        <figure><img src={touristSpot.image_url} alt={touristSpot.tourists_spot_name} /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <span className='flex gap-2 '>
                                    <FaLocationDot className='text-xl'></FaLocationDot>
                                    <h2 className="card-title">{touristSpot.tourists_spot_name}</h2>
                                </span>
                                <h2 className="card-title">{touristSpot.country_name}</h2>
                            </div>
                            <Link to={`/view-details/${touristSpot._id}`} className="btn btn-primary">View Details</Link>

                        </div>
                    </div>)
                    }
                </div>
            </section >
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-10'>
                {
                    countriesData.map(countryData => <Link key={countryData._id} to={`/specific-country-spots/${countryData.country_name}`}>
                        <div className="card card-compact bg-base-100 shadow-xl h-full">
                            <figure className='shadow-xl'><img src={countryData.image_url} alt={countryData.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{countryData.country_name}</h2>
                                <p>{countryData.short_description}</p>
                            </div>
                        </div>
                    </Link>)

                }
            </section>
        </div >
    );
};

export default Home;