/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { forwardRef, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CustomModal = forwardRef(function CustomModal({ close, title, id }, ref) {
  const navigate = useNavigate();

  const [errorData, setErrorData] = useState(null);

  async function deleteHandler() {
    const response = await fetch("http://localhost:5000/delete/remove", {
      method: "POST",
      body: JSON.stringify({ id: id, iden: "delete" }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("요청 중 에러 발생");
    }

    const resData = await response.json();

    console.log(resData);

    if (resData.status == true) {
      return navigate("/play-result?page=1");
    } else if (resData.errorData.status == false) {
      setErrorData(resData.errorData.message);
    }
  }

  function closeHandler(){
    setErrorData(null)
    close()
  }

  return (
    <>
      <dialog ref={ref} onClose={closeHandler} className="w-72 rounded-lg p-10">
        <h1 className="font-bold mb-2">Delete {title} want?</h1>
        <div className="text-red-500 font-bold mt-2 mb-2">{errorData && errorData}</div>
        <div className="flex flex-row justify-end gap-4">
          <button
            onClick={closeHandler}
            className="border-[1px] rounded-lg border-black p-1"
          >
            Back
          </button>
          <button
            className="border-[1px] rounded-lg border-black p-1"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </dialog>
    </>
  );
});

export default CustomModal;
