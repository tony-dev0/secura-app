import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
// Spinner CSS
const spinnerStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60px",
  height: "60px",
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #3498db",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
  zIndex: 100,
};

const spinnerKeyframes = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "/marker-icon-2x.png";
import markerIcon from "/marker-icon.png";
import markerShadow from "/marker-shadow.png";

// Custom red marker icon
const redMarkerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
interface LatLng {
  lat: number;
  lng: number;
}

const MapWithRoute = () => {
  const gomapsApiKey = import.meta.env.VITE_GOMAPS_API_KEY;
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [routeCoords, setRouteCoords] = useState<LatLng[]>([]);
  // Get destination from Redux store (LatLng)
  const destination = useSelector((state: RootState) => state.destination);
  const mapRef = useRef<L.Map | null>(null);

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setOrigin({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Unable to fetch your location");
      }
    );
  }, []);

  // Fetch route when both origin & destination are set
  useEffect(() => {
    if (
      origin &&
      destination &&
      typeof destination.lat === "number" &&
      typeof destination.lng === "number" &&
      (destination.lat !== 0 || destination.lng !== 0)
    ) {
      fetchRoute();
    }
  }, [origin, destination]);

  // When user selects a suggestion, fetch its details
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const handleSuggestionClick = async (
  //   placeId: string,
  //   description: string
  // ) => {
  //   try {
  //     setSuggestions([]); // Hide suggestions immediately
  //     if (inputRef.current) inputRef.current.blur();
  //     const res = await axios.get(
  //       "https://maps.gomaps.pro/maps/api/place/details/json",
  //       {
  //         params: {
  //           placeid: placeId,
  //           key: gomapsApiKey,
  //         },
  //       }
  //     );
  //     const loc = res.data.result.geometry.location;
  //     setDestination({ lat: loc.lat, lng: loc.lng });
  //     setDestinationInput(description);
  //   } catch (err) {
  //     console.error("Error fetching place details:", err);
  //   }
  // };

  const fetchRoute = async () => {
    try {
      const res = await axios.get(
        "https://maps.gomaps.pro/maps/api/directions/json",
        {
          params: {
            origin: `${origin?.lat},${origin?.lng}`,
            destination: destination
              ? `${destination.lat},${destination.lng}`
              : "",
            key: gomapsApiKey,
          },
        }
      );

      if (res.data.routes?.length > 0) {
        const points = decodePolyline(
          res.data.routes[0].overview_polyline.points
        );
        setRouteCoords(points);
      }
    } catch (err) {
      console.error("Error fetching route:", err);
    }
  };

  // Decode Google-style encoded polyline
  function decodePolyline(encoded: string) {
    let points = [];
    let index = 0,
      lat = 0,
      lng = 0;

    while (index < encoded.length) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ lat: lat / 1e5, lng: lng / 1e5 });
    }
    return points;
  }

  return (
    <div style={{ position: "relative", minHeight: "500px" }}>
      {/* Inject spinner keyframes */}
      <style>{spinnerKeyframes}</style>

      {!origin && <div style={spinnerStyle}></div>}
      {origin && (
        <MapContainer
          center={origin}
          zoom={8}
          style={{ height: "500px", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={origin}>
            <Popup>You are here</Popup>
          </Marker>

          {destination && (
            <Marker position={destination} icon={redMarkerIcon}>
              <Popup>Destination</Popup>
            </Marker>
          )}

          {routeCoords.length > 0 && (
            <Polyline positions={routeCoords} color="green" weight={4} />
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default MapWithRoute;
