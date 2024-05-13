import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen relative">
            <img className="w-full" src="https://i.ibb.co/gTFPHKZ/221513-P156-QA-346.jpg" alt="" />
            <Link to="/"><button className="btn btn-primary absolute top-10 left-16 w-72 font-bold text-xl">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;