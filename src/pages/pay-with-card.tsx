import { Link } from "react-router-dom";

const PayWithCard = () => {
  return (
    <div className="mt-7 mb-3">
      <h4 className="font-bold-xl text mb-3 mt-3 text-center">Pay With Card</h4>
      <div className="mt-3 mb-3">
        <div className="box bg-[#fbfbfb] py-2 px-3 my-3 flex gap-4 rounded-2xl active">
          <img src="mcard.png" alt="" />
          <div className="flex flex-col">
            <h6 className="font-semibold">MasterCard</h6>
            <span className="text-xs">..................45826</span>
          </div>
        </div>
        <div className="box bg-[#fbfbfb] py-2 px-3 my-3 flex gap-4 items-center rounded-2xl">
          <img src="card.png" alt="" />
          <div>
            <h6 className="font-semibold">Add a new Card </h6>
          </div>
        </div>
      </div>
      <Link to={"/heading-approaching"}>
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

export default PayWithCard;
