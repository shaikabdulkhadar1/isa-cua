import React, { useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CUAmap = () => {
  const mapRef = useRef(null);
  const latitude = 38.9368811;
  const longitude = -77.0012669;
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      ref={mapRef}
      style={{
        height: "370px",
        width: "700px",
        borderRadius: "10px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}></Marker>
    </MapContainer>
  );
};

export default CUAmap;
