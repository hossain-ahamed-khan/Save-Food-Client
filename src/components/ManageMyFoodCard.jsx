
const ManageMyFoodCard = ({ myFood }) => {

    const { _id, food_name, food_img, donator_name, donator_img,
        food_quantity, pickup_location, expire_date, additional_notes,
        donator_email, food_status } = myFood;

    return (
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
                <button className="btn bg-[#ffa600b4]">Update</button>
                <button className="btn bg-[#ff6600ee]">Delete</button>
            </th>
        </tr>
    );
};

export default ManageMyFoodCard;