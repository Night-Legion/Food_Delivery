import { useState } from 'react';
import { Filter, ChevronRight, Star, Clock } from 'lucide-react';
import { useSearchRestaurants } from "@/api/RestaurantApi";
import { Link } from 'react-router-dom';

interface MenuItem {
  _id: string;
  name: string;
  price: number;
}

interface Restaurant {
  _id: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
}

interface SearchResults {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
}

const Menu = () => {
    const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortOption, setSortOption] = useState<string>('bestMatch');

    // Convert selected cuisine to array format expected by the API
    const selectedCuisines = selectedCuisine === 'All' ? [] : [selectedCuisine];

    // Create search state similar to SearchPage
    const searchState = {
        searchQuery: "",
        page: currentPage,
        selectedCuisines: selectedCuisines,
        sortOption: sortOption
    };

    // Use the same API hook that SearchPage uses
    const { results, isLoading } = useSearchRestaurants(searchState, "kanpur") as { 
        results: SearchResults | undefined;
        isLoading: boolean;
    };

    const cuisines = [
        "All", "Indian", "Italian", "Chinese", "Mexican", "Thai", "Japanese", "Desserts", "Fast Food", "Healthy"
    ];

    const sortOptions = [
        { id: 'bestMatch', name: 'Best Match' },
        { id: 'rating', name: 'Highest Rated' },
        { id: 'deliveryTime', name: 'Fastest Delivery' },
        { id: 'priceLow', name: 'Price: Low to High' },
        { id: 'priceHigh', name: 'Price: High to Low' }
    ];

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
        setCurrentPage(1); // Reset to first page on sort change
    };

    // Calculate price range from menu items
    const getPriceRange = (menuItems: MenuItem[]) => {
        if (!menuItems || menuItems.length === 0) return "₹0";
        
        const prices = menuItems.map(item => item.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        
        // Format prices to display in rupees (assuming price is in paise)
        const formattedMin = (minPrice / 100).toFixed(0);
        const formattedMax = (maxPrice / 100).toFixed(0);
        
        return `₹${formattedMin} - ₹${formattedMax}`;
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-64">
            <span className="text-lg">Loading restaurants...</span>
        </div>;
    }

    if (!results?.data) {
        return <div className="flex justify-center items-center h-64">
            <span className="text-lg">No restaurants found</span>
        </div>;
    }

    const restaurants = results.data;

    const handleNavigateMenu = () =>{

    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Restaurants</h1>
                <div className="ml-auto flex items-center">
                    <p className="text-gray-500 mr-2">Sort by:</p>
                    <select 
                        className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
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
                                    onClick={() => {
                                        setSelectedCuisine(cuisine);
                                        setCurrentPage(1); // Reset to first page when changing cuisine
                                    }}
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
                        {restaurants.map(restaurant => (
                                <Link
                                to={`/detail/${restaurant._id}`}
                                className=""
                              >
                            <div key={restaurant._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative">
                                    <img 
                                        src={restaurant.imageUrl} 
                                        alt={restaurant.restaurantName} 
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                        }}
                                    />
                                    {/* You can add featured tag if needed based on some criteria */}
                                    {restaurant.deliveryPrice === 0 && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                            <span className="text-white text-sm font-medium">Free Delivery</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-800">{restaurant.restaurantName}</h3>
                                        {/* You can add rating if available */}
                                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs font-bold rounded flex items-center">
                                            {restaurant.cuisines?.length || 0} cuisines
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {restaurant.cuisines?.[0] || 'Various'} • {getPriceRange(restaurant.menuItems)}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {restaurant.estimatedDeliveryTime} min
                                        </div>
                                        <button className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center"
                                            onClick={() => handleNavigateMenu()}
                                        >
                                            View Menu <ChevronRight className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                    
                    {restaurants.length === 0 && (
                        <div className="bg-orange-50 p-6 rounded-lg text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No restaurants found</h3>
                            <p className="text-gray-600">Try changing your filters or search for something else.</p>
                        </div>
                    )}
                    
                    {/* Pagination */}
                    {results.pagination && results.pagination.pages > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav className="flex items-center gap-2">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-3 py-1 rounded border ${
                                        currentPage === 1 
                                        ? 'text-gray-400 border-gray-200 cursor-not-allowed' 
                                        : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    Previous
                                </button>
                                
                                {[...Array(results.pagination.pages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-8 h-8 rounded-full ${
                                            currentPage === i + 1 
                                            ? 'bg-orange-500 text-white' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, results.pagination.pages))}
                                    disabled={currentPage === results.pagination.pages}
                                    className={`px-3 py-1 rounded border ${
                                        currentPage === results.pagination.pages 
                                        ? 'text-gray-400 border-gray-200 cursor-not-allowed' 
                                        : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;