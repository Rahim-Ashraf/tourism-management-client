import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle';


const Home = () => {
    const [countriesData, setCountriesData] = useState([])
    register();
    useEffect(() => {
        fetch("https://tourism-management-server-ecru.vercel.app/tourists-countries")
            .then(res => res.json())
            .then(data => setCountriesData(data))
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
                Tourists Spots
            </section>
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
        </div>
    );
};

export default Home;