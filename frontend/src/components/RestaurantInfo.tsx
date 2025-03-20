import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Clock, Dot, MapPin, Phone, Star, Utensils } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="overflow-hidden border border-orange-100 shadow-md">
      <CardHeader className="pb-2 bg-gradient-to-r from-orange-50 to-white">
        <CardTitle className="text-3xl font-bold tracking-tight text-gray-800">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <div className="flex items-center px-2 py-1 bg-green-600 rounded text-white text-xs font-semibold">
            <span className="mr-1">4.5</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>25-35 min delivery</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-1" />
            <span>Contact restaurant</span>
          </div>
        </div>
        
        <div className="pt-3 mt-3 border-t border-gray-100">
          <div className="flex items-center mb-2">
            <Utensils className="w-4 h-4 mr-2 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Cuisines:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {restaurant.cuisines.map((item, index) => (
              <span 
                key={item} 
                className="flex items-center text-sm text-gray-600"
              >
                <span className="px-2 py-1 bg-orange-100 rounded-full">{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot className="text-orange-500" />}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;