import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-yellow-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 shadow-md px-6 py-2 bg-white rounded-lg">
        🌍 Interactive Map by Nishant
      </h1>
      <h3 className="text-xl font-bold text-gray-800 mb-6 shadow-md px-6 py-2 ">Try clicking on the Marker</h3>
      <MapComponent />
    </div>
  );
}

export default App;
