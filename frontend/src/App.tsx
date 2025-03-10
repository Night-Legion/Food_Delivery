import Navbar from "./components/Navbar"


function App() {

return (
    <>
	<Navbar />
    <div className="mx-auto bg-amber-200">
	<div className="flex flex-col justify-center items-center h-screen space-y-6 text-center">
		<img src="/favicon.png" alt="logo" className="w-24 h-24" />
		<h1 className="text-5xl font-bold">Hungrr</h1>
		<div className="space-y-4">
			<h1 className="text-4xl font-semibold">🚧 Something is Cooking 🚧</h1>
			<h3 className="text-gray-500 text-lg">Come back tomorrow to see the website....</h3>
		</div>
	</div>
</div>
    </>
)
}

export default App
