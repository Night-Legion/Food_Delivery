// @ts-nocheck
import { useState, useEffect } from 'react';
import { Clock, Star, MapPin, Search, Filter, ArrowRight, Heart, ShoppingBag, Bell, Info, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Canteen = () => {

    const [activeHostel, setActiveHostel] = useState('A');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [showPromo, setShowPromo] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();
    
    // Added more hostels for completeness
    const hostels = ['B','G'];
    
    const categories = [
        { id: 'all', name: 'All', icon: '🍽️' },
        { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
        { id: 'lunch', name: 'Lunch', icon: '🍱' },
        { id: 'dinner', name: 'Dinner', icon: '🍲' },
        { id: 'snacks', name: 'Snacks', icon: '🍟' },
        { id: 'beverages', name: 'Beverages', icon: '🥤' }
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
            veg: true,
            description: "Fresh vegetables between slices of whole grain bread with mint chutney",
            popular: true
        },
        { 
            id: 2, 
            name: "Masala Dosa", 
            price: 60, 
            category: "Breakfast", 
            rating: 4.7, 
            prepTime: "15-20 min", 
            image: "/masala-dosa.webp",
            veg: true,
            description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney",
            popular: true
        },
        { 
            id: 3, 
            name: "Chicken Biryani", 
            price: 120, 
            category: "Lunch", 
            rating: 4.8, 
            prepTime: "20-25 min", 
            image: "/chicken-biryani.webp",
            veg: false,
            description: "Aromatic basmati rice cooked with tender chicken and authentic spices",
            popular: true
        },
        { 
            id: 4, 
            name: "Veg Pulao", 
            price: 80, 
            category: "Lunch", 
            rating: 4.2, 
            prepTime: "15-20 min", 
            image: "/veg-pulao.webp",
            veg: true,
            description: "Fragrant rice cooked with mixed vegetables and mild spices"
        },
        { 
            id: 5, 
            name: "Paneer Roll", 
            price: 70, 
            category: "Snacks", 
            rating: 4.0, 
            prepTime: "10-15 min", 
            image: "/paneer-roll.webp",
            veg: true,
            description: "Soft roti wrapped around spicy paneer and fresh vegetables"
        },
        { 
            id: 6, 
            name: "Cold Coffee", 
            price: 50, 
            category: "Beverages", 
            rating: 4.6, 
            prepTime: "5-10 min", 
            image: "/coffee.jpg",
            veg: true,
            description: "Creamy cold coffee topped with vanilla ice cream",
            popular: true
        },
        { 
            id: 7, 
            name: "Butter Chicken", 
            price: 140, 
            category: "Dinner", 
            rating: 4.9, 
            prepTime: "25-30 min", 
            image: "/butter-chicken.webp",
            veg: false,
            description: "Tender chicken pieces in rich, creamy tomato gravy"
        },
        { 
            id: 8, 
            name: "Samosa", 
            price: 20, 
            category: "Snacks", 
            rating: 4.4, 
            prepTime: "5-10 min", 
            image: "/samosa.jpg",
            veg: true,
            description: "Crispy pastry filled with spiced potatoes and peas",
            popular: true
        }
    ];

    // Added search functionality
    const filteredItems = canteenItems
        .filter(item => 
            (selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase()) &&
            (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    const orderTimeSlots = [
        { id: 1, time: '7:00 AM - 9:00 AM', label: 'Breakfast', icon: '🍳' },
        { id: 2, time: '12:00 PM - 2:00 PM', label: 'Lunch', icon: '🍱' },
        { id: 3, time: '4:00 PM - 6:00 PM', label: 'Snacks', icon: '🍿' },
        { id: 4, time: '7:00 PM - 9:00 PM', label: 'Dinner', icon: '🍽️' }
    ];

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

    const handleOrderNow = async () => {
        const restaurantId = "67d46e789a73a0b9bb917f36";
        // const specialMenuItem = [
        //     {
        //         "_id": "67d46e789a73a0b9bb917f36",
        //         "name": "Veg Sandwich",
        //         "price": 40,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f37",
        //         "name": "Masala Dosa",
        //         "price": 60,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f38",
        //         "name": "Chicken Biryani",
        //         "price": 120,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f39",
        //         "name": "Veg Pulao",
        //         "price": 80,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f3A",
        //         "name": "Paneer Roll",
        //         "price": 70,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f3B",
        //         "name": "Cold Coffee",
        //         "price": 50,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f3C",
        //         "name": "Butter Chicken",
        //         "price": 140,
        //         "quantity": 1
        //     },
        //     {
        //         "_id": "67d46e789a73a0b9bb917f3D",
        //         "name": "Samosa",
        //         "price": 20,
        //         "quantity": 1
        //     }
        // ]        
        //     sessionStorage.setItem(
        //     `cartItems-${restaurantId}`,
        //     JSON.stringify([specialMenuItem])
        //     );
            navigate(`/detail/${restaurantId}`);
        };


    // Simulating cart count update
    useEffect(() => {
        const timer = setTimeout(() => {
            setCartCount(Math.floor(Math.random() * 3));
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Special offers
    const specialOffers = [
        { id: 1, title: "Combo Deal", description: "Any 2 breakfast items for ₹90", code: "MORNING20" },
        { id: 2, title: "Student Special", description: "15% off on orders above ₹150", code: "STUDENT15" }
    ];

    return (
        <div className="flex flex-col gap-8 px-4 pb-12 md:px-6 bg-gradient-to-b from-orange-50 to-white">
            {/* Sticky Header with cart */}
            <div className="sticky top-0 z-50 flex items-center justify-between w-full p-4 bg-white shadow-md">
                <div className="flex items-center">
                    <span className="text-xl font-bold text-orange-600">Hungrr</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-600 transition-colors rounded-full hover:bg-orange-100">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 transition-colors rounded-full hover:bg-orange-100">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="relative p-2 text-gray-600 transition-colors rounded-full hover:bg-orange-100">
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-orange-500 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Promotional Banner */}
            {showPromo && (
                <div className="relative px-4 py-3 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">50% OFF your first order!</h3>
                            <p className="text-sm">Use code: FIRSTBITE</p>
                        </div>
                        <button 
                            className="p-1 text-white rounded-full hover:bg-orange-400"
                            onClick={() => setShowPromo(false)}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-20">
                        <Award className="w-24 h-24" />
                    </div>
                </div>
            )}

            {/* Canteen Hero Section */}
            <div className="relative z-10 flex flex-col gap-5 px-6 py-8 -mt-4 bg-white rounded-lg shadow-lg">
                <div className="overflow-hidden rounded-lg">
                    <img 
                        src='/canteen.jpg' 
                        alt='Campus Canteen'
                        className="object-cover w-full h-48 transition-transform duration-700 hover:scale-105"
                    />
                </div>
                
                <h1 className="text-3xl font-bold tracking-tight text-center text-orange-600 md:text-4xl">
                    Campus Canteen Express
                </h1>
                <p className="mb-2 text-lg text-center text-gray-600">
                    <span className="font-semibold">Order from your hostel, skip the queue!</span>
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
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
                                        ? 'bg-orange-500 text-white shadow-md scale-110' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {hostel}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Special Offers */}
            <div className="mb-6">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Today's Special Offers
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {specialOffers.map((offer) => (
                        <div 
                            key={offer.id} 
                            className="relative overflow-hidden p-5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg border border-orange-200 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-orange-600">{offer.title}</h3>
                            <p className="text-gray-700">{offer.description}</p>
                            <div className="flex items-center mt-2 p-2 bg-white rounded">
                                <span className="text-gray-500">Use code:</span>
                                <span className="ml-2 font-mono font-bold text-orange-600">{offer.code}</span>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <Award className="w-20 h-20 text-orange-600" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick stats and info */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-sm border border-orange-100">
                    <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Current Wait Time</h3>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{currentTimeStats.averageWait}</p>
                    <p className="text-sm text-gray-600">
                        {currentTimeStats.peakHours 
                            ? "Peak hours - expect longer waits" 
                            : "Normal service hours - quick delivery"}
                    </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-sm border border-orange-100">
                    <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Delivering to</h3>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">Hostel {activeHostel}</p>
                    <p className="text-sm text-gray-600">Free delivery on all orders</p>
                </div>

                <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-sm border border-orange-100">
                    <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 mr-2 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Top Sellers Today</h3>
                    </div>
                    <ul className="text-sm text-gray-600">
                        {topSellingItems.map((item, index) => (
                            <li key={index} className="flex items-center mb-1">
                                <span className="w-2 h-2 mr-2 bg-orange-500 rounded-full"></span>
                                <span className="font-medium">{item}</span>
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
                            className="group flex flex-col p-5 transition-all bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50"
                        >
                            <div className="flex items-center mb-2">
                                <span className="text-2xl mr-2">{slot.icon}</span>
                                <span className="text-sm font-medium text-orange-500">{slot.label}</span>
                            </div>
                            <span className="text-lg font-bold text-gray-800 group-hover:text-orange-600">{slot.time}</span>
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
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                                selectedCategory === category.name 
                                    ? 'bg-orange-500 text-white shadow-md' 
                                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200'
                            }`}
                        >
                            <span className="mr-1">{category.icon}</span> {category.name}
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
                {filteredItems.length === 0 ? (
                    <div className="p-8 text-center bg-white rounded-lg shadow">
                        <Info className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                        <h3 className="mb-2 text-xl font-bold text-gray-800">No items found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {filteredItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="group overflow-hidden transition duration-300 transform bg-white rounded-lg shadow cursor-pointer hover:shadow-lg hover:-translate-y-1"
                                onClick={handleOrderNow}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
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
                                    {item.popular && (
                                        <div className="absolute bottom-0 left-0 right-0 py-1 text-xs font-bold text-center text-white bg-gradient-to-r from-orange-600 to-orange-500">
                                            CAMPUS FAVORITE
                                        </div>
                                    )}
                                    <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Heart className="w-4 h-4 text-orange-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1 text-lg font-bold text-gray-800 group-hover:text-orange-600">{item.name}</h3>
                                    <p className="mb-2 text-sm text-gray-500">{item.category}</p>
                                    <p className="mb-3 text-xs text-gray-600 line-clamp-2">{item.description}</p>
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
                                <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Special Instructions for Hostel Delivery */}
            <div className="p-6 mb-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Special Instructions for Hostel Delivery</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full shadow-sm">1</div>
                        <p className="text-gray-700">Orders are delivered to the hostel reception area unless specified otherwise</p>
                    </li>
                    <li className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full shadow-sm">2</div>
                        <p className="text-gray-700">Pre-order your meals to avoid wait times during peak hours</p>
                    </li>
                    <li className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 mt-0.5 mr-3 text-xs font-bold text-white bg-orange-500 rounded-full shadow-sm">3</div>
                        <p className="text-gray-700">Use your student ID at checkout for exclusive discounts</p>
                    </li>
                </ul>
            </div>

            {/* Schedule Advanced Orders */}
            <div className="p-6 mb-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="mb-2 text-xl font-bold">Schedule Advanced Orders</h3>
                        <p className="text-orange-100">Plan ahead and schedule your meals for the entire week!</p>
                    </div>
                    <button className="flex items-center px-6 py-3 font-bold text-orange-600 transition-all bg-white rounded-full hover:bg-orange-50 hover:shadow-lg">
                        Schedule Now <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

            {/* Floating "Order Now" Button */}
            <div className="fixed bottom-4 right-4 z-40">
                <button className="flex items-center px-6 py-3 font-bold text-white transition-all bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 hover:shadow-xl">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Canteen;