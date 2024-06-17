/* eslint-disable react/prop-types */
function FormationButtons({
  resetStartingMemberButton,
  resetSubMemberButton,
  allReset,
  formationSave,
}) {
  return (
    <>
      <div className="flex justify-end gap-4 mr-14">
        <button
          className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl"
          onClick={resetStartingMemberButton}
        >
          ResetStartingMember
        </button>
        <button
          className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl"
          onClick={resetSubMemberButton}
        >
          ResetSubMember
        </button>
        <button
          className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl"
          onClick={allReset}
        >
          AllReset
        </button>
        <button
          className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl"
          onClick={formationSave}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default FormationButtons;