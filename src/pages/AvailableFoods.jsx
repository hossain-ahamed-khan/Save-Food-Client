import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../components/AvailableFoodCard";

const AvailableFoods = () => {

    const loadedFoods = useLoaderData();

    return (
        <div>

            <div className="w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    loadedFoods.map(food => <AvailableFoodCard
                        key={food._id}
                        food={food}
                    ></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;