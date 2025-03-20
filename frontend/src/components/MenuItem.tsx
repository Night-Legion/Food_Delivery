import { Plus } from "lucide-react";
import type { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 border border-gray-200 hover:shadow-md hover:border-orange-200 group"
      onClick={addToCart}
    >
      <div className="flex items-center justify-between">
        <CardHeader className="p-4">
          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
            {menuItem.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center p-4 gap-2">
          <span className="font-bold text-gray-900">
            ₹{(menuItem.price / 100).toFixed(2)}
          </span>
          <div className="flex items-center justify-center w-8 h-8 text-white transition-colors bg-orange-500 rounded-full opacity-0 group-hover:opacity-100">
            <Plus className="w-5 h-5" />
          </div>
        </CardContent>
      </div>
      <div className="h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
    </Card>
  );
};

export default MenuItem;