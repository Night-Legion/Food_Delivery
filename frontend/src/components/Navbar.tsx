import { useState } from 'react';
import search_icon from "../assets/frontend_assets/search_icon.png";
import basket_icon from "../assets/frontend_assets/basket_icon.png";
import new_logo from "../assets/frontend_assets/new_logo.png";
import { Menu, User, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState("menu");
    
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center cursor-pointer">
                            <img src={new_logo} alt='Hungrr logo' className="h-12 w-auto" />
                        </div>
                        
                    </div>
                    

                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#" 
                            onClick={() => setMenu("home")} 
                            className={`font-medium text-gray-700 hover:text-orange-500 transition-colors ${
                                menu === "home" ? "text-orange-500 border-b-2 border-orange-500 pb-1" : ""
                            }`}
                        >
                            Home
                        </a>
                        <a 
                            href="#"  
                            onClick={() => setMenu("menu")} 
                            className={`font-medium text-gray-700 hover:text-orange-500 transition-colors ${
                                menu === "menu" ? "text-orange-500 border-b-2 border-orange-500 pb-1" : ""
                            }`}
                        >
                            Menu
                        </a>
                        <a 
                            href="#" 
                            onClick={() => setMenu("contact-us")} 
                            className={`font-medium text-gray-700 hover:text-orange-500 transition-colors ${
                                menu === "contact-us" ? "text-orange-500 border-b-2 border-orange-500 pb-1" : ""
                            }`}
                        >
                            Contact Us
                        </a>
                    </div>
                    

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search for food..." 
                                className="border border-gray-300 rounded-full py-2 px-4 pr-10 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-64 text-sm"
                            />
                            <button className="absolute right-3 top-2.5 transform -translate-y-1/2">
                                <img src={search_icon} alt="Search" className="w-5 h-5 opacity-70" />
                            </button>
                        </div>
                        
                        <button className="relative group">
                            <div className="relative p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                                <img src={basket_icon} alt="Cart" className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                            </div>
                            <div className="hidden group-hover:block absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md py-3 px-4 text-sm whitespace-nowrap w-64 z-10">
                                <p className="text-center text-gray-500">Your cart is empty</p>
                                <div className="mt-2 pt-2 border-t">
                                    <p className="font-semibold text-gray-700">Start adding items to your cart</p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => console.log()}
                            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                        >
                            <User size={16} />
                            Sign In
                        </button>
                    </div>
                    

                    <div className="md:hidden flex items-center space-x-3">
                        <button className="relative p-2 bg-orange-50 rounded-full">
                            <img src={basket_icon} alt="Cart" className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
                        </button>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none p-1"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
                

                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            <a 
                                href="#" 
                                onClick={() => {
                                    setMenu("home");
                                    setIsMenuOpen(false);
                                }} 
                                className={`block px-4 py-2 rounded-md ${
                                    menu === "home" ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                }`}
                            >
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => {
                                    setMenu("menu");
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-4 py-2 rounded-md ${
                                    menu === "menu" ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                }`}
                            >
                                Menu
                            </a>
                            <a 
                                href="#" 
                                onClick={() => {
                                    setMenu("contact-us");
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-4 py-2 rounded-md ${
                                    menu === "contact-us" ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                }`}
                            >
                                Contact Us
                            </a>
                            <div className="relative px-4 py-2">
                                <input 
                                    type="text" 
                                    placeholder="Search for food..." 
                                    className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                                />
                                <button className="absolute right-7 top-1/2 transform -translate-y-1/2">
                                    <img src={search_icon} alt="Search" className="w-5 h-5 opacity-70" />
                                </button>
                            </div>
                            <button
                                onClick={() => console.log()}
                                className="mx-4 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                            >
                                <User size={16} />
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;