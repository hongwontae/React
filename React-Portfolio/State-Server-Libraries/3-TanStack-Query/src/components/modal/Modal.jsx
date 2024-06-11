/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { createPortal } from "react-dom";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal(
  { children, onSucess, onCloseHandler },
  ref
) {
  return createPortal(
    <dialog ref={ref} onClose={onCloseHandler}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-4 py-5 sm:p-6 text-slate-700">{children}</div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <form method="dialog">
              <button
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onCloseHandler}
              >
                Close
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onSucess}
              >
                Resister
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("root")
  );
});

export default Modal;
