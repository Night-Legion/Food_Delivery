import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, PackageCheck } from "lucide-react";
export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
  };
  
  export type MenuItem = {
      _id: string;
      name: string;
      price: number;
  };
  
  export type Restaurant = {
      _id: string;
      user: string;
      restaurantName: string;
      city: string;
      country: string;
      deliveryPrice: number;
      estimatedDeliveryTime: number;
      cuisines: string[];
      menuItems: MenuItem[];
      imageUrl: string;
      lastUpdated: string;
  };
  
  export type OrderStatus =
      | "placed"
      | "paid"
      | "inProgress"
      | "outForDelivery"
      | "delivered";
  
  export type Order = {
      _id: string;
      restaurant: Restaurant;
      user: User;
      cartItems: {
      menuItemId: string;
      name: string;
      quantity: string;
      }[];
      deliveryDetails: {
      name: string;
      addressLine1: string;
      city: string;
      email: string;
      };
      totalAmount: number;
      status: OrderStatus;
      createdAt: string;
      restaurantId: string;
  };
  
  export type RestaurantSearchResponse = {
      data: Restaurant[];
      pagination: {
      total: number;
      page: number;
      pages: number;
      };
  };

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-10 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <PackageCheck size={32} className="text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">No orders found</h2>
        <p className="text-gray-600 mb-6">
          You haven't placed any orders yet. Browse our restaurants and find something delicious!
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Explore Restaurants
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order History</h1>
        <p className="text-gray-600">Track the status of your recent orders</p>
      </div>
      
      <div className="space-y-8">
        {orders.map((order) => (
          <div 
            key={order._id} 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-shadow hover:shadow-lg"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={16} />
                <span className="text-sm font-medium">Order placed on {new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <OrderStatusHeader order={order} />
            </div>
            
            <div className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <OrderStatusDetail order={order} />
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={order.restaurant.imageUrl}
                      alt={order.restaurant.restaurantName}
                      className="rounded-md object-cover h-full w-full shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 24 24" fill="none" stroke="%23f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E';
                      }}
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">
                      {order.restaurant.restaurantName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusPage;