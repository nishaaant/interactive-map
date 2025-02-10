import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const initialPosition = { lat: 28.6139, lng: 77.2090 }; // New Delhi, India

const MapComponent = () => {
  const [marker, setMarker] = useState(initialPosition); // Default marker at New Delhi

  // Custom hook to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        setMarker(e.latlng); // Update marker position on click
      },
    });
    return null;
  };

  return (
    <div className="w-full max-w-4xl h-[500px] flex justify-center items-center rounded-lg overflow-hidden shadow-xl">
      <MapContainer center={initialPosition} zoom={12} className="w-full h-full rounded-lg">
        {/* Tile Layer (Map) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Handle Map Clicks */}
        <MapClickHandler />

        {/* Display Marker & Popup */}
        {marker && (
          <Marker position={marker}>
            <Popup className="text-center font-semibold">
              📍 Marker added! <br />
              Latitude: {marker.lat.toFixed(4)} <br />
              Longitude: {marker.lng.toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
