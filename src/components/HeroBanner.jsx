import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <div className="w-4/5 mx-auto my-6 h-[680px] rounded-3xl">
            <div className="hero w-full h-full rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/60LhRXq/meat-cutlets.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/available-foods">
                            <button className="btn btn-primary">Available Foods</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;