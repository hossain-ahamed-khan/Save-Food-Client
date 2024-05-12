
const FeaturedFoodCard = ({ food }) => {

    const { _id, food_name, food_img, donator_name, donator_img, food_quantity, pickup_location, expire_date, additional_notes } = food;
    return (
        <div className="card max-w-lg shadow-xl">
            <figure><img src={food_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;