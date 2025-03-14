import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Layout/Layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import BecomeOwner from "./pages/BecomeOwner";



function App() {

return (
    <>
	<Routes>
		<Route
			path="/"
			element={
			<Layout showHero>
				<HomePage />
			</Layout>
			}
		/>
		<Route path="/auth-callback" element={<AuthCallbackPage />} />
		<Route
			path="/search/:city"
			element={
			<Layout showHero={false}>
				<SearchPage />
			</Layout>
			}
		/>
		<Route
			path="/detail/:restaurantId"
			element={
			<Layout showHero={false}>
				<DetailPage />
			</Layout>
			}
		/>
		<Route element={<ProtectedRoute />}>
			<Route
			path="/order-status"
			element={
				<Layout>
				<OrderStatusPage />
				</Layout>
			}
			/>
			<Route
			path="/user-profile"
			element={
				<Layout>
				<UserProfilePage />
				</Layout>
			}
			/>
			<Route
			path="/manage-restaurant"
			element={
				<Layout>
				<ManageRestaurantPage />
				</Layout>
			}
			/>
			<Route
			path="/become-owner"
			element={
				<Layout>
				<BecomeOwner />
				</Layout>
			}
			/>
		</Route>
		<Route path="*" element={<Navigate to = "/" />} />
	</Routes>
    </>
)
}

export default App
