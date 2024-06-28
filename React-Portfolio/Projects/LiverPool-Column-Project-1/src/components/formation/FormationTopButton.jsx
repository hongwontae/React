/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function FormationTopButton({ resetPlayer, resetSubPlayer, allReset, deleteData, saveOpenHandler }) {
  const CssButton = "border-[1px] p-[0.1rem] bg-red-600 rounded-sm";

  return (
    <>
      <div className="flex flex-row justify-end mr-10 gap-6">
        <button className={CssButton} onClick={resetPlayer}>
          Starting-Reset
        </button>
        <button className={CssButton} onClick={resetSubPlayer}>
          Sub-Reset
        </button>
        <button className={CssButton} onClick={allReset}>
          All-Reset
        </button>
        <button className={CssButton} onClick={saveOpenHandler}>Save</button>


        <button className={CssButton} onClick={deleteData}>delete</button>

      </div>
    </>
  );
}

export default FormationTopButton;
