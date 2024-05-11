import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  let texareaStyle =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} className={texareaStyle}></textarea>
        ) : (
          <input ref={ref} {...props}></input>
        )}
      </p>
    </>
  )
})

export default Input;
