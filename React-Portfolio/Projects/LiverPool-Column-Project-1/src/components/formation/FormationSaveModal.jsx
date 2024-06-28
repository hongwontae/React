/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { forwardRef, useRef } from "react";

const FormationSaveModal = forwardRef(function FormationSaveModal(
  { title, cancel, save },
  ref
) {
  const inputRef = useRef(null);

  const buttonCss = "rounded-sm p-[0.1rem] bg-red-200 border-[1px]";

  async function formSubmit(e) {
    e.preventDefault();
    await save(inputRef.current.value);
    cancel()
  }

  return createPortal(
    <>
      <dialog
        ref={ref}
        className="rounded-lg p-[2rem] bg-zinc-300 w-2/4 text-center"
      >
        <h1 className="font-bold text-red-500 text-[1.2rem]">{title}</h1>
        <p className="mb-2">현재 포메이션을 저장하시겠습니까?</p>
        <form onSubmit={formSubmit} className="flex flex-col items-center">
          <label htmlFor="title">Title</label>
          <input
            ref={inputRef}
            type="text"
            id="title"
            className="text-center mb-4 w-2/3"
            required
            minLength={5}
          ></input>
          <div className="flex justify-end gap-2">
            <button type="submit" className={buttonCss}>
              Save
            </button>

            <button onClick={cancel} className={buttonCss}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});

export default FormationSaveModal;
