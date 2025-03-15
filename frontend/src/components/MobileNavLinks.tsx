import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, ShoppingBag, Store, User } from "lucide-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return (
        <div className="flex flex-col space-y-4">
            <Link
                to="/order-status"
                className="flex items-center gap-3 px-2 py-2 rounded-md font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
                <ShoppingBag size={18} className="text-orange-500" />
                Order Status
            </Link>
            <Link
                to="/manage-restaurant"
                className="flex items-center gap-3 px-2 py-2 rounded-md font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
                <Store size={18} className="text-orange-500" />
                My Restaurant
            </Link>
            <Link
                to="/user-profile"
                className="flex items-center gap-3 px-2 py-2 rounded-md font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
                <User size={18} className="text-orange-500" />
                User Profile
            </Link>
            <Button
                onClick={() => logout()}
                className="flex items-center justify-center gap-2 mt-2 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            >
                <LogOut size={18} />
                Log Out
            </Button>
        </div>
    );
};

export default MobileNavLinks;