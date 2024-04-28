import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle';


const Home = () => {
    const [countriesData, setCountriesData] = useState(null);
    const [touristsSpotsData, setTouristsSpotsData] = useState(null);
    register();
    useEffect(() => {
        fetch("https://tourism-management-server-ecru.vercel.app/tourists-countries")
            .then(res => res.json())
            .then(data => setCountriesData(data));
        fetch("https://tourism-management-server-ecru.vercel.app/tourists-spots")
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
            {touristsSpotsData ? <section className='bg-slate-400 py-10 px-10 lg:px-20 rounded-lg my-10'>
                <h1 className='text-center text-2xl font-bold mb-8'>Tourists Spots</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10'>
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
            </section > : <div className="w-full flex justify-center">
                <span className="loading loading-spinner loading-lg flex justify-center items-center h-screen"></span>
            </div>
            }
            {countriesData ? <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-10'>
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
            </section> : <div className="w-full flex justify-center">
                <span className="loading loading-spinner loading-lg flex justify-center items-center h-screen"></span>
            </div>
            }
            {touristsSpotsData ? <section className='py-10 px-10 lg:px-20 rounded-lg my-10'>
                <h2 className='text-center text-2xl font-bold mb-8'>Tour Packages</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10'>
                    {
                        touristsSpotsData?.map(touristSpot => <div key={touristSpot._id}>
                            <div className='mr-4 space-y-4'>
                                <img className="max-h-[160px] md:max-h-[290px] w-full rounded-t-2xl" src={touristSpot.image_url} alt="" />
                                <div className='flex justify-between'>
                                    <h2 className='font-bold text-xl'>place: {touristSpot.tourists_spot_name}</h2>
                                    <h2 className='font-bold text-xl flex gap-1 items-center'><FaLocationDot></FaLocationDot>
                                        <span>{touristSpot.location}</span></h2>
                                </div>
                                <div className='btn btn-secondary w-full flex justify-between'>
                                    <span className='font-bold'>Duration: {touristSpot.travel_time}</span>
                                    <span className='font-bold'>Package Price: ${touristSpot.average_cost}</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section> : <div className="w-full flex justify-center">
                <span className="loading loading-spinner loading-lg flex justify-center items-center h-screen"></span>
            </div>
            }
            <section>
                <h2 className='text-center text-4xl font-bold mb-8'>About us</h2>
                <p className='p-10 bg-primary text-white text-xl rounded'>
                    <span className='text-secondary font-bold text-2xl'>Welcome to Dream Tour</span>,
                    <br />
                    your gateway to unforgettable adventures and unparalleled experiences around the globe.
                    <br />
                    At Dream Tour, we believe that travel is more than just visiting destinations; its about immersing yourself in new cultures, forging lasting memories, and discovering the extraordinary wonders our world has to offer. Whether youre seeking a relaxing beach getaway, an adrenaline-fueled adventure, or a culturally enriching journey, we are here to curate the perfect itinerary tailored to your desires.
                    <br />
                    With a team of passionate travel experts and a vast network of trusted partners, we specialize in crafting bespoke travel experiences that exceed expectations. From arranging luxury accommodations and private tours to coordinating transportation and providing insider tips, we handle every detail so you can focus on enjoying your dream vacation.
                    <br />
                    Embark on a journey of discovery with Dream Tour and unlock the hidden treasures of our planet. Let us inspire your wanderlust and create memories that will last a lifetime.
                    <br />
                    Your adventure starts here. Explore the world with Dream Tour.
                </p>
            </section>
        </div >
    );
};

export default Home;