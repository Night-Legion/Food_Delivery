import React, { useState, useCallback } from 'react';
import { Clock, Star, MapPin, Search, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Canteen = () => {
    const navigate = useNavigate();
    const [activeHostel, setActiveHostel] = useState('A');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const hostels = ['B', 'G']
    
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'breakfast', name: 'Breakfast' },
        { id: 'lunch', name: 'Lunch' },
        { id: 'dinner', name: 'Dinner' },
        { id: 'snacks', name: 'Snacks' },
        { id: 'beverages', name: 'Beverages' }
    ];

    const canteenItems = [
        { 
            id: 1, 
            name: "Veg Sandwich", 
            price: 40, 
            category: "Breakfast", 
            rating: 4.5, 
            prepTime: "10-15 min", 
            image: "/veg-sandwich.webp",
            veg: true
        },
        { 
            id: 2, 
            name: "Masala Dosa", 
            price: 60, 
            category: "Breakfast", 
            rating: 4.7, 
            prepTime: "15-20 min", 
            image: "/masala-dosa.webp",
            veg: true
        },
        { 
            id: 3, 
            name: "Chicken Biryani", 
            price: 120, 
            category: "Lunch", 
            rating: 4.8, 
            prepTime: "20-25 min", 
            image: "/chicken-biryani.webp",
            veg: false
        },
        { 
            id: 4, 
            name: "Veg Pulao", 
            price: 80, 
            category: "Lunch", 
            rating: 4.2, 
            prepTime: "15-20 min", 
            image: "/veg-pulao.webp",
            veg: true
        },
        { 
            id: 5, 
            name: "Paneer Roll", 
            price: 70, 
            category: "Snacks", 
            rating: 4.0, 
            prepTime: "10-15 min", 
            image: "/paneer-roll.webp",
            veg: true
        },
        { 
            id: 6, 
            name: "Cold Coffee", 
            price: 50, 
            category: "Beverages", 
            rating: 4.6, 
            prepTime: "5-10 min", 
            image: "/coffee.jpg",
            veg: true
        },
        { 
            id: 7, 
            name: "Butter Chicken", 
            price: 140, 
            category: "Dinner", 
            rating: 4.9, 
            prepTime: "25-30 min", 
            image: "/butter-chicken.webp",
            veg: false
        },
        { 
            id: 8, 
            name: "Samosa", 
            price: 20, 
            category: "Snacks", 
            rating: 4.4, 
            prepTime: "5-10 min", 
            image: "/samosa.jpg",
            veg: true
        }
    ];

    const filteredItems = selectedCategory === 'All' 
        ? canteenItems 
        : canteenItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    const orderTimeSlots = [
        { id: 1, time: '7:00 AM - 9:00 AM', label: 'Breakfast' },
        { id: 2, time: '12:00 PM - 2:00 PM', label: 'Lunch' },
        { id: 3, time: '4:00 PM - 6:00 PM', label: 'Snacks' },
        { id: 4, time: '7:00 PM - 9:00 PM', label: 'Dinner' }
    ];

    const handleItemClick = useCallback((itemId: number) => {
        navigate(`/canteen/item/${itemId}`);
    }, [navigate]);

    const currentTimeStats = {
        averageWait: '15 mins',
        activeOrders: 24,
        peakHours: false
    };

    const topSellingItems = [
        "Masala Dosa",
        "Chicken Biryani",
        "Cold Coffee",
        "Samosa"
    ];

    return (
        <div className="flex flex-col gap-8 px-4 pb-12 md:px-6">
            {/* Canteen Hero Section */}
            <div className="relative z-10 flex flex-col gap-5 px-6 py-8 -mt-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold tracking-tight text-center text-orange-600 md:text-4xl">
                    Campus Canteen Express
                </h1>
                <p className="mb-2 text-lg text-center text-gray-600">
                    Order from your hostel, skip the queue!
                </p>
                
                <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-4 mb-2 md:flex-row">
                    <div className="relative flex items-center justify-center w-full mb-3 md:mb-0 md:mr-4 md:flex-1">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="w-5 h-5 text-gray-400" />
                            </span>
                            <input 
                                type="text" 
                                placeholder="Search for food items..." 
                                className="w-full py-3 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <button className="flex items-center px-5 py-3 font-medium text-orange-600 transition-colors bg-orange-100 rounded-full hover:bg-orange-200">
                        <Filter className="w-5 h-5 mr-2" />
                        Filters
                    </button>
                </div>
                
                {/* Hostel selector */}
                <div className="flex flex-col items-center mt-2 mb-0">
                    <p className="mb-3 text-sm font-medium text-gray-600">Select your hostel for delivery:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {hostels.map((hostel) => (
                            <button
                                key={hostel}
                                onClick={() => setActiveHostel(hostel)}
                                className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                                    activeHostel === hostel 
                                        ? 'bg-orange-500 text-white shadow-md' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {hostel}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick stats and info */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="p-5 bg-orange-50 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Current Wait Time</h3>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">{currentTimeStats.averageWait}</p>
                    <p className="text-sm text-gray-600">
                        {currentTimeStats.peakHours 
                            ? "Peak hours - expect longer waits" 
                            : "Normal service hours - quick delivery"}
                    </p>
                </div>

                <div className="p-5 bg-orange-50 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Delivering to</h3>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">Hostel {activeHostel}</p>
                    <p className="text-sm text-gray-600">Free delivery on all orders</p>
                </div>

                <div className="p-5 bg-orange-50 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Top Sellers Today</h3>
                    </div>
                    <ul className="text-sm text-gray-600">
                        {topSellingItems.map((item, index) => (
                            <li key={index} className="flex items-center mb-1">
                                <span className="w-1 h-1 mr-2 bg-orange-500 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Order time slots */}
            <div className="mb-6">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Meal Timings
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {orderTimeSlots.map((slot) => (
                        <div 
                            key={slot.id} 
                            className="flex flex-col p-5 transition-all bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-orange-200"
                        >
                            <span className="mb-2 text-sm font-medium text-orange-500">{slot.label}</span>
                            <span className="text-lg font-bold text-gray-800">{slot.time}</span>
                            <span className="mt-2 text-xs text-gray-500">Pre-order available 2 hours before</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Food Categories */}
            <div className="mb-6">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Categories
                </h2>
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button 
                            key={category.id} 
                            onClick={() => setSelectedCategory(category.name)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category.name 
                                    ? 'bg-orange-500 text-white shadow' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Items Grid */}
            <div className="mb-8">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Menu Items
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {filteredItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow cursor-pointer hover:shadow-lg hover:translate-y-1"
                            onClick={() => handleItemClick(item.id)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
                                    loading="lazy"
                                    width="400"
                                    height="200"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white rounded-bl-lg bg-gradient-to-l from-orange-600 to-orange-500">
                                    {item.prepTime}
                                </div>
                                <div className="absolute top-0 left-0 p-2">
                                    <div className={`w-5 h-5 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`}>
                                        <div className="w-3 h-3 m-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="mb-1 text-lg font-bold text-gray-800">{item.name}</h3>
                                <p className="mb-3 text-sm text-gray-500">{item.category}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                                            <span>{item.rating}</span>
                                            <Star className="ml-0.5 h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold text-orange-600">
                                        ₹{item.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Special Instructions for Hostel Delivery */}
            <div className="p-6 mb-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Special Instructions for Hostel Delivery</h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full">1</span>
                        <p className="text-gray-700">Orders are delivered to the hostel reception area unless specified otherwise</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full">2</span>
                        <p className="text-gray-700">Pre-order your meals to avoid wait times during peak hours</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full">3</span>
                        <p className="text-gray-700">Use your student ID at checkout for exclusive discounts</p>
                    </li>
                </ul>
            </div>

            {/* Schedule Advanced Orders */}
            <div className="p-6 mb-8 bg-white rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="mb-2 text-xl font-bold text-gray-800">Schedule Advanced Orders</h3>
                        <p className="text-gray-600">Plan ahead and schedule your meals for the entire week!</p>
                    </div>
                    <button className="flex items-center px-6 py-3 font-bold text-white transition-all bg-orange-500 rounded-full hover:bg-orange-600">
                        Schedule Now <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Canteen;