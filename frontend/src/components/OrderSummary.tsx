import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash, ShoppingBag } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;
    
    return (totalWithDelivery / 100).toFixed(2);
  };
  
  return (
    <>
      <CardHeader className="bg-orange-50 border-b">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-orange-500" />
            <span>Your Order</span>
            {cartItems.length > 0 && (
              <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-700">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </div>
          <span className="text-lg font-bold text-orange-600">₹{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <ShoppingBag className="h-12 w-12 text-gray-300 mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
            <p className="text-gray-500">Add delicious items from the menu</p>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-700 h-6 w-6 flex items-center justify-center p-0">
                    {item.quantity}
                  </Badge>
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">₹{((item.price * item.quantity) / 100).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="p-1 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <Separator className="my-3" />
            <div className="flex justify-between py-2 text-gray-500">
              <span>Delivery</span>
              <span>₹{(restaurant.deliveryPrice / 100).toFixed(2)}</span>
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span className="text-orange-600">₹{getTotalCost()}</span>
            </div>
          </div>
        )}
      </CardContent>
    </>
  );
};

export default OrderSummary;