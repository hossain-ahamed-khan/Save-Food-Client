import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {

    const { _id, food_name, food_img, donator_name, donator_img, food_quantity, pickup_location, expire_date, additional_notes } = food;
    return (
        <div className="card max-w-lg shadow-xl">
            <figure><img src={food_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food_name}
                    <div className="badge badge-secondary">For {food_quantity} person</div>
                </h2>
                <p>{additional_notes}</p>
                <p>Expire Date: {expire_date}</p>
                <p>Pickup Location: {pickup_location}</p>
                <div className="card-actions justify-between">
                    <div className="flex gap-3 items-center">
                        <img className="w-10 h-10 rounded-full" src={donator_img} alt="" />
                        <p>{donator_name}</p>
                    </div>
                    <Link to={`food/${_id}`}> <button className="btn">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;