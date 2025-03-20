import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-0"></div>
            

            <img 
                src='/food-1.jpg' 
                className='w-full h-screen object-cover' 
                alt="Delicious food"
            />
            

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    Satisfy Your Cravings
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
                    Order from the best local restaurants with fast delivery to your doorstep
                </p>
                <div className="flex space-x-4">
                    <button
                    onClick={() => navigate("/canteen")}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                        Order From Canteen
                    </button>
                    <button
                    onClick={() => navigate("/menu")}
                    className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                        View Restaurants
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;