import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoodCard = () => {

    const loadedFood = useLoaderData();

    const { _id, food_name, food_img, donator_name, donator_img,
        food_quantity, pickup_location, expire_date, additional_notes,
        donator_email, food_status } = loadedFood;

    // update data 

    const handleUpdateFood = event => {
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
        const food_status = form.foodStatus.value;

        const updatedFood = {
            food_name, food_img, donator_name, donator_img,
            food_quantity, pickup_location, expire_date, additional_notes,
            donator_email, food_status
        };

        // send data to the server 

        fetch(`https://save-food-server.vercel.app/update-food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="w-3/5 mx-auto my-8">
            <h1 className="text-4xl font-bold text-center my-6">Update Food</h1>

            <form onSubmit={handleUpdateFood}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Food name</span>
                        </div>
                        <input type="text" name="foodName" required defaultValue={food_name} className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Food Image</span>
                        </div>
                        <input type="text" name="foodImg" required defaultValue={food_img} className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Food quantity</span>
                        </div>
                        <input type="number" name="foodQuantity" required defaultValue={food_quantity} className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Pickup Location</span>
                        </div>
                        <input type="text" name="pickupLocation" required defaultValue={pickup_location} className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Expired Date</span>
                        </div>
                        <input type="text" name="expireDate" required defaultValue={expire_date} className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Food Status</span>
                        </div>
                        <input type="text" name="foodStatus" defaultValue={food_status} required placeholder="" className="input input-bordered w-full" disabled />
                    </label>
                </div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Additional Notes</span>
                    </div>
                    <textarea type="text" name="additionalNote" required defaultValue={additional_notes} className="textarea textarea-bordered w-full"></textarea>
                </label>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-[#E8E8E8] my-6 pt-2 pb-8 px-4 rounded-xl">

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Name</span>
                        </div>
                        <input type="text" name="donatorName" defaultValue={donator_name} required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Image</span>
                        </div>
                        <input type="text" name="donatorImg" defaultValue={donator_img} required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Email</span>
                        </div>
                        <input type="email" name="donatorEmail" defaultValue={donator_email} required placeholder="" className="input input-bordered w-full " />
                    </label>

                </div>

                <input className="my-6 w-full py-2 bg-[#ffa600b4] rounded-lg cursor-pointer text-slate-700 text-lg font-bold" type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateFoodCard;