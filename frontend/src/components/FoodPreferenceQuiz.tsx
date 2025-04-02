import { useState } from 'react';
import { ArrowRight, Check, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FoodPreferenceQuiz = () => {
    const [quizStep, setQuizStep] = useState(0);
    const [userPreferences, setUserPreferences] = useState({
        spiceLevel: '',
        dietaryRestrictions: [] as ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'keto' | 'none')[],
        cuisineTypes: [] as string[],
        mealType: '',
        priceRange: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Quiz questions
    const quizSteps = [
        {
        question: "How spicy do you like your food?",
        options: [
            { id: 'mild', label: 'Mild', icon: '🌱' },
            { id: 'medium', label: 'Medium', icon: '🌶️' },
            { id: 'hot', label: 'Hot', icon: '🔥' },
            { id: 'extra-hot', label: 'Extra Hot', icon: '🔥🔥' }
        ],
        type: 'single',
        field: 'spiceLevel'
        },
        {
        question: "Any dietary restrictions?",
        options: [
            { id: 'vegetarian', label: 'Vegetarian', icon: '🥗' },
            { id: 'vegan', label: 'Vegan', icon: '🥬' },
            { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
            { id: 'dairy-free', label: 'Dairy-Free', icon: '🥛' },
            { id: 'keto', label: 'Keto', icon: '🥩' },
            { id: 'none', label: 'No Restrictions', icon: '✓' }
        ],
        type: 'multiple',
        field: 'dietaryRestrictions'
        },
        {
        question: "Which cuisines do you enjoy?",
        options: [
            { id: 'indian', label: 'Indian', icon: '🍛' },
            { id: 'italian', label: 'Italian', icon: '🍝' },
            { id: 'mexican', label: 'Mexican', icon: '🌮' },
            { id: 'chinese', label: 'Chinese', icon: '🥡' },
            { id: 'japanese', label: 'Japanese', icon: '🍣' },
            { id: 'american', label: 'American', icon: '🍔' },
            { id: 'thai', label: 'Thai', icon: '🍲' },
            { id: 'mediterranean', label: 'Mediterranean', icon: '🫒' }
        ],
        type: 'multiple',
        field: 'cuisineTypes'
        },
        {
        question: "What kind of meal are you looking for?",
        options: [
            { id: 'breakfast', label: 'Breakfast', icon: '🍳' },
            { id: 'lunch', label: 'Lunch', icon: '🥪' },
            { id: 'dinner', label: 'Dinner', icon: '🍽️' },
            { id: 'snack', label: 'Snack', icon: '🍿' },
            { id: 'dessert', label: 'Dessert', icon: '🍰' }
        ],
        type: 'single',
        field: 'mealType'
        },
        {
        question: "What's your budget?",
        options: [
            { id: 'budget', label: 'Budget-Friendly', icon: '💰' },
            { id: 'moderate', label: 'Moderate', icon: '💰💰' },
            { id: 'premium', label: 'Premium', icon: '💰💰💰' },
            { id: 'no-limit', label: 'No Limit', icon: '💎' }
        ],
        type: 'single',
        field: 'priceRange'
        }
    ];

    interface UserPreferences {
        spiceLevel: string;
        dietaryRestrictions: ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'keto' | 'none')[];
        cuisineTypes: string[]; // Explicitly typed as an array of strings
        mealType: string;
        priceRange: string;
    }

    // interface QuizStep {
    //     question: string;
    //     options: { id: string; label: string; icon: string }[];
    //     type: 'single' | 'multiple';
    //     field: keyof UserPreferences;
    // }

    const handleSingleSelect = (field: keyof UserPreferences, value: string): void => {
        setUserPreferences({
            ...userPreferences,
            [field]: value
        });
        
        // Automatically advance to next question for single-choice questions
        if (quizStep < quizSteps.length - 1) {
            setTimeout(() => setQuizStep(quizStep + 1), 300);
        }
    };

    interface MultipleSelectField {
        field: keyof UserPreferences;
        value: string;
    }

    const handleMultipleSelect = ({ field, value }: MultipleSelectField): void => {
        const currentSelections = [...userPreferences[field] as string[]];
        
        // If "none" is selected, clear all other selections
        if (value === 'none') {
            setUserPreferences({
                ...userPreferences,
                [field]: ['none']
            });
            return;
        }
        
        // If user selects something else when "none" was selected, remove "none"
        if (currentSelections.includes('none')) {
            currentSelections.splice(currentSelections.indexOf('none'), 1);
        }
        
        // Toggle selection
        if (currentSelections.includes(value)) {
            const updatedSelections = currentSelections.filter(item => item !== value);
            setUserPreferences({
                ...userPreferences,
                [field]: updatedSelections
            });
        } else {
            setUserPreferences({
                ...userPreferences,
                [field]: [...currentSelections, value]
            });
        }
    };

    const handleNextStep = () => {
        if (quizStep < quizSteps.length - 1) {
        setQuizStep(quizStep + 1);
        } else {
        generateResults();
        }
    };

    const handlePrevStep = () => {
        if (quizStep > 0) {
        setQuizStep(quizStep - 1);
        }
    };

    const generateResults = () => {
        setIsLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
        setIsLoading(false);
        setQuizStep(quizSteps.length); // Move to results page
        }, 1500);
    };

    const restartQuiz = () => {
        setQuizStep(0);
        setUserPreferences({
        spiceLevel: '',
        dietaryRestrictions: [],
        cuisineTypes: [],
        mealType: '',
        priceRange: ''
        });
    };

    const getCurrentStep = () => {
        if (quizStep >= quizSteps.length) {
        return null; // We're at the results page
        }
        return quizSteps[quizStep];
    };

    // Generate personality based on preferences
    const generateFoodPersonality = () => {
        let title = "Your Hungrr Food Personality";
        let description = "";
        let emoji = "🍽️";
        
        // Determine emoji and title based on preferences
        if (userPreferences.cuisineTypes.includes('italian')) {
            emoji = "🍝";
            title = "The Pasta Enthusiast";
            description = "You have a sophisticated palate that appreciates the simple elegance of Italian cuisine.";
        } else if (userPreferences.cuisineTypes.includes('indian') && userPreferences.spiceLevel === 'hot') {
            emoji = "🔥🍛";
            title = "The Spice Master";
            description = "Your taste buds are on a perpetual adventure, seeking the most exciting flavors.";
        } else if (userPreferences.cuisineTypes.includes('japanese')) {
            emoji = "🍣";
            title = "The Sushi Connoisseur";
            description = "You appreciate precision and artistry in your meals, with a preference for fresh ingredients.";
        } else if (userPreferences.dietaryRestrictions.includes('vegetarian') || userPreferences.dietaryRestrictions.includes('vegan')) {
            emoji = "🥬";
            title = "The Plant Pioneer";
            description = "You're conscious about what you eat and how it impacts the world around you.";
        } else if (userPreferences.priceRange === 'premium' || userPreferences.priceRange === 'no-limit') {
            emoji = "💎🍽️";
            title = "The Culinary Explorer";
            description = "For you, dining is an experience to be savored, and you're willing to invest in exceptional meals.";
        } else if (userPreferences.priceRange === 'budget') {
            emoji = "💰🍔";
            title = "The Smart Foodie";
            description = "You know value doesn't always come with a high price tag. You're savvy about finding delicious deals.";
        } else if (userPreferences.mealType === 'breakfast') {
            emoji = "☕🍳";
            title = "The Breakfast Champion";
            description = "You know the most important meal of the day deserves special attention.";
        } else if (userPreferences.mealType === 'dessert') {
            emoji = "🍰";
            title = "The Sweet Tooth";
            description = "Life is uncertain. You prefer to eat dessert first!";
        } else {
            emoji = "🍲";
            title = "The Culinary Explorer";
            description = "Your varied tastes make you an adventurous eater, always ready to try something new!";
        }
        
        return { emoji, title, description };
    };
    
    const personality = generateFoodPersonality();

    const currentStep = getCurrentStep();
    const isMultipleChoice = currentStep?.type === 'multiple';
    const isLastStep = quizStep === quizSteps.length - 1;
    const hasSelection = currentStep ? (
        isMultipleChoice 
        ? userPreferences[currentStep.field as keyof UserPreferences].length > 0 
        : userPreferences[currentStep.field as keyof UserPreferences] !== ''
    ) : true;

    // Render creative results page
    if (quizStep >= quizSteps.length) {
        return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-200 p-6">
            <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Hungrr Profile</h2>
            <button 
                onClick={restartQuiz}
                className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Retake Quiz
            </button>
            </div>
            
            {isLoading ? (
            <div className="flex flex-col items-center justify-center p-12">
                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Analyzing your food personality...</p>
            </div>
            ) : (
            <>
                {/* Creative Profile Card */}
                <div className="mb-8 bg-orange-50 rounded-xl overflow-hidden border border-orange-100 p-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="text-7xl mb-4">
                            {personality.emoji}
                        </div>
                        <h3 className="text-3xl font-bold text-orange-600 mb-2">{personality.title}</h3>
                        <p className="text-gray-700 mb-4">{personality.description}</p>
                        
                        <div className="w-full max-w-md">
                            {/* Radar Chart Visualization (simplified with shapes) */}
                            <div className="relative h-64 w-64 mx-auto mb-4">
                                {/* Base pentagon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-56 h-56 bg-orange-100 rounded-full opacity-30"></div>
                                    <div className="absolute w-48 h-48 bg-orange-200 rounded-full opacity-40"></div>
                                    <div className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-50"></div>
                                    <div className="absolute w-16 h-16 bg-orange-400 rounded-full opacity-60"></div>
                                </div>
                                
                                {/* Overlay with points based on preferences */}
                                <div className="absolute inset-0">
                                    {/* Taste Points */}
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute bottom-4 right-1/4 transform translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute top-1/3 left-4 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute top-1/3 right-4 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    
                                    {/* Connect points */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                                        <polygon 
                                            points="128,16 64,192 192,192 128,16" 
                                            fill="rgba(234, 88, 12, 0.5)" 
                                            stroke="#ea580c" 
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                
                                {/* Labels */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-xs font-medium">Taste</div>
                                <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1 text-xs font-medium">Value</div>
                                <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1 text-xs font-medium">Variety</div>
                                <div className="absolute top-1/3 left-0 transform -translate-x-1 text-xs font-medium">Health</div>
                                <div className="absolute top-1/3 right-0 transform translate-x-1 text-xs font-medium">Adventure</div>
                            </div>
                        </div>
                        
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-base flex items-center mt-4"
                            onClick={() => navigate('/menu')}
                            >
                            Find Your Perfect Matches
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Points to be Noted */}
                <div className="bg-gray-50 rounded-lg p-5 mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-6 h-6 bg-orange-500 rounded-full text-white flex items-center justify-center mr-2 text-xs">✓</span>
                        Points to be Noted
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <div className="min-w-6 h-6 pt-0.5">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-700">Hungrr's algorithm has analyzed your food preferences from over 10,000 possible combinations</span>
                        </li>
                        <li className="flex items-start">
                            <div className="min-w-6 h-6 pt-0.5">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-700">Your profile will be used to suggest personalized recommendations for your next meal</span>
                        </li>
                        <li className="flex items-start">
                            <div className="min-w-6 h-6 pt-0.5">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-700">Save 20% on your first order with personalized recommendations</span>
                        </li>
                    </ul>
                </div>
                
                {/* Your Food Preferences Summary */}
                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Your Food Preferences</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        {userPreferences.spiceLevel && (
                        <div className="flex items-center">
                            <span className="font-medium mr-2">Spice Level:</span> 
                            <span className="capitalize">{userPreferences.spiceLevel}</span>
                        </div>
                        )}
                        {userPreferences.dietaryRestrictions?.length > 0 && (
                        <div className="flex items-center">
                            <span className="font-medium mr-2">Dietary:</span> 
                            <span className="capitalize">{userPreferences.dietaryRestrictions.join(', ')}</span>
                        </div>
                        )}
                        {userPreferences.cuisineTypes?.length > 0 && (
                        <div className="flex items-center">
                            <span className="font-medium mr-2">Cuisine:</span> 
                            <span className="capitalize">{userPreferences.cuisineTypes.join(', ')}</span>
                        </div>
                        )}
                        {userPreferences.mealType && (
                        <div className="flex items-center">
                            <span className="font-medium mr-2">Meal:</span> 
                            <span className="capitalize">{userPreferences.mealType}</span>
                        </div>
                        )}
                        {userPreferences.priceRange && (
                        <div className="flex items-center">
                            <span className="font-medium mr-2">Budget:</span> 
                            <span className="capitalize">{userPreferences.priceRange}</span>
                        </div>
                        )}
                    </div>
                </div>
            </>
            )}
        </div>
        );
    }

    // Render quiz steps
    return (
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-orange-200">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-50 -z-10"></div>
        
        <div className="relative z-10 p-6 md:p-8">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(quizStep / quizSteps.length) * 100}%` }}
            ></div>
            </div>
            
            {/* Question */}
            <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentStep?.question}
            </h2>
            <p className="text-gray-600">
                {isMultipleChoice ? "Select all that apply" : "Select one option"}
            </p>
            </div>
            
            {/* Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {currentStep?.options.map((option) => {
                const isSelected = isMultipleChoice 
                ? (userPreferences[currentStep.field as keyof UserPreferences] as string[]).includes(option.id)
                : userPreferences[currentStep.field as keyof UserPreferences] === option.id;
                
                return (
                <button
                    key={option.id}
                    onClick={() => isMultipleChoice 
                    ? handleMultipleSelect({ field: currentStep.field as keyof UserPreferences, value: option.id })
                    : handleSingleSelect(currentStep.field as keyof UserPreferences, option.id)
                    }
                    className={`p-4 rounded-lg transition-all flex flex-col items-center justify-center h-24 relative
                    ${isSelected 
                        ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    {isSelected && (
                    <div className="absolute top-2 right-2">
                        <Check className="w-4 h-4" />
                    </div>
                    )}
                    <span className="text-3xl mb-2" role="img" aria-label={option.label}>
                    {option.icon}
                    </span>
                    <span className="text-sm font-medium">{option.label}</span>
                </button>
                );
            })}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between">
            <button
                onClick={handlePrevStep}
                className={`flex items-center py-2 px-4 rounded-lg ${quizStep === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'}`}
                disabled={quizStep === 0}
            >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back
            </button>
            
            <button
                onClick={handleNextStep}
                disabled={!hasSelection}
                className={`bg-orange-500 text-white font-bold py-2 px-6 rounded-lg flex items-center
                ${hasSelection 
                    ? 'hover:bg-orange-600 cursor-pointer' 
                    : 'opacity-50 cursor-not-allowed'}`}
            >
                {isLastStep ? 'See Results' : 'Next'}
                <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            </div>
        </div>
        </div>
    );
};

export default FoodPreferenceQuiz;