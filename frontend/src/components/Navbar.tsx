/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import basket_icon from "../assets/frontend_assets/basket_icon.png";
import { Menu, User, Search, X, House, ChefHat, Headphones, BadgeIndianRupee, CircleUserRound } from "lucide-react";
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from './UsernameMenu';
import { Link, useNavigate } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    // SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";
import { SearchForm } from "@/components/SearchBar";
import LanguageSwitcher from './GoogleTranslate';

const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState("menu");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    const handleClick = (name: string, link: string) => {
        try {
            setMenu(name)
            navigate(`${link}`)
        } catch (err: any) {
            console.log(`Error redirecting  ${err}`)
        }
    }

    const items = [
        { name: "Home", link: "/home", icon: <House /> },
        { name: "Menu", link: "/menu", icon: <ChefHat /> },
        { name: "About", link: "/about", icon: <Headphones /> },
        { name: "Help", link: "/help", icon: <BadgeIndianRupee /> }
    ]

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        if (searchFormValues.searchQuery.trim()) {
            navigate({
                pathname: `/search/${searchFormValues.searchQuery}`,
            });
            setIsSearchActive(false);
        }
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        if (!isSearchActive) {
            setTimeout(() => {
                const searchInput = document.getElementById('navbar-search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        }
    };
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsSearchActive(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const searchContainer = document.getElementById('search-container');
            if (isSearchActive && searchContainer && !searchContainer.contains(event.target as Node)) {
                setIsSearchActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchActive]);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"
            }`} onKeyDown={handleKeyDown}>
            <div className="container px-4 py-3 mx-auto">
                <div className="flex items-center justify-between">

                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center transition-transform cursor-pointer hover:scale-105">
                            <img src="/hungrr-logo6.svg" onClick={() => navigate('/')} alt='Hungrr logo' className="h-12" />
                        </div>
                        <LanguageSwitcher />
                    </div>

                    {/* Desktop Navigation - Modified to shift left when search is active */}
                    <div className={`items-center hidden space-x-10 md:flex transition-all duration-300 ${isSearchActive ? "transform -translate-x-5" : ""
                        }`}>
                        {items.map((item) => (
                            <a 
                                key={item.name}
                                // href={item.link} 
                                onClick={() => handleClick(item.name, item.link)} 
                                className={`flex gap-1 cursor-pointer font-bold text-gray-700 hover:text-orange-500 transition-all relative ${menu === item.name ? "text-orange-500" : ""
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
                    
                    <div className="items-center hidden space-x-5 md:flex">
                        {/* Desktop Search - Updated to use a more integrated approach */}
                        <div id="search-container" className="relative flex items-center">
                            {!isSearchActive ? (
                                <button 
                                    type="button" 
                                    onClick={toggleSearch}
                                    className="z-10 flex items-center p-2 transition-colors rounded-full hover:bg-orange-100"
                                    aria-label="Open search"
                                >
                                    <Search size={18} className="text-gray-500 transition-colors hover:text-orange-500" />
                                </button>
                            ) : (
                                <div className="flex overflow-hidden bg-white border border-orange-200 rounded-full shadow-lg min-w-80">
                                    <Search size={18} className="my-auto ml-4 text-orange-500" />
                                    <form 
                                        className="flex items-center flex-1" 
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (searchQuery.trim()) {
                                                handleSearchSubmit({ searchQuery });
                                            }
                                        }}
                                    >
                                        <input 
                                            id="navbar-search-input"
                                            type="text" 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search for food by location..." 
                                            className="w-full px-3 py-3 text-sm bg-transparent focus:outline-none"
                                            autoFocus
                                        />
                                        <div className="flex items-center px-1">
                                            {searchQuery && (
                                                <button
                                                    type="button"
                                                    onClick={() => setSearchQuery("")}
                                                    className="p-1 mr-1 text-gray-400 hover:text-orange-500"
                                                >
                                                    <X size={16} />
                                                </button>
                                            )}
                                            <button
                                                type="submit"
                                                className="p-2 m-1 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                                            >
                                                <Search size={16} />
                                            </button>
                                        </div>
                                    </form>
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchActive(false)}
                                        className="px-3 text-gray-500 hover:text-orange-500"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={`flex items-center space-x-5 transition-all duration-300 ${isSearchActive ? "opacity-70" : ""
                            }`}>
                            {isAuthenticated ? (
                                <Link to="/order-status" className="font-bold hover:text-orange-500">
                                    Order Status
                                </Link>
                            ) : ""}
                            
                            <button className="relative group">
                                <div className="relative p-2 transition-colors rounded-full hover:bg-orange-100">
                                    <img src={basket_icon} alt="Cart" className="w-6 h-6" />
                                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 rounded-full shadow-sm -top-1 -right-1">0</span>
                                </div>
                                <div className="absolute right-0 z-10 hidden h-40 px-4 py-3 mt-4 overflow-visible text-sm break-normal bg-white border rounded-md shadow-lg group-hover:block top-full w-80 border-amber-400">
                                    <p className="mt-2 text-4xl font-extrabold text-center text-gray-500">Cart is empty</p>
                                    <div className="pt-2 mt-2 border-t border-gray-100">
                                        <p className="overflow-visible font-semibold text-gray-700 break-normal">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                                    </div>
                                </div>
                            </button>

                            <span className='flex items-center space-x-2'>
                                {isAuthenticated ? (<UsernameMenu />) : 
                                    <button
                                        onClick={async () => await loginWithRedirect()}
                                        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full shadow-sm bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 hover:shadow-md"
                                    >
                                        <User size={16} />
                                        Sign In
                                    </button>
                                }
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 md:hidden">
                        <button 
                            onClick={toggleSearch}
                            className="p-1 text-gray-700 hover:text-orange-500 focus:outline-none"
                            aria-label={isSearchActive ? "Close search" : "Open search"}
                        >
                            {isSearchActive ? 
                                <X size={20} className="text-orange-500" /> : 
                                <Search size={20} />
                            }
                        </button>
                        <button className="relative p-2 transition-colors rounded-full hover:bg-orange-100">
                            <img src={basket_icon} alt="Cart" className="w-5 h-5" />
                            <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 rounded-full shadow-sm -top-1 -right-1">0</span>
                        </button>
                        
                        {/* Mobile menu button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <button 
                                    className="p-1 text-gray-700 hover:text-orange-500 focus:outline-none"
                                    aria-label="Open menu"
                                >
                                    <Menu size={22} />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-xs">
                                {isAuthenticated ? (
                                    <div className="py-4">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex-shrink-0 p-2 bg-orange-100 rounded-full">
                                                <CircleUserRound className="w-10 h-10 text-orange-500" />
                                            </div>
                                            <div className="overflow-hidden">
                                                <h3 className="text-lg font-bold text-gray-800 truncate">{user?.name}</h3>
                                                <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                                            </div>
                                        </div>
                                        <Separator className="mb-6" />
                                    </div>
                                ) : (
                                    <>
                                        <SheetTitle className="pb-2 mt-4 ml-3">
                                            <span className="text-2xl font-bold text-orange-500">Welcome to Hungrr!</span>
                                        </SheetTitle>
                                        <Separator className="mb-6" />
                                    </>
                                )}
                                
                                <div className="flex flex-col space-y-6">
                                    {items.map((item) => (
                                        <a 
                                            key={item.name}
                                            // href={item.link}
                                            onClick={() => handleClick(item.name, item.link)} 
                                            className={`flex items-center gap-3 px-2 py-1 rounded-md transition-colors ${menu === item.name ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                                                }`}
                                        >
                                            {item.icon}
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace("-", " ")}
                                        </a>
                                    ))}
                                </div>
                                <Separator className="my-6" />
                                <div className="space-y-4">
                                    {isAuthenticated ? (
                                        <MobileNavLinks />
                                    ) : (
                                        <Button
                                            onClick={() => loginWithRedirect()}
                                            className="w-full font-bold bg-orange-500 hover:bg-orange-600"
                                        >
                                            <User size={16} className="mr-2" />
                                            Log In
                                        </Button>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchActive && (
                    <div className="pt-3 pb-2 md:hidden animate-fadeIn">
                        <div className="flex items-center overflow-hidden border border-orange-200 rounded-full shadow-md">
                            <Search size={18} className="ml-3 text-orange-500" />
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for food..." 
                                className="w-full px-3 py-3 text-sm bg-white focus:outline-none"
                                autoFocus
                                id="mobile-search-input"
                            />
                            <div className="flex items-center">
                                {searchQuery && (
                                    <button 
                                        className="p-2 text-gray-400" 
                                        onClick={() => setSearchQuery("")}
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                                <button 
                                    className="p-2 m-1 text-white bg-orange-500 rounded-full"
                                    onClick={() => {
                                        if (searchQuery.trim()) {
                                            navigate(`/search/${searchQuery}`);
                                            setIsSearchActive(false);
                                        }
                                    }}
                                >
                                    <Search size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;