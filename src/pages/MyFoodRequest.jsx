import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyFoodRequest = () => {

    const { user } = useAuth();
    const requestedFoods = useLoaderData();

    return (
        <div>
            <h1>{requestedFoods.length}</h1>
        </div>
    );
};

export default MyFoodRequest;