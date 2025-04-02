import { Facebook, Twitter, Instagram, Youtube, Smartphone, MapPin, Clock, Phone, Mail, ArrowRight, ChevronRight, MapPinned, Clock3, Send, Star, Coffee, Pizza, Utensils } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-orange-600 to-orange-700 text-white overflow-hidden">
            {/* Animated Food Icons Background */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-10 left-10 text-7xl animate-float-slow">🍔</div>
                <div className="absolute top-20 right-20 text-7xl animate-float-medium">🍕</div>
                <div className="absolute bottom-40 left-1/4 text-7xl animate-float-fast">🌮</div>
                <div className="absolute top-1/2 right-1/3 text-7xl animate-float-medium">🍜</div>
                <div className="absolute bottom-20 right-10 text-7xl animate-float-slow">🍦</div>
                <div className="absolute bottom-10 left-10 text-7xl animate-float-medium">🥗</div>
            </div>

            {/* Overlay to help food icons stand out */}
            <div className="absolute inset-0 bg-orange-700 opacity-20"></div>


            {/* Curved Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
            
            </div>

            <div className="container relative z-10 mx-auto pt-16 pb-8 px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Logo & Social */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center mb-4 group">
                            <div className="relative">
                                <img src="/hungrr-new.png" alt="Hungrr logo" className="h-16 mr-2 transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute -top-2 -right-2 h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                                    <span className="text-xs text-orange-600 font-bold">🔥</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-white text-sm border-l-2 border-yellow-400 pl-3 italic backdrop-blur-sm bg-orange-600 bg-opacity-20 p-2 rounded-r-lg shadow-inner">
                            Delivering culinary adventures to your doorstep. 
                            Connecting food enthusiasts with neighborhood gems since 2022.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {[
                                { icon: <Facebook className="h-5 w-5" />, color: "bg-blue-500" },
                                { icon: <Twitter className="h-5 w-5" />, color: "bg-sky-500" },
                                { icon: <Instagram className="h-5 w-5" />, color: "bg-pink-600" },
                                { icon: <Youtube className="h-5 w-5" />, color: "bg-red-600" }
                            ].map((item, i) => (
                                <a 
                                    key={i}
                                    href="#" 
                                    className={`h-10 w-10 ${item.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center mt-2 bg-orange-500 bg-opacity-20 p-2 rounded-lg">
                            <Star className="h-5 w-5 text-yellow-300 mr-2" />
                            <span className="text-sm font-medium">4.8 stars from 10,000+ reviews</span>
                        </div>
                    </div>

                    {/* Column 2: About */}
                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
                            <span className="relative z-10">About Hungrr</span>
                            {/* <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-30 -z-0"></span> */}
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {['Our Story', 'Join Our Team', 'Partner With Us', 'Food Blog & Recipes'].map((item, i) => (
                                <a 
                                    key={i} 
                                    href="#" 
                                    className="group flex items-center text-white hover:text-yellow-200 text-sm transition-colors duration-300"
                                >
                                    <div className="h-6 w-6 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-3 group-hover:bg-yellow-400 group-hover:text-orange-700 transition-all duration-300">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                    {item}
                                </a>
                            ))}
                        </div>
                        
                        {/* Enhanced stats */}
                        <div className="mt-4 flex flex-col space-y-2 p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <h4 className="text-sm font-bold text-yellow-200 mb-2 flex items-center">
                                <Star className="h-4 w-4 mr-2" /> Hungrr By Numbers
                            </h4>
                            {[
                                { label: "Restaurant Partners", value: "500+", icon: <Coffee className="h-4 w-4" /> },
                                { label: "Monthly Deliveries", value: "25k+", icon: <Pizza className="h-4 w-4" /> },
                                { label: "Satisfied Foodies", value: "75k+", icon: <Utensils className="h-4 w-4" /> }
                            ].map((stat, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-xs flex items-center">
                                        <span className="h-5 w-5 rounded-full bg-orange-700 bg-opacity-30 flex items-center justify-center mr-2">
                                            {stat.icon}
                                        </span>
                                        {stat.label}
                                    </span>
                                    <span className="text-sm font-bold bg-yellow-400 text-orange-700 px-2 py-1 rounded-full">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Get Help */}
                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
                            <span className="relative z-10">Customer Support</span>
                            {/* <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-30 -z-0"></span> */}
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {[
                                { title: 'Account & Orders', desc: 'Manage your profile & track orders' },
                                { title: 'Help Center', desc: 'FAQs & common questions' },
                                { title: 'Delivery Issues', desc: 'Late or missing orders' },
                                { title: 'Refund Policy', desc: 'How our guarantees work' }
                            ].map((item, i) => (
                                <a 
                                    key={i} 
                                    href="#" 
                                    className="group p-2 hover:bg-orange-500 rounded-lg transition-colors duration-300 flex flex-col"
                                >
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-xs text-orange-200">{item.desc}</span>
                                </a>
                            ))}
                        </div>
                        
                        {/* Contact info */}
                        <div className="mt-4 p-3 bg-gradient-to-r from-orange-800 to-orange-700 rounded-lg shadow-inner">
                            <h4 className="text-sm font-bold text-yellow-200 mb-3">Reach Out To Us</h4>
                            <div className="flex flex-col space-y-3">
                                <a href="tel:+18001234567" className="flex items-center space-x-3 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-300">
                                    <div className="h-8 w-8 bg-yellow-400 text-orange-700 rounded-full flex items-center justify-center">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm">+1 800 123 4567</span>
                                        <span className="text-xs text-orange-200">9AM-9PM Daily</span>
                                    </div>
                                </a>
                                <a href="mailto:support@hungrr.com" className="flex items-center space-x-3 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-300">
                                    <div className="h-8 w-8 bg-yellow-400 text-orange-700 rounded-full flex items-center justify-center">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm">support@hungrr.com</span>
                                        <span className="text-xs text-orange-200">24/7 Email Support</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: App & Location */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
                            <span className="relative z-10">Go Mobile With Hungrr</span>
                            {/* <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-30 -z-0"></span> */}
                        </h3>
                        
                        {/* Enhanced App promo */}
                        <div className="relative bg-gradient-to-br from-orange-600 to-orange-800 p-5 rounded-lg overflow-hidden shadow-lg transform hover:translate-y-1 transition-transform duration-300">
                            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-9xl opacity-10 transform -rotate-12">📱</div>
                            <div className="flex items-center mb-3">
                                <div className="h-10 w-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                    <Smartphone className="h-6 w-6 text-orange-700" />
                                </div>
                                <h4 className="text-lg font-bold">Hungrr App</h4>
                            </div>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center text-sm">
                                    <div className="h-5 w-5 rounded-full bg-yellow-400 text-orange-700 flex items-center justify-center mr-2 flex-shrink-0">
                                        <span className="text-xs font-bold">1</span>
                                    </div>
                                    <span>Exclusive app-only deals</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="h-5 w-5 rounded-full bg-yellow-400 text-orange-700 flex items-center justify-center mr-2 flex-shrink-0">
                                        <span className="text-xs font-bold">2</span>
                                    </div>
                                    <span>Real-time order tracking</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="h-5 w-5 rounded-full bg-yellow-400 text-orange-700 flex items-center justify-center mr-2 flex-shrink-0">
                                        <span className="text-xs font-bold">3</span>
                                    </div>
                                    <span>Loyalty rewards program</span>
                                </li>
                            </ul>
                            <div className="flex space-x-2">
                                <img src="/app-download.png" alt="App Store" className="h-10 cursor-pointer rounded-md shadow-md hover:shadow-lg transition-shadow duration-300" />
                            </div>
                            <a href="#" className="mt-4 block text-center bg-orange-400 rounded-full px-6 py-3 shadow-md text-orange-700 font-bold hover:bg-yellow-300 transition-all duration-300 group">
                                <span className="flex items-center justify-center">
                                    Download Now
                                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </a>
                        </div>
                        
                        {/* Enhanced Map */}
                        <div className="relative rounded-lg overflow-hidden border-2 border-yellow-400 border-opacity-30 shadow-lg">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-orange-700 rounded-bl-lg px-3 py-2 text-xs font-bold z-10 flex items-center">
                                <MapPinned className="h-4 w-4 mr-1" /> Headquarters
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-700 to-transparent p-2 text-xs">
                                <div className="flex items-center">
                                    <Clock3 className="h-3 w-3 mr-1 text-yellow-400" />
                                    <span>Office Hours: Mon-Fri 9AM-6PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="my-8 rounded-xl relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-orange-600 opacity-90"></div>
                    <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 transform rotate-12">🎁</div>
                    <div className="relative p-6 grid md:grid-cols-5 gap-6 items-center">
                        <div className="md:col-span-2">
                            <span className="px-3 py-1 bg-yellow-400 text-orange-700 text-xs font-bold rounded-full mb-2 inline-block">EXCLUSIVE OFFERS</span>
                            <h4 className="text-2xl font-bold text-white mb-1">Join The Hungrr Family</h4>
                            <p className="text-orange-100">Get special discounts, foodie tips, and surprise treats!</p>
                        </div>
                        <div className="md:col-span-3">
                            <div className="bg-white bg-opacity-10 p-1 rounded-full backdrop-blur-sm flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-grow px-4 py-3 bg-transparent text-orange-700 focus:outline-none"
                                />
                                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 rounded-full font-bold text-orange-700 transition-colors duration-300 flex items-center">
                                    <span>Subscribe</span>
                                    <Send className="h-4 w-4 ml-2" />
                                </button>
                            </div>
                            <div className="flex items-center mt-2 text-xs text-orange-200 justify-center md:justify-end">
                                <input type="checkbox" id="newsletter-consent" className="mr-2" />
                                <label htmlFor="newsletter-consent">I agree to receive tasty emails from Hungrr</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Cuisines Tags */}
                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-yellow-200 flex items-center">
                        <span className="h-6 w-6 bg-yellow-400 text-orange-700 rounded-full flex items-center justify-center mr-2">
                            <Utensils className="h-3 w-3" />
                        </span>
                        Explore Popular Cuisines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Pizza 🍕', 'Burgers 🍔', 'Sushi 🍣', 'Chinese 🥡', 'Italian 🍝', 
                            'Mexican 🌮', 'Thai 🍜', 'Indian 🍛', 'Desserts 🍰', 'Healthy 🥗'
                        ].map((cuisine, i) => (
                            <a 
                                key={i} 
                                href="#" 
                                className="px-4 py-2 bg-orange-500 bg-opacity-30 hover:bg-opacity-50 rounded-full text-sm transition-all duration-300 hover:scale-105 transform hover:shadow-md"
                            >
                                {cuisine}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative bg-orange-900 py-5">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white text-sm mb-4 md:mb-0 flex items-center">
                        <div className="h-8 w-8 bg-orange-700 rounded-full flex items-center justify-center mr-2">
                            <span className="text-lg">🍽️</span>
                        </div>
                        <span>© 2025 Hungrr Technologies Pvt. Ltd. All rights reserved.</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center">
                            <div className="h-1 w-1 bg-yellow-400 rounded-full mr-2"></div>
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center">
                            <div className="h-1 w-1 bg-yellow-400 rounded-full mr-2"></div>
                            Terms of Service
                        </a>
                        <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center">
                            <div className="h-1 w-1 bg-yellow-400 rounded-full mr-2"></div>
                            Cookies Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;