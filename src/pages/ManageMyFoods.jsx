import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const ManageMyFoods = () => {

    const { user } = useAuth();

    const [myFoods, setMyFoods] = useState([]);

    useEffect(() => {
        fetch(`https://save-food-server.vercel.app/my-foods/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyFoods(data);
            })
    }, [user])


    return (
        <div>
            <h1>{myFoods.length}</h1>
        </div>
    );
};

export default ManageMyFoods;