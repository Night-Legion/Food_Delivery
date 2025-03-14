import { Facebook, Twitter, Instagram, Youtube, Smartphone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-orange-600 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                            <img src="/hungrr-new.png" alt="Hungrr logo" className="h-12 mr-2" />
                        </div>
                        <p className="text-white text-sm">
                            Delivering happiness one meal at a time. 
                            Connecting you to the food you love from the best restaurants in your area.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Facebook className="h-6 w-6 text-white hover:text-orange-200 transition-colors duration-300 cursor-pointer" />
                            <Twitter className="h-6 w-6 text-white hover:text-orange-200 transition-colors duration-300 cursor-pointer" />
                            <Instagram className="h-6 w-6 text-white hover:text-orange-200 transition-colors duration-300 cursor-pointer" />
                            <Youtube className="h-6 w-6 text-white hover:text-orange-200 transition-colors duration-300 cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-lg mb-2 text-white">About Hungrr</h3>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">About Us</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Careers</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Partner With Us</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Hungrr Blog</a>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-lg mb-2 text-white">Get Help</h3>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Account Details</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Order History</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Help Center</a>
                        <a href="#" className="text-white hover:text-orange-200 text-sm transition-colors duration-300">Contact Us</a>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-lg mb-2 text-white">Get The App</h3>
                        <p className="text-white text-sm">Download the Hungrr App for faster ordering and exclusive deals</p>
                        <div className="flex flex-col space-y-2">
                            <img src="/app-download.png" alt="App Store" className="h-12 w-64 cursor-pointer rounded-md shadow-md hover:shadow-lg transition-shadow duration-300" />
                        </div>
                        <div className="flex flex-col space-y-3 mt-2">
                        <a href="#" className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <Smartphone className="h-5 w-5 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                            <span className="text-sm font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-300">Download Now</span>
                        </a>
                        <a href="#" className="inline-flex items-center space-x-2 bg-orange-800 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <Smartphone className="h-5 w-5 text-white group-hover:text-orange-200 transition-colors duration-300" />
                            <span className="text-sm font-bold text-white group-hover:text-orange-200 transition-colors duration-300">Get the App</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-orange-700 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white text-sm mb-4 md:mb-0">
                        © 2025 Hungrr. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-white hover:text-orange-200 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-white hover:text-orange-200 transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="text-white hover:text-orange-200 transition-colors duration-300">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;