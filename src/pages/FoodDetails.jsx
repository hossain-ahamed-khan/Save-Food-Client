import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const FoodDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [food, setFood] = useState({});

    useEffect(() => {
        fetch(`https://save-food-server.vercel.app/food/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data);
            })
    }, [id])

    const handleRequestFood = event => {
        event.preventDefault();
        const form = event.target;

        const food_name = form.foodName.value;
        const food_img = form.foodImg.value;
        const donator_name = form.donatorName.value;
        const donator_img = form.donatorImg.value;
        const food_quantity = form.foodQuantity.value;
        const pickup_location = form.pickupLocation.value;
        const expire_date = form.expireDate.value;
        const additional_notes = form.additionalNote.value;
        const donator_email = form.donatorEmail.value;
        const food_status = "requested";

        const requestFoodItem = {
            food_name, food_img, donator_name, donator_img,
            food_quantity, pickup_location, expire_date, additional_notes,
            donator_email, food_status
        };

        // send data to the server 

        fetch("https://save-food-server.vercel.app/request-food", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Requested',
                        text: 'Successfully added to request items',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })


        // remove data from server 
        fetch(`https://save-food-server.vercel.app/delete-food/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    //  _id, food_name, food_img, donator_name, donator_img, food_quantity, pickup_location, expire_date, additional_notes 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="w-full lg:w-2/5 rounded-3xl" src={food.food_img} />
                    <div className="w-full lg:w-9/12 p-6 bg-white rounded-3xl">
                        <div className="w-full mb-6">
                            <h2 className="text-2xl font-bold">Donor Information:</h2>
                            <p>Donar Name: {food.donator_name}</p>
                            <p>Food Pickup Location: {food.pickup_location}</p>
                        </div>
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">Food Information:</h2>
                            <h3 className="text-lg font-semibold">{food.food_name}
                                <div className="badge badge-secondary ml-2">For {food.food_quantity} person</div>
                            </h3>
                            <p>Expire Date: {food.expire_date}</p>


                            <div className="flex justify-end">

                                {/* Modal button start  */}

                                <button
                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                    className="btn btn-md bg-[#ffa600b4] justify-end">Request</button>

                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <h2 className="font-bold text-2xl text-center mb-3">Request Food</h2>

                                        <button
                                            onClick={() => document.getElementById('my_modal_3').close()}
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                        <form onSubmit={handleRequestFood}>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

                                                <label className="form-control">
                                                    <div className="label">
                                                        <span className="label-text">Food ID</span>
                                                    </div>
                                                    <input type="text" name="foodId" defaultValue={food._id} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control w-full ">
                                                    <div className="label">
                                                        <span className="label-text">Food name</span>
                                                    </div>
                                                    <input type="text" name="foodName" defaultValue={food.food_name} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control w-full">
                                                    <div className="label">
                                                        <span className="label-text">Food Image</span>
                                                    </div>
                                                    <input type="text" name="foodImg" defaultValue={food.food_img} className="input input-bordered w-full " disabled />
                                                </label>


                                                <label className="form-control w-full">
                                                    <div className="label">
                                                        <span className="label-text">Food quantity</span>
                                                    </div>
                                                    <input type="number" name="foodQuantity" defaultValue={food.food_quantity} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control">
                                                    <div className="label">
                                                        <span className="label-text">Pickup Location</span>
                                                    </div>
                                                    <input type="text" name="pickupLocation" defaultValue={food.pickup_location} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control">
                                                    <div className="label">
                                                        <span className="label-text">Expire Date</span>
                                                    </div>
                                                    <input type="text" name="expireDate" defaultValue={food.expire_date} className="input input-bordered w-full" disabled />
                                                </label>
                                            </div>

                                            <label className="form-control">
                                                <div className="label">
                                                    <span className="label-text">Additional Notes</span>
                                                </div>
                                                <textarea type="text" name="additionalNote" defaultValue={food.additional_notes} className="textarea textarea-bordered w-full"></textarea>
                                            </label>

                                            <div className="grid grid-cols-1 bg-[#E8E8E8] p-2 my-4 rounded-xl">

                                                <label className="form-control w-full">
                                                    <div className="label">
                                                        <span className="label-text">Donator Name</span>
                                                    </div>
                                                    <input type="text" name="donatorName" defaultValue={user?.displayName} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control w-full">
                                                    <div className="label">
                                                        <span className="label-text">Donator Image</span>
                                                    </div>
                                                    <input type="text" name="donatorImg" defaultValue={user?.photoURL} className="input input-bordered w-full " disabled />
                                                </label>

                                                <label className="form-control w-full">
                                                    <div className="label">
                                                        <span className="label-text">Donator Email</span>
                                                    </div>
                                                    <input type="email" name="donatorEmail" defaultValue={user?.email} className="input input-bordered w-full " disabled />
                                                </label>

                                            </div>

                                            <input
                                                onClick={() => document.getElementById('my_modal_3').close()}
                                                className="my-2 w-full py-2 bg-[#FFA400] rounded-lg cursor-pointer text-slate-700 text-xl font-bold" type="submit" value="Request" />

                                        </form>
                                    </div>
                                </dialog>

                                {/* modal button end  */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;