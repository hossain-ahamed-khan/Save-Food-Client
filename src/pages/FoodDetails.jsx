import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {

    const { id } = useParams();
    const [food, setFood] = useState({});

    useEffect(() => {
        fetch(`https://save-food-server.vercel.app/food/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data);
            })
    }, [id])

    //  _id, food_name, food_img, donator_name, donator_img, food_quantity, pickup_location, expire_date, additional_notes 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="w-full lg:w-2/5 rounded-3xl" src={food.food_img} />
                    <div className="w-full lg:w-9/12 p-6 bg-white rounded-3xl">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">Donor Information:</h2>
                            <p>Donar Name: {food.donator_name}</p>
                            <p>Food Pickup Location: {food.pickup_location}</p>
                        </div>
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">Food Information:</h2>
                            <h3 className="text-lg font-semibold">{food.food_name}
                                <div className="badge badge-secondary ml-2">For {food.food_quantity} person</div>
                            </h3>
                            <p>Food Pickup Location: {food.pickup_location}</p>
                            <p>Expire Date: {food.expire_date}</p>
                            <div className="flex justify-end">
                                <button className="btn btn-md bg-[#ffa600b4] justify-end">Request</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;