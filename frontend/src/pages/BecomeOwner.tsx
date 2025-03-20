import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowRight, Check } from 'lucide-react';

const BecomeOwner = () => {
    const benefits = [
        "Reach more customers in your area",
        "Increase your restaurant's visibility",
        "Easy-to-use order management system",
        "Dedicated support team to help you succeed",
        "Insights and analytics to grow your business"
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                <ChefHat size={16} />
                <span>Restaurant Partners</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
                Become a Restaurant Owner on <span className="text-orange-500">Hungrr</span>
            </h1>
            
            <p className="text-lg text-gray-600">
                Join our platform and reach thousands of hungry customers in your area. 
                Expand your business and increase your revenue with our easy-to-use tools.
            </p>
            
            <div className="space-y-4 pt-2">
                {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={12} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                </div>
                ))}
            </div>
            
            <div className="pt-4">
                <Link 
                to="/manage-restaurant" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition duration-300"
                >
                Start Now
                <ArrowRight size={18} />
                </Link>
            </div>
            </div>
            
            <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full z-0"></div>
            
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl">
                <img 
                src="/owner.jpg" 
                alt="Restaurant Owner" 
                className="w-full h-80 object-cover object-center"
                onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M12 3a9 9 0 0 0-9 9H1.76a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H3a9 9 0 0 0 9 9 9 9 0 0 0 0-18z"%3E%3C/path%3E%3Cpath d="M4 9h4"%3E%3C/path%3E%3Cpath d="M12 19.5V21"%3E%3C/path%3E%3Cpath d="M12 3v1.5"%3E%3C/path%3E%3Cpath d="M16 19h4"%3E%3C/path%3E%3C/svg%3E';
                }}
                />
                
                <div className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-gray-800">Fill out the form to get started</h3>
                <p className="text-gray-600">
                    Complete your restaurant details and start receiving orders within 24 hours.
                    Our team will guide you through the setup process.
                </p>
                <Link 
                    to="/manage-restaurant" 
                    className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                    Manage Restaurant
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

export default BecomeOwner;