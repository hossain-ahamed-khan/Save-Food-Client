import { useLoaderData } from "react-router-dom";
import MyFoodRequestCard from "../components/MyFoodRequestCard";

const MyFoodRequest = () => {

    const requestedFoods = useLoaderData();

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
                            requestedFoods.map(requestedFood => <MyFoodRequestCard
                                key={requestedFood._id}
                                requestedFood={requestedFood}
                            ></MyFoodRequestCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;