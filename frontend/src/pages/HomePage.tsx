import { Clock, Star, ArrowRight } from 'lucide-react';
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const HomePage = () => {
    const navigate = useNavigate();
    
    const handleSearchSubmit = useCallback((searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    }, [navigate]);
    
    const featuredRestaurants = [
        { id: 1, name: "Burger Palace", rating: 4.3, deliveryTime: "25-30 min", cuisine: "Burgers, Fast Food", image: "/burger-r.jpg" },
        { id: 2, name: "Pizza Heaven", rating: 4.7, deliveryTime: "30-40 min", cuisine: "Italian, Pizza", image: "/pizza-r.jpg" },
        { id: 3, name: "Sushi World", rating: 4.1, deliveryTime: "35-45 min", cuisine: "Japanese, Sushi", image: "/sushi-r.jpg" },
        { id: 4, name: "Taco Express", rating: 4.0, deliveryTime: "20-30 min", cuisine: "Mexican, Fast Food", image: "/taco-r.jpg" },
    ];

    const foodCategories = [
        { id: 1, name: "Pizza", image: "/pizza.png" },
        { id: 2, name: "Burgers", image: "/burger.png" },
        { id: 3, name: "Sushi", image: "/sushi.png" },
        { id: 4, name: "Indian", image: "/dal-roti.png" },
        { id: 5, name: "Desserts", image: "/cake.png" },
        { id: 6, name: "Healthy", image: "/salad.png" },
        {id: 7, name: "Shwarma", image: "/shwar.png"},
        {id: 8, name: "Veg Pulao", image: "/biryani.png"},
        {id: 9, name: "Ice Cream", image: "/ice-cream.png"},
        {id: 10, name: "French Fries", image: "/fries.png"},
        {id: 11, name: "Chole Bhature", image: "/bhature.png"},
        {id: 12, name: "Shakes", image: "/shake.png"},
    ];

    interface Category {
        id: number;
        name: string;
        image: string;
    }

    const handleCategoryClick = useCallback((categoryName: Category['name']) => {
        navigate(`/category/${categoryName.toLowerCase()}`);
    }, [navigate]);

    interface Restaurant {
        id: number;
        name: string;
        rating: number;
        deliveryTime: string;
        cuisine: string;
        image: string;
    }

    const handleRestaurantClick = useCallback((restaurantId: Restaurant['id']) => {
        navigate(`/restaurant/${restaurantId}`);
    }, [navigate]);

    return (
        <div className="flex flex-col gap-12 px-4 pb-12 md:px-6">
            {/* Hero Section with Search */}
            <div className="relative z-10 flex flex-col gap-5 px-6 py-8 -mt-24 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold tracking-tight text-center text-orange-600 md:text-5xl">
                    Tuck into a takeaway today!
                </h1>
                <p className="mb-2 text-xl text-center text-gray-600">
                    Delicious food is just a click away!
                </p>
                
                <div className="flex items-center w-full max-w-2xl mx-auto mt-4 mb-2">
                    <div className="relative flex items-center justify-center flex-1">
                        <SearchBar
                            placeHolder="Search by City or Town"
                            onSubmit={handleSearchSubmit}
                        />
                    </div>
                </div>
            </div>

            {/* Food Categories Section */}
            <div className="mb-8">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    What are you craving today?
                </h2>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                    {foodCategories.map((category) => (
                        <div 
                            key={category.id} 
                            className="flex flex-col items-center transition-transform duration-200 cursor-pointer group hover:scale-105"
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            <div className="w-20 h-20 text-4xl mb-2 overflow-hidden transition duration-300 border-2 border-transparent rounded-full bg-orange-50 md:w-40 md:h-40">
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="object-cover w-full h-full transition-transform group-hover:scale-110" 
                                    loading="lazy"
                                    width="160"
                                    height="160"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                    }}
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700 transition-colors group-hover:text-orange-600">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Restaurants Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="flex items-center text-2xl font-bold text-gray-800">
                        <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                        Top restaurants in your area
                    </h2>
                    <button className="flex items-center text-orange-600 transition-colors hover:text-orange-700">
                        View all <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {featuredRestaurants.map((restaurant) => (
                        <div 
                            key={restaurant.id} 
                            className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow cursor-pointer hover:shadow-lg hover:translate-y-1"
                            onClick={() => handleRestaurantClick(restaurant.id)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={restaurant.image} 
                                    alt={restaurant.name} 
                                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
                                    loading="lazy"
                                    width="400"
                                    height="200"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white rounded-bl-lg bg-gradient-to-l from-orange-600 to-orange-500">
                                    {restaurant.deliveryTime}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="mb-1 text-lg font-bold text-gray-800">{restaurant.name}</h3>
                                <p className="mb-3 text-sm text-gray-500">{restaurant.cuisine}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                                            <span>{restaurant.rating}</span>
                                            <Star className="ml-0.5 h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {restaurant.deliveryTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* App Download Section */}
            <div className="grid gap-8 p-8 transition-shadow duration-300 shadow-md md:grid-cols-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:shadow-lg">
                <div className="flex justify-center">
                    <img 
                        src="/app.png" 
                        alt="Hungrr App" 
                        className="w-full mx-auto" 
                        loading="lazy" 
                        width="500"
                        height="600"
                        onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                        }}
                    />
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800">Order takeaway even faster!</h2>
                    <p className="text-lg text-gray-600">
                        Download the Hungrr App for faster ordering and exclusive app-only offers!
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                            <span className="flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full">1</span>
                            Exclusive app-only discounts
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full">2</span>
                            Faster checkout with saved details
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full">3</span>
                            Real-time order tracking
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-4">
                        <img 
                            src="/app-download.png" 
                            alt="Get it on Google Play" 
                            className="h-12 transition cursor-pointer hover:opacity-90 hover:scale-105" 
                            loading="lazy"
                            width="160"
                            height="48"
                            onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="2" y="6" width="20" height="12" rx="2" ry="2"%3E%3C/rect%3E%3Cline x1="6" y1="12" x2="18" y2="12"%3E%3C/line%3E%3C/svg%3E';
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;