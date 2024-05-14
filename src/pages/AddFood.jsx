import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const AddFood = () => {
    const { user } = useAuth();

    const handleAddFood = event => {
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

        const newFoodItem = {
            food_name, food_img, donator_name, donator_img,
            food_quantity, pickup_location, expire_date, additional_notes,
            donator_email, food_status
        };

        // send data to the server 

        fetch("https://save-food-server.vercel.app/add-food", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added items',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="w-3/5 mx-auto my-8">
            <h1 className="text-4xl font-bold text-center my-6">Add Food</h1>
            <form onSubmit={handleAddFood}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Food name</span>
                        </div>
                        <input type="text" name="foodName" required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Food Image</span>
                        </div>
                        <input type="text" name="foodImg" required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Food quantity</span>
                        </div>
                        <input type="number" name="foodQuantity" required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Pickup Location</span>
                        </div>
                        <input type="text" name="pickupLocation" required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Expired Date</span>
                        </div>
                        <input type="text" name="expireDate" required placeholder="dd-mm-yy" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Food Status</span>
                        </div>
                        <input type="text" name="foodStatus" defaultValue="available" required placeholder="" className="input input-bordered w-full bg-[#E8E8E8]" />
                    </label>
                </div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Additional Notes</span>
                    </div>
                    <textarea type="text" name="additionalNote" required placeholder="" className="textarea textarea-bordered w-full"></textarea>
                </label>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-[#E8E8E8] my-6 pt-2 pb-8 px-4 rounded-xl">

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Name</span>
                        </div>
                        <input type="text" name="donatorName" defaultValue={user?.displayName} required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Image</span>
                        </div>
                        <input type="text" name="donatorImg" defaultValue={user?.photoURL} required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donator Email</span>
                        </div>
                        <input type="email" name="donatorEmail" defaultValue={user?.email} required placeholder="" className="input input-bordered w-full " />
                    </label>

                </div>

                <input className="my-6 w-full py-2 bg-[#FFA400] rounded-lg cursor-pointer text-slate-700 text-xl font-bold" type="submit" value="Add" />

            </form>
        </div>
    );
};

export default AddFood;