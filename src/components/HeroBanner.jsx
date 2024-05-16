import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <div className="w-4/5 mx-auto my-6 h-[480px] md:h-[580px] lg:h-[680px] rounded-3xl">
            <div className="hero w-full h-full rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/60LhRXq/meat-cutlets.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Save Your Food For Others</h1>
                        <p className="mb-5">Whether you have extra food to give or are looking for a delicious home-cooked dish, ShareBite connects neighbors to reduce waste and foster community spirit.</p>
                        <Link to="/available-foods">
                            <button className="btn bg-[#ffa600] font-semibold">Available Foods</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;