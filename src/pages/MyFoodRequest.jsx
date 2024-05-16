import { useEffect, useState } from "react";
import MyFoodRequestCard from "../components/MyFoodRequestCard";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const MyFoodRequest = () => {

    const { user } = useAuth();
    const [myFoods, setMyFoods] = useState([]);

    useEffect(() => {
        // fetch(`https://save-food-server.vercel.app/requested-foods/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMyFoods(data);
        //     })

        axios.get(`https://save-food-server.vercel.app/requested-foods/${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyFoods(res.data);
            })

    }, [user])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">My Requested Foods</h1>
            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="pl-24">Food</th>
                            <th>Donor Info</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myFoods.map(food => <MyFoodRequestCard
                                key={food._id}
                                food={food}
                            ></MyFoodRequestCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;