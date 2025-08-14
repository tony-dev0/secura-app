import { Link } from "react-router-dom";

const DriverFound = () => {
  return (
    <div>
      <h4 className="font-bold mb-3 mt-3 text-center">Driver Found</h4>
      <div className="my-10 flex justify-between">
        <div className="flex gap-3">
          <img src="/driver-img.png" alt="" />
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">Lawrence Peter</h4>
            <div className="flex gap-1 items-center">
              <img
                src="/solar_star-line-duotone.png"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-xs">4.5</span>
              <img src="/proicons_call.png" alt="" className="w-4 h-4" />
              <span className="text-xs">+2348012346587</span>
            </div>
          </div>
        </div>
        <img src="/material-symbols_call.png" alt="" />
      </div>
      <Link to={"/payment-method"}>
        <h4 className="text-center font-semibold text-white my-4">
          <button className="bg-black px-10 py-2 rounded-lg">Next</button>
        </h4>
      </Link>
    </div>
  );
};

export default DriverFound;
