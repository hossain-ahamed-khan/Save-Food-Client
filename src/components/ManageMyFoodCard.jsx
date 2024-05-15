
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageMyFoodCard = ({ myFood, control, setControl }) => {

    const { _id, food_name, food_img, donator_name,
        food_quantity, pickup_location, expire_date,
        donator_email, food_status } = myFood;


    // delete data from database 

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://save-food-server.vercel.app/delete-food/${id}`, { credentials: 'include' },
                    {
                        method: "DELETE",
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setControl(!control);
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-52 h-24">
                                <img src={food_img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{food_name}</div>
                            <div className="text-sm opacity-50">{food_status}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {donator_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{donator_email}</span>
                </td>
                <td>
                    <p><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
                    <p><span className="font-bold">Expire Date:</span> {expire_date}</p>
                    <p><span className="font-bold">Quantity:</span> {food_quantity}</p>
                </td>
                <th className="space-x-6 ">
                    <Link to={`/update-food/${_id}`}>
                        <button className="btn bg-[#ffa600b4]">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-[#ff6600ee]">Delete
                    </button>
                </th>
            </tr>
        </>
    );
};

export default ManageMyFoodCard;