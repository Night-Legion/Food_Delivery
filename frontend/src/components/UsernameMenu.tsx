import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    const LOGOUT_REDIRECT_URL = import.meta.env.VITE_AUTH0_LOGOUT_URL;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
                <CircleUserRound className="text-orange-500" />
                {user?.name ? "Welcome, " + user.name : user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/become-owner" className="font-bold hover:text-orange-500">
                        Become Owner
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-orange-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: LOGOUT_REDIRECT_URL,
                                },
                            })
                        }
                        className="flex flex-1 font-bold bg-orange-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;
