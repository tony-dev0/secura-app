import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/destinationSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [destinationInput, setDestinationInput] = useState("");
  const gomapsApiKey = import.meta.env.VITE_GOMAPS_API_KEY;
  const dispatch = useDispatch();
  // When user selects a suggestion, fetch its details
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSuggestionClick = async (
    placeId: string,
    description: string
  ) => {
    try {
      setSuggestions([]); // Hide suggestions immediately
      // if (inputRef.current) {
      //   inputRef.current.blur();
      // }

      const res = await axios.get(
        "https://maps.gomaps.pro/maps/api/place/details/json",
        {
          params: {
            placeid: placeId,
            key: gomapsApiKey,
          },
        }
      );
      const loc = res.data.result.geometry.location;
      // setDestination({ lat: loc.lat, lng: loc.lng }); // If you use this elsewhere, keep it
      setDestinationInput(description);
      dispatch(setDestination({ lat: loc.lat, lng: loc.lng }));

      const timer = setTimeout(() => {
        navigate("/driver-found");
      }, 4000);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Error fetching place details:", err);
    }
  };

  // Fetch autocomplete suggestions from GoMaps Pro Places API
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (destinationInput.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await axios.get(
          "https://maps.gomaps.pro/maps/api/place/autocomplete/json",
          {
            params: {
              input: destinationInput,
              key: gomapsApiKey,
            },
          }
        );
        setSuggestions(res.data.predictions || []);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            console.error(
              "Error fetching autocomplete:",
              err.response.data,
              err.response.status
            );
          } else if (err.request) {
            console.error(
              "Error fetching autocomplete: No response received",
              err.request
            );
          } else {
            console.error("Error fetching autocomplete:", err.message);
          }
        } else {
          console.error("Error fetching autocomplete:", err);
        }
      }
    };
    fetchSuggestions();
  }, [destinationInput, gomapsApiKey]);

  return (
    <div className="home">
      <h4 className="font-bold mb-3 mt-3">Where to?</h4>
      <div
        style={{ marginBottom: "10px", width: "320px", position: "relative" }}
      >
        <div className="location-container flex items-center">
          <div className="location-img">
            <img src="/location.png" alt="" className="location" />
          </div>

          <input
            ref={inputRef}
            type="text"
            className="custom w-full"
            placeholder=""
            value={destinationInput}
            onChange={(e) => {
              setDestinationInput(e.target.value);
            }}
            style={{ width: "300px", padding: "5px" }}
          />
        </div>
        {suggestions.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "35px",
              left: 0,
              width: "300px",
              background: "white",
              border: "1px solid #ccc",
              zIndex: 10,
              listStyle: "none",
              margin: 0,
              padding: 0,
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {suggestions.map((s) => (
              <li
                key={s.place_id}
                style={{ padding: "8px", cursor: "pointer" }}
                onClick={() => handleSuggestionClick(s.place_id, s.description)}
              >
                {s.description}
              </li>
            ))}
          </ul>
        )}
      </div>
      <h6 className="text-gray-500 my-3">Frequent Destinations</h6>
      <div className="flex items-center justify-around">
        <div className="footer-nav text-sm font-semibold">Home</div>
        <div className="footer-nav text-sm font-semibold">Office</div>
        <div className="footer-nav text-sm font-semibold">Appartment</div>
        <div className="footer-nav text-sm font-semibold">Gym</div>
      </div>
    </div>
  );
};

export default Home;
