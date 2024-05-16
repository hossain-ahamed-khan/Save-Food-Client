import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoodCard from "../components/FeaturedFoodCard";
import HeroBanner from "../components/HeroBanner";
import WasteFoodSection from "../components/WasteFoodSection";
import TestimoniesSection from "../components/TestimoniesSection";

const HomePage = () => {

    const loadedFoods = useLoaderData();

    return (
        <>
            <HeroBanner></HeroBanner>

            <div>
                <h1 className="text-4xl font-bold text-center my-20">Featured Foods</h1>

                <div className="w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
                    {
                        loadedFoods.slice(0, 6).map(food => <FeaturedFoodCard
                            key={food._id}
                            food={food}
                        ></FeaturedFoodCard>)
                    }
                </div>
                <div className="text-center">
                    <Link to="/available-foods">
                        <button className="btn bg-[#FFC04B] font-semibold">Show All</button>
                    </Link>
                </div>
            </div>

            <WasteFoodSection></WasteFoodSection>
            <TestimoniesSection></TestimoniesSection>
        </>
    );
};

export default HomePage;