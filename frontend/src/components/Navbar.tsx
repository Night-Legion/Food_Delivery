import { useState, useEffect } from 'react';
import basket_icon from "../assets/frontend_assets/basket_icon.png";
import { Menu, User, Search, X, House, ChefHat, Headphones, BadgeIndianRupee } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState("menu");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const items = [
        { name: "Home", link: "#home", icon: <House /> },
        { name: "Menu", link: "#menu", icon: <ChefHat /> },
        { name: "About", link: "#about", icon: <Headphones /> },
        { name: "Help", link: "#help", icon: <BadgeIndianRupee /> }
    ]
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">

                    <div className="flex items-center">
                        <div className="flex items-center cursor-pointer transition-transform hover:scale-105">
                            <img src="/hungrr-logo6.svg" alt='Hungrr logo' className="h-12" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-10">
                        {items.map((item) => (
                            <a 
                                key={item.name}
                                href={item.link} 
                                onClick={() => setMenu(item.name)} 
                                className={`flex gap-1 font-bold text-gray-700 hover:text-orange-500 transition-all relative ${
                                    menu === item.name ? "text-orange-500" : ""
                                }`}
                            >
                                {item.icon}
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace("-", " ")}
                                {menu === item.name && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                                )}
                            </a>
                        ))} 
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-5">
                        <div className="relative w-10 h-10 flex items-center justify-end">
                            <button 
                                type="button" 
                                onClick={() => setIsSearchActive(!isSearchActive)}
                                className="z-10 flex items-center p-2"
                            >
                                {isSearchActive ? 
                                    <X size={18} className="font-bold text-gray-500 hover:text-orange-500 transition-colors" /> : 
                                    <Search size={18} className="text-gray-500 hover:text-orange-500 transition-colors" />
                                }
                            </button>
                            <div className={`absolute right-0 transition-all duration-300 ${
                                isSearchActive ? 'opacity-100 w-64' : 'opacity-0 w-0 pointer-events-none'
                            }`}>
                                <input 
                                    type="text" 
                                    placeholder="Search for food..." 
                                    className="border border-gray-200 rounded-full py-2 pl-4 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-transparent text-sm w-full"
                                />
                            </div>
                        </div>
                        
                        <button className="relative group">
                            <div className="relative p-2 rounded-full hover:bg-orange-100 transition-colors">
                                <img src={basket_icon} alt="Cart" className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">0</span>
                            </div>
                            <div className="hidden overflow-visible break-normal group-hover:block absolute top-full right-0 mt-4 bg-white shadow-lg rounded-md py-3 px-4 text-sm w-64 z-10 border border-amber-400">
                                <p className="text-center mt-2 text-4xl font-extrabold text-gray-500">Cart is empty</p>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <p className="font-semibold text-gray-700 overflow-visible break-normal">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => console.log('Sign in clicked')}
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                        >
                            <User size={16} />
                            Sign In
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button 
                            onClick={() => setIsSearchActive(!isSearchActive)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none p-1"
                        >
                            <Search size={20} />
                        </button>
                        <button className="relative p-2 hover:bg-orange-100 rounded-full transition-colors">
                            <img src={basket_icon} alt="Cart" className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">0</span>
                        </button>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none p-1"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>

                {isSearchActive && (
                    <div className="md:hidden pt-3 pb-2 animate-fadeIn">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search for food..." 
                                className="w-full border border-gray-200 rounded-full py-2 px-4 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm"
                                autoFocus
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <X size={18} className="text-gray-500" onClick={() => setIsSearchActive(false)} />
                            </div>
                        </div>
                    </div>
                )}

                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-3 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            {items.map((item) => (
                                <a 
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => {
                                        setMenu(item.name);
                                        setIsMenuOpen(false);
                                    }} 
                                    className={`block px-4 py-2 rounded-md transition-colors ${
                                        menu === item.name ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                                    }`}
                                >
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace("-", " ")}
                                </a>
                            ))}
                            <button
                                onClick={() => console.log('Sign in clicked')}
                                className="mx-4 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-2 px-5 rounded-full shadow-sm text-sm"
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