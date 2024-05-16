import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ManageMyFoodCard from "../components/ManageMyFoodCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageMyFoods = () => {

    const { user } = useAuth();
    const [myFoods, setMyFoods] = useState([]);
    const [control, setControl] = useState(false);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`https://save-food-server.vercel.app/my-foods/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMyFoods(data);
        //     })

        axiosSecure.get(`/my-foods/${user?.email}`)
            .then(res => {
                setMyFoods(res.data);
            })

    }, [user, control, axiosSecure])


    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">My Added Foods</h1>
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
                            myFoods.map(myFood => <ManageMyFoodCard
                                key={myFood._id}
                                myFood={myFood}
                                control={control}
                                setControl={setControl}
                            ></ManageMyFoodCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;