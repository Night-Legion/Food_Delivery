import { useState } from 'react';
import { Filter, ChevronRight, Star, Clock } from 'lucide-react';

const Menu = () => {
    const [selectedCuisine, setSelectedCuisine] = useState<string>('All');

    const cuisines = [
        "All", "Indian", "Italian", "Chinese", "Mexican", "Thai", "Japanese", "Desserts", "Fast Food", "Healthy"
    ];

    const sortOptions = [
        { id: 'popular', name: 'Most Popular' },
        { id: 'rating', name: 'Highest Rated' },
        { id: 'delivery', name: 'Fastest Delivery' },
        { id: 'price-low', name: 'Price: Low to High' },
        { id: 'price-high', name: 'Price: High to Low' }
    ];

    const restaurants = [
        { 
            id: 1, 
            name: "Spice Garden", 
            cuisine: "Indian", 
            rating: 4.5, 
            deliveryTime: "25-35 min", 
            priceRange: "₹100 - ₹10000", 
            image: "/res1.jpg",
            featured: true,
            discount: "30% OFF up to $10"
        },
        { 
            id: 2, 
            name: "Pizza Paradise", 
            cuisine: "Italian", 
            rating: 4.2, 
            deliveryTime: "30-40 min", 
            priceRange: "₹120 - ₹1000", 
            image: "/res2.jpg",
            featured: false,
            discount: null
        },
        { 
            id: 3, 
            name: "Wok & Roll", 
            cuisine: "Chinese", 
            rating: 4.0, 
            deliveryTime: "35-45 min", 
            priceRange: "₹20 - ₹800", 
            image: "/china.jpg",
            featured: true,
            discount: "Buy 1 Get 1 Free"
        },
        { 
            id: 4, 
            name: "Taco Fiesta", 
            cuisine: "Mexican", 
            rating: 4.3, 
            deliveryTime: "30-40 min", 
            priceRange: "₹40 - ₹500", 
            image: "/res4.jpg",
            featured: false,
            discount: null
        },
        { 
            id: 5, 
            name: "Bangkok Bites", 
            cuisine: "Thai", 
            rating: 4.6, 
            deliveryTime: "40-50 min", 
            priceRange: "₹70 - ₹900", 
            image: "/res5.jpg",
            featured: true,
            discount: "20% OFF on orders above $30"
        },
        { 
            id: 6, 
            name: "Sushi Heaven", 
            cuisine: "Japanese", 
            rating: 4.7, 
            deliveryTime: "45-55 min", 
            priceRange: "₹90 - ₹2000", 
            image: "/res6.jpg",
            featured: false,
            discount: null
        },
        { 
            id: 7, 
            name: "Sweet Treats", 
            cuisine: "Desserts", 
            rating: 4.4, 
            deliveryTime: "20-30 min", 
            priceRange: "₹50 - ₹300", 
            image: "/res7.jpg",
            featured: true,
            discount: "Free Delivery on orders above $15"
        },
        { 
            id: 8, 
            name: "Burger Bliss", 
            cuisine: "Fast Food", 
            rating: 4.1, 
            deliveryTime: "15-25 min", 
            priceRange: "₹65 - ₹400", 
            image: "/res8.jpg",
            featured: false,
            discount: null
        },
        { 
            id: 9, 
            name: "Green Bowl", 
            cuisine: "Healthy", 
            rating: 4.3, 
            deliveryTime: "25-35 min", 
            priceRange: "₹15 - ₹900", 
            image: "/res9.jpg",
            featured: true,
            discount: "15% OFF on first order"
        }
    ];

    const filteredRestaurants = selectedCuisine === 'All' 
        ? restaurants 
        : restaurants.filter(restaurant => restaurant.cuisine === selectedCuisine);

    return (
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Restaurants</h1>
                    <div className="ml-auto flex items-center">
                        <p className="text-gray-500 mr-2">Sort by:</p>
                        <select className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                            {sortOptions.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md h-fit">
                        <div className="flex items-center mb-4">
                            <Filter className="w-5 h-5 text-orange-500 mr-2" />
                            <h2 className="font-bold text-lg text-gray-800">Filters</h2>
                        </div>
                        
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3 text-gray-700">Cuisine</h3>
                            <div className="space-y-2">
                                {cuisines.map(cuisine => (
                                    <div 
                                        key={cuisine} 
                                        onClick={() => setSelectedCuisine(cuisine)}
                                        className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
                                            selectedCuisine === cuisine 
                                            ? "bg-orange-100 text-orange-600" 
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        {cuisine}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
                            <div className="space-y-2">
                                <div className="px-3 py-2 rounded-md cursor-pointer text-gray-600 hover:bg-gray-100">$</div>
                                <div className="px-3 py-2 rounded-md cursor-pointer text-gray-600 hover:bg-gray-100">$$</div>
                                <div className="px-3 py-2 rounded-md cursor-pointer text-gray-600 hover:bg-gray-100">$$$</div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-700">Offers</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id="discount" 
                                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
                                    />
                                    <label htmlFor="discount" className="ml-2 text-gray-600">Discounts Available</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id="free-delivery" 
                                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
                                    />
                                    <label htmlFor="free-delivery" className="ml-2 text-gray-600">Free Delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Restaurant Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredRestaurants.map(restaurant => (
                                <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative">
                                        <img 
                                            src={restaurant.image} 
                                            alt={restaurant.name} 
                                            className="w-full h-48 object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                            }}
                                        />
                                        {restaurant.featured && (
                                            <div className="absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-xs font-bold">
                                                Featured
                                            </div>
                                        )}
                                        {restaurant.discount && (
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                                <span className="text-white text-sm font-medium">{restaurant.discount}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-gray-800">{restaurant.name}</h3>
                                            <span className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                                                {restaurant.rating} <Star className="ml-0.5 h-3 w-3 fill-current" />
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-3">{restaurant.cuisine} • {restaurant.priceRange}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {restaurant.deliveryTime}
                                            </div>
                                            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center">
                                                View Menu <ChevronRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {filteredRestaurants.length === 0 && (
                            <div className="bg-orange-50 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">No restaurants found</h3>
                                <p className="text-gray-600">Try changing your filters or search for something else.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default Menu;