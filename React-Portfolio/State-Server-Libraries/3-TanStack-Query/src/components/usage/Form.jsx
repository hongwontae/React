/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { forwardRef, useImperativeHandle, useRef } from "react";

const Form = forwardRef(function Form(
  { children, modalShow, downHandler },
  ref
) {
  const { titleRef, contentRef } = ref;

  const input1 = useRef(null);
  const input2 = useRef(null);

  useImperativeHandle(titleRef, () => {
    return {
      getTitle() {
        return input1.current.value;
      },
      clearTitle() {
        input1.current.value = "";
      },
    };
  });

  useImperativeHandle(contentRef, () => {
    return {
      getContent() {
        return input2.current.value;
      },
      clearContent() {
        input2.current.value = "";
      },
    };
  });

  return (
    <>

      <div className=" w-3/4 flex justify-center bg-gray-800 m-auto rounded-lg mb-10">
        <div className=" p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {children}
          </h2>
          <form onSubmit={modalShow}>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Your Name"
                required
                minLength={5}
                ref={input1}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                className="w-full h-128 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="content"
                rows="4"
                placeholder="Your content"
                ref={input2}
              ></textarea>
            </div>
            <div className="flex justify-end gap-5">
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={downHandler}
                type="button"
              >
                reset
              </button>
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submut"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default Form;
