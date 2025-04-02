import { Clock, Star, ArrowRight, Search, MapPin, Truck, Award, Gift } from 'lucide-react';
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import FoodPreferenceQuiz from '@/components/FoodPreferenceQuiz';



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

    const specialOffers = [
        { id: 1, title: "50% OFF", description: "On first 3 orders", code: "NEWUSER50", expiry: "Limited time offer" },
        { id: 2, title: "FREE DELIVERY", description: "On orders above $25", code: "FREEDEL", expiry: "Valid for this week" },
        { id: 3, title: "20% CASHBACK", description: "When you pay with our app wallet", code: "WALLET20", expiry: "Valid until April 30" },
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

    const handleOrderNow = async () => {
            const restaurantId = "67d46e789a73a0b9bb917f33"; // Hardcoded restaurant ID
            const specialMenuItem = {
              _id: "67d46e789a73a0b9bb917f35",
              name: "Burger",
              price: 5000, // Adjust price if needed
              quantity: 1,
            };
          
            // Save to sessionStorage before redirecting
            sessionStorage.setItem(
              `cartItems-${restaurantId}`,
              JSON.stringify([specialMenuItem])
            );
          
            // Redirect to restaurant page
            window.location.href = `/detail/${restaurantId}`;
          };
          
      
      

    return (
        <div className="flex flex-col gap-8 px-4 pb-16 bg-gray-50 md:px-6">


            {/* Hero Section with Search */}
            <div className="relative">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-40 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full opacity-30 -ml-8 -mb-8"></div>
                
                <div className="relative z-10 flex flex-col gap-5 px-6 py-10 -mt-24 bg-white rounded-xl shadow-xl border-b-4 border-orange-500">
                    <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 md:text-5xl">
                        Tuck into a <span className="text-orange-600">takeaway</span> today!
                    </h1>
                    <p className="mb-4 text-xl text-center text-gray-600">
                        Satisfy your cravings with just a few clicks!
                    </p>
                    
                    <div className="flex items-center w-full max-w-2xl mx-auto mt-2 mb-4">
                        <div className="relative flex items-center justify-center flex-1">
                            <div className="absolute inset-0 bg-orange-100 blur-2xl opacity-40 rounded-full pointer-events-none"></div>
                            <SearchBar
                                placeHolder="Search by City or Town"
                                onSubmit={handleSearchSubmit}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 pt-4 pb-2 mt-2 border-t border-gray-100">
                        <div className="flex items-center text-gray-700">
                            <Truck className="w-5 h-5 mr-2 text-orange-500" />
                            <span className="text-sm">Free delivery on first order</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Clock className="w-5 h-5 mr-2 text-orange-500" />
                            <span className="text-sm">Average delivery: 30 min</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Award className="w-5 h-5 mr-2 text-orange-500" />
                            <span className="text-sm">Top-rated restaurants</span>
                        </div>
                    </div>
                </div>
            </div>


     {/* Time-based Food Suggestions */}
        <div className="relative mb-8">
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500 relative overflow-hidden">
                {/* Decorative Background Shapes */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-200 rounded-full opacity-50 transform rotate-45"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300 rounded-full opacity-40"></div>
                <div className="flex items-start justify-between relative">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {(() => {
                        const hour = new Date().getHours();
                        if (hour >= 6 && hour < 11) return "Rise & Shine! Breakfast Time";
                        if (hour >= 11 && hour < 16) return "Lunchtime Favorites";
                        if (hour >= 16 && hour < 24) return "Dinner Delights";
                        return "Late Night Cravings";
                    })()}
                    </h2>
                    <p className="text-gray-600">
                    {(() => {
                        const hour = new Date().getHours();
                        if (hour >= 6 && hour < 11)
                        return "Kickstart your day with our sizzling, mouth-watering breakfast options!";
                        if (hour >= 11 && hour < 16)
                        return "Dive into our fresh and irresistible meals to power your day.";
                        if (hour >= 16 && hour < 24)
                        return "Indulge in sumptuous dinner delights crafted to perfection.";
                        return "Satisfy those midnight cravings with our delectable treats.";
                    })()}
                    </p>
                </div>
                <div className="text-8xl relative z-10">
                    {(() => {
                    const hour = new Date().getHours();
                    if (hour >= 6 && hour < 11) return "🍳";
                    if (hour >= 11 && hour < 16) return "🥗";
                    if (hour >= 16 && hour < 20) return "🍝";
                    return "🌮";
                    })()}
                </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-3 relative z-10">
                {(() => {
                    const hour = new Date().getHours();
                    let items = [];
                    
                    if (hour >= 6 && hour < 11) {
                    items = ["Fluffy Pancakes", "Avocado Toast", "Morning Omelette"];
                    } else if (hour >= 11 && hour < 16) {
                    items = ["Hearty Burgers", "Fresh Salads", "Wrap Wonders"];
                    } else if (hour >= 16 && hour < 20) {
                    items = ["Family Feasts", "Gourmet Pasta", "Pizza Party"];
                    } else {
                    items = ["Quick Bites", "All-Night Diners", "Decadent Desserts"];
                    }
                
                    return items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-3 text-center hover:from-orange-200 hover:to-orange-100 transition-colors cursor-pointer shadow-sm"
                    >
                        <span className="text-sm font-medium text-gray-800">{item}</span>
                    </div>
                    ));
                })()}
                </div>
            </div>
        </div>



            {/* Special Offers Carousel */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-10 rounded-xl"></div>
                <div className="p-1">
                    <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                        <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                        Hot Offers
                        <Gift className="w-5 h-5 ml-2 text-orange-500" />
                    </h2>
                    <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
                        {specialOffers.map((offer) => (
                            <div key={offer.id} className="flex-shrink-0 w-64 p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 border-l-4 border-orange-500">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-orange-600">{offer.title}</h3>
                                        <div className="px-2 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
                                            {offer.expiry}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                                    <div className="mt-auto pt-2 border-t border-dashed border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Use code:</span>
                                            <span className="px-2 py-1 text-sm font-mono font-bold text-orange-800 bg-orange-50 rounded">
                                                {offer.code}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Campus Canteen Promotion Section */}
            <div className="relative my-12 overflow-hidden">
                {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-40 -mr-10 -mt-10 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full opacity-30 -ml-8 -mb-8 z-0"></div>
                    
                    <div className="relative z-10 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl overflow-hidden border border-orange-100">
                        <div className="flex flex-col md:flex-row">
                        {/* Image/Visual section */}
                        <div className="md:w-2/5 relative">
                            <div className="h-64 md:h-full relative overflow-hidden">
                            <img 
                                src="/canteen-hero.webp" 
                                alt="Campus Canteen" 
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                Campus Exclusive
                            </div>
                            </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="md:w-3/5 p-6 md:p-8">
                            <div className="flex items-center mb-3">
                            <span className="w-8 h-1 bg-orange-500 rounded-full mr-3"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Campus Canteen Express</h2>
                            </div>
                            
                            <p className="text-gray-600 mb-4">Skip the queue and get delicious meals delivered straight to your hostel! Order from our diverse menu featuring everything from local favorites to global cuisines.</p>
                            
                            {/* Features highlights */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                <Clock className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                <h3 className="text-sm font-bold text-gray-800">Fast Delivery</h3>
                                <p className="text-xs text-gray-500">Average wait time: 15 mins</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                <MapPin className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                <h3 className="text-sm font-bold text-gray-800">Hostel Delivery</h3>
                                <p className="text-xs text-gray-500">Right to your doorstep</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                <Star className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                <h3 className="text-sm font-bold text-gray-800">Rated 4.8/5</h3>
                                <p className="text-xs text-gray-500">By fellow students</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                <Gift className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                <h3 className="text-sm font-bold text-gray-800">Student Discount</h3>
                                <p className="text-xs text-gray-500">Use your campus ID</p>
                                </div>
                            </div>
                            </div>
                            
                            {/* Popular items showcase */}
                            <div className="mb-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Most Popular Items</h3>
                            <div className="flex space-x-3 overflow-x-auto pb-2 hide-scrollbar">
                                {["Masala Dosa", "Chicken Biryani", "Cold Coffee", "Butter Chicken"].map((item, i) => (
                                <div key={i} className="flex-shrink-0 px-3 py-1 bg-white border border-orange-200 rounded-full text-sm shadow-sm">
                                    {item}
                                </div>
                                ))}
                            </div>
                            </div>
                            
                            {/* Schedule info */}
                            <div className="bg-orange-50 rounded-lg p-3 mb-6 border-l-4 border-orange-500">
                            <div className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                <span className="font-medium text-gray-800">Open Now</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-600">
                                {(() => {
                                    const hour = new Date().getHours();
                                    if (hour >= 6 && hour < 11) return "Breakfast: 7:00 AM - 9:00 AM";
                                    if (hour >= 11 && hour < 16) return "Lunch: 12:00 PM - 2:00 PM";
                                    if (hour >= 16 && hour < 20) return "Dinner: 7:00 PM - 9:00 PM";
                                    return "Snacks: 4:00 PM - 6:00 PM";
                                })()}
                                </span>
                            </div>
                            </div>
                            
                            {/* CTA button */}
                            <button 
                            onClick={() => navigate('/canteen')} 
                            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                            >
                            Explore Campus Canteen
                            <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                        </div>
                        
                        {/* Food highlights strip */}
                        <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-3 px-4 flex items-center overflow-x-auto hide-scrollbar">
                        <div className="text-white font-bold mr-4 flex-shrink-0">TODAY'S SPECIALS:</div>
                        <div className="flex space-x-6 animate-marquee">
                            {["Butter Paneer Combo @ ₹120", "Buy 1 Get 1 Samosa", "20% Off on Breakfast Items", "Combo Meals from ₹99", "Free Delivery on Orders Above ₹200"].map((special, i) => (
                            <div key={i} className="flex items-center text-white">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                <span>{special}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
            </div>

            {/* Food Categories Section */}
            <div className="relative mb-8">
                <div className="absolute right-0 bottom-0 w-40 h-40 bg-orange-100 rounded-full opacity-50 -mr-16 -mb-16 z-0"></div>
                <div className="absolute left-0 top-0 w-20 h-20 bg-orange-200 rounded-full opacity-40 -ml-10 -mt-10 z-0"></div>
                
                <div className="relative z-10">
                    <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                        <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                        What are you craving today?
                    </h2>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                        {foodCategories.map((category) => (
                            <div 
                                key={category.id} 
                                className="flex flex-col items-center transition-all duration-300 cursor-pointer group hover:scale-105"
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                <div className="w-20 h-20 text-4xl mb-2 overflow-hidden transition duration-300 rounded-full md:w-45 md:h-45">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="object-cover w-full h-full transition-transform group-hover:scale-130" 
                                        loading="lazy"
                                        width="160"
                                        height="160"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-orange-600 group-hover:font-bold">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dish Spotlight */}
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-10 rounded-xl"></div>
            
            <div className="p-6 md:p-8">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                Dish Spotlight
                </h2>
                
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative">
                    <img 
                        src="/burger.avif" 
                        alt="Signature Dish" 
                        className="w-full h-64 md:h-full object-cover"
                        onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                        }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-orange-600 font-bold text-sm shadow-md">
                        Chef's Special
                    </div>
                    </div>
                    
                    <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ultimate Truffle Burger</h3>
                    <div className="flex items-center mb-4">
                        <div className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                        <span>4.9</span>
                        <Star className="ml-0.5 h-3 w-3 fill-current" />
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                        (128 ratings)
                        </span>
                        <span className="ml-4 inline-flex items-center text-sm text-orange-600">
                        <Clock className="w-4 h-4 mr-1" />
                        30-35 min
                        </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                        A gourmet experience featuring wagyu beef patty, black truffle mayo, caramelized onions, aged cheddar, and arugula on a toasted brioche bun.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Premium", "Gourmet", "Best Seller"].map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">
                            {tag}
                        </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-orange-600">Rs. 50</div>
                        <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-4 rounded-lg flex items-center cursor-pointer"
                             onClick={() => handleOrderNow()}
                        >
                        Order Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

            {/* Featured Restaurants Section */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-xl -z-10"></div>
                
                <div className="flex items-center justify-between mb-6">
                    <h2 className="flex items-center text-2xl font-bold text-gray-800">
                        <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                        Top restaurants in your area
                    </h2>
                    <button className="flex items-center px-4 py-2 text-white rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
                        View all <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {featuredRestaurants.map((restaurant) => (
                        <div 
                            key={restaurant.id} 
                            className="overflow-hidden transition duration-300 transform bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 group"
                            onClick={() => handleRestaurantClick(restaurant.id)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                <img 
                                    src={restaurant.image} 
                                    alt={restaurant.name} 
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                                    loading="lazy"
                                    width="400"
                                    height="200"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white rounded-bl-lg bg-gradient-to-l from-orange-600 to-orange-500 z-20">
                                    <Clock className="inline-block w-3 h-3 mr-1" />
                                    {restaurant.deliveryTime}
                                </div>
                                <div className="absolute left-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <span className="px-2 py-1 text-xs font-medium text-white bg-orange-600 rounded-full">
                                        Order Now
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="mb-1 text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{restaurant.name}</h3>
                                <p className="mb-3 text-sm text-gray-500">{restaurant.cuisine}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                                            <span>{restaurant.rating}</span>
                                            <Star className="ml-0.5 h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                                        <span>2.3 km</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Food Recommendation Carousel - "Today's Cravings" */}
        {/* <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-white rounded-xl -z-10"></div>
                
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Today's Cravings
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full animate-pulse">
                    Hot & Fresh
                    </span>
                </h2>
                
                <div className="overflow-hidden">
                    <div className="flex space-x-6 pb-4 overflow-x-auto hide-scrollbar">
                    {[
                        { id: 1, name: "Double Cheese Pizza", price: "$12.99", discount: "15% OFF", image: "/double-cheese.jpg", calories: "680 cal" },
                        { id: 2, name: "Crispy Chicken Burger", price: "$8.99", discount: "Buy 1 Get 1", image: "/crispy-burger.jpg", calories: "520 cal" },
                        { id: 3, name: "Spicy Ramen Bowl", price: "$11.50", discount: "", image: "/ramen.jpg", calories: "450 cal" },
                        { id: 4, name: "Chocolate Waffle", price: "$6.99", discount: "20% OFF", image: "/waffle.jpg", calories: "390 cal" },
                        { id: 5, name: "Fresh Greek Salad", price: "$7.50", discount: "", image: "/greek-salad.jpg", calories: "230 cal" },
                    ].map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden group relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-40 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                            }}
                            />
                            {item.discount && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-20">
                                {item.discount}
                            </div>
                            )}
                            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded-full transform opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-orange-600">
                            Add to Cart
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                            <span className="text-xs text-gray-500">{item.calories}</span>
                            </div>
                            <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold text-orange-600">{item.price}</p>
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-200 transition-colors">
                                <span className="text-orange-600 font-bold">+</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
        </div> */}

            {/* App Download Section */}
            <div className="relative overflow-hidden">
                <div className="absolute w-40 h-40 bg-orange-300 rounded-full opacity-20 -right-10 -bottom-10"></div>
                <div className="absolute w-20 h-20 bg-orange-400 rounded-full opacity-10 left-10 top-10"></div>
                
                <div className="relative z-10 grid gap-8 p-8 transition-shadow duration-300 bg-white shadow-xl md:grid-cols-2 rounded-xl hover:shadow-2xl border-t-4 border-orange-500">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 opacity-10 blur-2xl rounded-full"></div>
                            <img 
                                src="/app.png" 
                                alt="Hungrr App" 
                                className="relative w-full mx-auto drop-shadow-xl" 
                                loading="lazy" 
                                width="500"
                                height="600"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <div className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-orange-800 bg-orange-100 rounded-full w-max">
                            DOWNLOAD NOW
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800">Order takeaway even faster!</h2>
                        <p className="text-lg text-gray-600">
                            Download the Hungrr App for faster ordering and exclusive app-only offers!
                        </p>
                        <ul className="mt-2 space-y-3">
                            <li className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-orange-500 rounded-full shadow-sm">1</span>
                                <span className="font-medium">Exclusive app-only discounts up to 50% off</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-orange-500 rounded-full shadow-sm">2</span>
                                <span className="font-medium">Faster checkout with saved payment methods</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-orange-500 rounded-full shadow-sm">3</span>
                                <span className="font-medium">Real-time GPS order tracking to your door</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <img 
                                src="/app-download.png" 
                                alt="Get it on Google Play" 
                                className="h-12 transition cursor-pointer hover:opacity-90 hover:scale-105 drop-shadow-md" 
                                loading="lazy"
                                width="240"
                                height="48"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="2" y="6" width="20" height="12" rx="2" ry="2"%3E%3C/rect%3E%3Cline x1="6" y1="12" x2="18" y2="12"%3E%3C/line%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Testimonials Section */}
            <div className="p-8 mb-8 bg-white rounded-xl shadow-lg">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    What our customers say
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex text-orange-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">"The delivery was incredibly fast and the food was still hot when it arrived. Will definitely order again!"</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-200 rounded-full mr-3 flex items-center justify-center text-orange-600 font-bold">S</div>
                            <div>
                                <p className="font-medium">Sarah T.</p>
                                <p className="text-xs text-gray-500">Ordered from Pizza Heaven</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex text-orange-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">"The app is so easy to use! I love how I can track my order in real-time and the discounts are amazing."</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-200 rounded-full mr-3 flex items-center justify-center text-orange-600 font-bold">M</div>
                            <div>
                                <p className="font-medium">Michael K.</p>
                                <p className="text-xs text-gray-500">Regular customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex text-orange-500 mb-2">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            <Star className="w-4 h-4" />
                        </div>
                        <p className="text-gray-600 mb-4">"Great selection of restaurants in my area. The customer service was excellent when I needed to modify my order."</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-200 rounded-full mr-3 flex items-center justify-center text-orange-600 font-bold">A</div>
                            <div>
                                <p className="font-medium">Aisha R.</p>
                                <p className="text-xs text-gray-500">Ordered from Taco Express</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Food Preference Quiz */}
        <FoodPreferenceQuiz />
            
        </div>
    );
};

export default HomePage;