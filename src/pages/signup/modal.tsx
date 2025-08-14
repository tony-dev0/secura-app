import { X } from "lucide-react";
import React from "react";

const Modal = ({
  setShowModal,
  handleRequestCallBack,
  handleEditPhoneNumber,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleRequestCallBack: () => void;
  handleEditPhoneNumber: () => void;
}) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 opacity-50 z-40"
        onClick={() => setShowModal(false)}
      />
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="bg-white rounded-t-3xl w-full max-w-[768px] px-6 py-8 transform transition-transform duration-300 ease-out">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-extrabold text-black">
              Try a different method
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="w-7 h-7 bg-black/40 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X className="text-white" />
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleRequestCallBack}
              className="w-full flex items-center space-x-4 py-4 hover:bg-gray-50  transition-colors text-left"
            >
              <div className="w-6 h-6">
                <img src="/icons/proicons_call.svg" />
              </div>
              <span className="text-black font-medium">Request call back</span>
            </button>

            <button
              onClick={handleEditPhoneNumber}
              className="w-full flex items-center space-x-4 py-4 hover:bg-gray-50 rounded-lg transition-colors text-left"
            >
              <div className="w-6 h-6">
                <img src="/icons/iconamoon_edit-light.svg" />
              </div>
              <span className="text-black font-medium">Edit phone number</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
