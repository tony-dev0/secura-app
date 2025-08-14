import { MapPin } from "lucide-react";

const MapPlaceholder = () => {
  return (
    <div className="relative h-[60vh] bg-gray-200 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="absolute top-8 left-8 text-gray-600 text-sm font-medium">
          Gym house
        </div>
        <div className="absolute top-16 right-16 text-gray-600 text-sm font-medium">
          William Street
        </div>
        <div className="absolute top-32 right-8 text-gray-600 text-sm font-medium">
          Eagle Square
        </div>
        <div className="absolute bottom-32 left-8 text-gray-600 text-sm font-medium">
          Mile 7
        </div>
        <div className="absolute bottom-24 left-32 text-gray-600 text-sm font-medium">
          Balewa blvd.
        </div>
        <div className="absolute bottom-16 right-24 text-gray-600 text-sm font-medium">
          Mushin
        </div>
        <div className="absolute bottom-8 left-16 text-gray-600 text-sm font-medium">
          Johnson Cl.
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-lg font-semibold">
          South Side
        </div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-white opacity-50"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-white opacity-50"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-white opacity-50"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-white opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="w-12 h-12 bg-teal-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
