import React from 'react';
import { Globe, UserPlus, Truck, ShieldCheck, Users, Award, ChefHat, Heart } from 'lucide-react';

const About = () => {
    const stats = [
        { id: 1, value: '10K+', label: 'Restaurant Partners' },
        { id: 2, value: '100+', label: 'Cities Covered' },
        { id: 3, value: '2M+', label: 'Monthly Orders' },
        { id: 4, value: '5M+', label: 'Happy Customers' },
    ];

    const team = [
        { 
            id: 1, 
            name: 'Sarah Johnson', 
            role: 'Founder & CEO', 
            image: '/team1.jpg', 
            bio: 'Sarah founded Hungrr with a vision to revolutionize food delivery and bring delicious local food to everyone\'s doorstep.'
        },
        { 
            id: 2, 
            name: 'Michael Chen', 
            role: 'CTO', 
            image: '/team2.jpg', 
            bio: 'Michael leads our tech team, ensuring our platform provides the fastest and most reliable food delivery experience possible.'
        },
        { 
            id: 3, 
            name: 'Priya Patel', 
            role: 'Chief Marketing Officer', 
            image: '/team3.jpg', 
            bio: 'Priya drives our marketing strategy, connecting food lovers with their favorite restaurants through innovative campaigns.'
        },
        { 
            id: 4, 
            name: 'David Wilson', 
            role: 'Head of Operations', 
            image: '/team4.jpg', 
            bio: 'David ensures smooth operations across all our delivery networks, optimizing for speed and customer satisfaction.'
        },
    ];

    return (
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-800/70 z-10"></div>
                    <img 
                        src="/story.jpg" 
                        alt="Hungrr Team" 
                        className="w-full h-96 object-cover"
                        onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                        }}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
                        <p className="text-xl text-white max-w-2xl">
                            Bringing delicious food to your doorstep since 2020
                        </p>
                    </div>
                </div>
                
                {/* Our Mission */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-1 bg-orange-500 rounded-full mr-4"></div>
                        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <p className="text-gray-600 mb-4 text-lg">
                                At Hungrr, we're on a mission to connect people with the food they love from their favorite local restaurants. We believe that good food has the power to bring joy and comfort to people's lives, and we're passionate about making that experience as seamless as possible.
                            </p>
                            <p className="text-gray-600 mb-4 text-lg">
                                We started Hungrr with a simple idea: to create a platform that makes it easy for people to discover and order from the best restaurants in their area. Since then, we've grown to serve millions of customers across the country, but our commitment to quality, convenience, and customer satisfaction remains unchanged.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Our team works tirelessly to ensure that every order is delivered promptly, every restaurant partner is supported, and every customer has a delightful experience. We're not just delivering food; we're delivering happiness, one meal at a time.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src="/food-mission.jpg" 
                                alt="Our Mission" 
                                className="rounded-lg shadow-lg w-full"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Stats Section */}
                <div className="bg-orange-50 rounded-xl p-8 mb-16">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Hungrr By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Values */}
                <div className="mb-16">
                    <div className="flex items-center mb-10">
                        <div className="w-10 h-1 bg-orange-500 rounded-full mr-4"></div>
                        <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Customer First</h3>
                            <p className="text-gray-600">
                                We prioritize our customers' needs and strive to exceed their expectations in every interaction.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                                <ChefHat className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Food</h3>
                            <p className="text-gray-600">
                                We partner with restaurants that share our commitment to delivering high-quality, delicious meals.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                            <p className="text-gray-600">
                                We support local businesses and contribute positively to the communities we serve.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We continuously improve our platform to create better experiences for customers and partners.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Why Choose Hungrr */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 mb-16 text-white">
                    <h2 className="text-2xl font-bold text-center mb-10">Why Choose Hungrr</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start">
                            <div className="bg-white/20 p-3 rounded-lg mr-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Wide Selection</h3>
                                <p className="text-white/90">
                                    Browse through thousands of restaurants and cuisines to find exactly what you're craving.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-white/20 p-3 rounded-lg mr-4">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                                <p className="text-white/90">
                                    Our efficient delivery network ensures your food arrives hot and fresh, right when you want it.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-white/20 p-3 rounded-lg mr-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Secure Ordering</h3>
                                <p className="text-white/90">
                                    Order with confidence knowing your personal and payment information is always protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Join Us CTA */}
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Hungrr Family</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        We're always looking for passionate people to join our team, and for restaurant partners who share our commitment to quality and customer satisfaction.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300">
                            <UserPlus className="w-5 h-5" />
                            Join Our Team
                        </a>
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-orange-500 bg-white border border-orange-500 rounded-full shadow-md hover:bg-orange-50 transition-colors duration-300">
                            <ChefHat className="w-5 h-5" />
                            Become a Partner
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default About;