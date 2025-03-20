import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { UserCircle, MapPin, Mail, Home, Building, Globe } from "lucide-react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});


export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
  };
  

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};


const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Save Changes",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
      >
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 p-2 bg-orange-100 rounded-full">
              <UserCircle className="w-10 h-10 text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <FormDescription className="text-gray-600">
                View and change your profile information here
              </FormDescription>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="p-4 border border-orange-100 rounded-lg bg-orange-50">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-800">
              <Mail className="mr-2 text-orange-500" size={20} />
              Account Information
            </h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        disabled 
                        className="bg-white border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50" 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50" 
                        placeholder="Enter your full name"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="p-4 border border-orange-100 rounded-lg bg-orange-50">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-800">
              <MapPin className="mr-2 text-orange-500" size={20} />
              Delivery Address
            </h3>
            <div className="flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex items-center text-gray-700">
                      <Home className="w-4 h-4 mr-1 text-orange-400" />
                      Address Line
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50" 
                        placeholder="Street address"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex items-center text-gray-700">
                      <Building className="w-4 h-4 mr-1 text-orange-400" />
                      City
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50" 
                        placeholder="Your city"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex items-center text-gray-700">
                      <Globe className="w-4 h-4 mr-1 text-orange-400" />
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50" 
                        placeholder="Your country"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-100">
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button 
              type="submit" 
              className="px-6 text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-md"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default UserProfileForm;