import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem as MenuItemType } from "../types";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";
import { Clock, Navigation, Star, ShoppingBag } from "lucide-react";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);
  const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => cartItem._id !== item._id
      );

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = async (userFormData: UserFormData) => {
    if (!restaurant) {
      return;
    }

    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        menuItemId: cartItem._id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
      })),
      restaurantId: restaurant._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };

    const data = await createCheckoutSession(checkoutData);
    window.location.href = data.url;
  };

  if (isLoading || !restaurant) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 border-4 border-t-orange-500 rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-600">Loading restaurant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <AspectRatio ratio={16 / 5}>
          <img
            src={restaurant.imageUrl}
            className="object-cover w-full h-full rounded-lg shadow-md"
            alt={`${restaurant.restaurantName} banner`}
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-2 py-1 text-xs font-bold bg-green-600 rounded">
              <div className="flex items-center">
                <span className="mr-1">4.5</span>
                <Star className="w-3 h-3 fill-current" />
              </div>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>25-35 min</span>
            </div>
            <div className="flex items-center text-sm">
              <Navigation className="w-4 h-4 mr-1" />
              <span>1.5 km</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[4fr_2fr] md:px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-6">
          <RestaurantInfo restaurant={restaurant} />
          <div>
            <h2 className="flex items-center mb-4 text-2xl font-bold tracking-tight text-gray-800">
              <span className="w-6 h-1 mr-3 bg-orange-500 rounded-full"></span>
              Menu
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {restaurant.menuItems.map((menuItem) => (
                <MenuItem
                  key={menuItem._id}
                  menuItem={menuItem}
                  addToCart={() => addToCart(menuItem)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="sticky top-24 h-fit">
  <Card className="overflow-hidden border border-orange-200 rounded-lg shadow-xl">
    <div className="px-4 py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-orange-500 to-orange-400">
      <h3 className="flex items-center justify-center gap-2">
        <ShoppingBag className="w-5 h-5" />
        Your Order
      </h3>
    </div>
    
    <div className="bg-white">
      <OrderSummary 
        restaurant={restaurant} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
      />
    </div>
    
    <CardFooter className="flex justify-center p-5 border-t border-orange-100 bg-orange-50">
      <CheckoutButton 
        disabled={cartItems.length === 0} 
        onCheckout={onCheckout} 
        isLoading={isCheckoutLoading}
        // className="w-full py-2.5 text-base font-medium transition-all duration-200 rounded-md shadow-md hover:shadow-lg"
      />
    </CardFooter>
  </Card>
</div>
      </div>
    </div>
  );
};

export default DetailPage;