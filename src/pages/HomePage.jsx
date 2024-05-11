import { useLoaderData } from "react-router-dom";
import FeaturedFoodCard from "../components/FeaturedFoodCard";

const HomePage = () => {

    const loadedFoods = useLoaderData();

    return (
        <>
            <div className="w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    loadedFoods.slice(0, 6).map(food => <FeaturedFoodCard
                        key={food._id}
                        food={food}
                    ></FeaturedFoodCard>)
                }
            </div>
        </>
    );
};

export default HomePage;