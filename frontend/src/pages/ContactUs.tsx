import { useState } from 'react';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Clock, 
    ChevronDown, 
    ChevronUp, 
    Send,
    Headphones
} from 'lucide-react';

const HelpPage = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const faqData = [
        {
            question: "How do I place an order?",
            answer: "To place an order, simply search for restaurants in your area, select the items you want, and proceed to checkout. You can pay online or choose cash on delivery depending on the restaurant's options."
        },
        {
            question: "What do I do if my order is late?",
            answer: "If your order is running late, you can check the status in the 'Order Status' section. If there's a significant delay, please contact our customer support or the restaurant directly through the app."
        },
        {
            question: "Can I change or cancel my order?",
            answer: "You can modify or cancel your order within 5 minutes of placing it. After that, please contact our customer support as the restaurant may have already started preparing your food."
        },
        {
            question: "How do I become a delivery partner?",
            answer: "To become a delivery partner, visit the 'Partner With Us' section on our website and fill out the application form. Our team will review your application and contact you with next steps."
        },
        {
            question: "How do restaurant owners join Hungrr?",
            answer: "Restaurant owners can partner with Hungrr by clicking on the 'Restaurant Sign Up' link at the bottom of our homepage or by contacting our business development team through the contact form on this page."
        },
        {
            question: "Is there a minimum order value?",
            answer: "Minimum order values vary by restaurant. You can see the minimum order value on each restaurant's page before placing your order."
        }
    ];

    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Help Center Hero Section  */}
            <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="/help-pattern.jpg" 
                        alt="" 
                        className="object-cover w-full h-full"
                        onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="5"%3E%3C/circle%3E%3Cpath d="M12 1v2"%3E%3C/path%3E%3Cpath d="M12 21v2"%3E%3C/path%3E%3Cpath d="M4.22 4.22l1.42 1.42"%3E%3C/path%3E%3Cpath d="M18.36 18.36l1.42 1.42"%3E%3C/path%3E%3Cpath d="M1 12h2"%3E%3C/path%3E%3Cpath d="M21 12h2"%3E%3C/path%3E%3Cpath d="M4.22 19.78l1.42-1.42"%3E%3C/path%3E%3Cpath d="M18.36 5.64l1.42-1.42"%3E%3C/path%3E%3C/svg%3E';
                        }}
                    />
                </div>
                <div className="relative z-10 px-6 py-12 text-center md:py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white rounded-full">
                        <Headphones className="w-8 h-8 text-orange-500" />
                    </div>
                    <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">How can we help you?</h1>
                    <p className="max-w-xl mx-auto mb-8 text-white text-md md:text-lg">
                        Get answers to frequently asked questions or contact our support team for personalized assistance.
                    </p>
                    <div className="flex flex-col items-center md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a href="#contact-form" className="px-6 py-3 text-orange-500 bg-white rounded-full hover:bg-orange-50 transition-colors font-bold">
                            Contact Us
                        </a>
                        <a href="#faq-section" className="px-6 py-3 text-white border-2 border-white rounded-full hover:bg-white hover:text-orange-500 transition-colors font-bold">
                            View FAQs
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Options Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:border-orange-200">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-full">
                        <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Call Us</h3>
                    <p className="mb-3 text-gray-600">Our support team is available from Monday to Sunday, 9 AM to 10 PM.</p>
                    <a href="tel:+911234567890" className="text-orange-500 hover:text-orange-600 font-medium">+91 1234 567 890</a>
                </div>
                
                <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:border-orange-200">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-full">
                        <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Email Us</h3>
                    <p className="mb-3 text-gray-600">For general inquiries and support requests, please email us.</p>
                    <a href="mailto:help@hungrr.com" className="text-orange-500 hover:text-orange-600 font-medium">help@hungrr.com</a>
                </div>
                
                <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:border-orange-200">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-full">
                        <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Visit Us</h3>
                    <p className="mb-3 text-gray-600">Our main office is located in the heart of the city.</p>
                    <address className="not-italic text-orange-500 hover:text-orange-600 font-medium">
                        123 Food Street, Metro City, India
                    </address>
                </div>
                
                <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:border-orange-200">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-full">
                        <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-800">Business Hours</h3>
                    <p className="mb-3 text-gray-600">Our customer support team is available during these hours:</p>
                    <p className="text-orange-500 font-medium">9 AM - 10 PM, All days</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12" id="faq-section">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                    <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                    Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg hover:border-orange-200"
                        >
                            <button 
                                className="flex items-center justify-between w-full p-5 text-left"
                                onClick={() => toggleQuestion(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                {activeQuestion === index ? 
                                    <ChevronUp className="w-5 h-5 text-orange-500" /> : 
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                }
                            </button>
                            
                            <div 
                                className={`px-5 pb-5 transition-all duration-300 ${
                                    activeQuestion === index ? 'block' : 'hidden'
                                }`}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="contact-form">
                <div className="lg:col-span-1">
                    <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                        <span className="w-8 h-1 mr-3 bg-orange-500 rounded-full"></span>
                        Get in Touch
                    </h2>
                    
                    <div className="mb-6">
                        <p className="mb-4 text-gray-600">
                            Have a question, suggestion, or need assistance with your order? Fill out the form and our team will get back to you as soon as possible.
                        </p>
                        
                        <div className="p-5 mt-8 bg-orange-50 rounded-lg border border-orange-100">
                            <h3 className="mb-3 text-lg font-bold text-orange-700">Business Inquiries</h3>
                            <p className="text-orange-700">
                                Are you a restaurant owner interested in partnering with Hungrr? Please select "Business Partnership" in the subject dropdown, and our business team will contact you.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            >
                                <option value="">Select a subject</option>
                                <option value="Order Issue">Order Issue</option>
                                <option value="Account Problem">Account Problem</option>
                                <option value="Delivery Feedback">Delivery Feedback</option>
                                <option value="Restaurant Feedback">Restaurant Feedback</option>
                                <option value="Business Partnership">Business Partnership</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div className="mt-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Please describe your issue or query in detail"
                            ></textarea>
                        </div>
                        
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="flex items-center justify-center w-full px-6 py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* App Promo Section */}
            <div className="p-8 transition-shadow duration-300 shadow-md bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:shadow-lg mt-12">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">Need help on the go?</h2>
                        <p className="text-lg text-gray-600">
                            Download our mobile app to get instant support, track your orders in real-time, and access exclusive deals!
                        </p>
                        <div className="flex gap-4 mt-4">
                            <img 
                                src="/app-download.png" 
                                alt="Get it on Google Play" 
                                className="h-12 transition cursor-pointer hover:opacity-90 hover:scale-105" 
                                loading="lazy"
                                width="220"
                                height="48"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="2" y="6" width="20" height="12" rx="2" ry="2"%3E%3C/rect%3E%3Cline x1="6" y1="12" x2="18" y2="12"%3E%3C/line%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img 
                            src="/app.png" 
                            alt="Hungrr App" 
                            className="w-full md:max-w-sm" 
                            loading="lazy" 
                            width="400"
                            height="400"
                            onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;