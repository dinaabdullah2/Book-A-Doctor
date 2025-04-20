import React from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
  onConfirm,
  onDecline,
  confirmText = "Confirm",
  declineText = "Decline"
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4  rounded-t ">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
     
          <div className="px-5 pb-5">{children}</div>


          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            {/* {onConfirm && ( */}
              <button
                type="button"
                onClick={onConfirm}
                className="text-white bg-[#364153] hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {confirmText}
              </button>
            {/* )} */}
            {/* {onDecline && ( */}
              <button
                type="button"

                onClick={onClose}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                {declineText}
              </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}