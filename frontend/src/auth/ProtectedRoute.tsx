import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  const loginNotFoundToast = () => toast.error("Uh Oh! You have to login first!", { position: "bottom-right" });

  return <>
    <Navigate to="/" replace />
    {loginNotFoundToast()}
  </>;
};

export default ProtectedRoute;
