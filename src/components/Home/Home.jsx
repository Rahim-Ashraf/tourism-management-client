import { register } from 'swiper/element/bundle';


const Home = () => {
    register();

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
            <section>Tourists Spots</section>
        </div>
    );
};

export default Home;