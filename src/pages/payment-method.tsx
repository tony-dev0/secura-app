import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <div>
      <h4 className="font-bold mb-3 mt-3 text-center">Choose Payment Method</h4>
      <div className="mt-3 mb-3">
        <div className="box bg-[#fbfbfb] py-2 px-3 my-3 flex gap-2 rounded-2xl active">
          <img src="cash.png" alt="" />
          <div className="flex flex-col">
            <h6 className="font-semibold">Cash</h6>
            <span className="text-xs">Pay Directly to the Driver</span>
          </div>
        </div>
        <div className="box bg-[#fbfbfb] py-2 px-3 my-3 flex gap-2 rounded-2xl">
          <img src="card.png" alt="" />
          <div className="flex flex-col">
            <h6 className="font-semibold">Pay with Card </h6>
            <span className="text-xs">Pay on the app</span>
          </div>
        </div>
      </div>
      <Link to={"/pay-with-card"}>
        <h6 className="text-center my-6">
          <button className="bg-black text-white px-10 py-2 font-semibold rounded-lg">
            {" "}
            Book Ride
          </button>{" "}
        </h6>
      </Link>
    </div>
  );
};

export default PaymentMethod;
