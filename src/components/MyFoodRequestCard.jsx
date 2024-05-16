
const MyFoodRequestCard = ({ food }) => {

    const { food_name, food_img, donator_name,
        food_quantity, pickup_location, expire_date,
        donator_email, food_status } = food;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squire w-20 lg:w-52 h-14 lg:h-28 rounded-xl lg:rounded-3xl">
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
                <span className="badge badge-ghost badge-md">{donator_email}</span>
            </td>
            <td>
                <p><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
                <p><span className="font-bold">Expire Date:</span> {expire_date}</p>
                <p><span className="font-bold">Quantity:</span> {food_quantity}</p>
            </td>
        </tr>
    );
};

export default MyFoodRequestCard;