import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import { Building2, ClipboardList, ArrowDownUp } from "lucide-react";
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

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders = [] }: { orders?: Order[] } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Restaurant Dashboard</h1>
        <p className="text-gray-600">Manage your restaurant and track orders in real-time</p>
      </div>
      
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger 
            value="orders" 
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2 py-3"
          >
            <ClipboardList size={18} />
            Active Orders
          </TabsTrigger>
          <TabsTrigger 
            value="manage-restaurant" 
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2 py-3"
          >
            <Building2 size={18} />
            Restaurant Details
          </TabsTrigger>
        </TabsList>
        
        <TabsContent
          value="orders"
          className="space-y-6"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{orders?.length || 0} Active Orders</h2>
              <p className="text-orange-100">Manage your current orders and update their status</p>
            </div>
            <ArrowDownUp size={32} className="text-orange-200" />
          </div>
          
          {orders && orders.length > 0 ? (
            <div className="grid gap-6">
              {orders.map((order) => (
                <OrderItemCard key={order._id} order={order} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No active orders</h3>
              <p className="text-gray-600">New orders will appear here when customers place them</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="manage-restaurant" className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Building2 className="text-orange-500" size={24} />
            {isEditing ? "Update Restaurant Details" : "Create Your Restaurant"}
          </h2>
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageRestaurantPage;