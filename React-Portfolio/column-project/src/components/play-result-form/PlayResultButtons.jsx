/* eslint-disable react/prop-types */
function PlayResultButtons({ resetHandler }) {
  return (
    <>
      <div className="mt-8 flex justify-end gap-4 mr-4">
        <button
          className="border-[1px] p-2 rounded-lg"
          onClick={resetHandler}
          type="button"
        >
          Reset
        </button>
        <button className="border-[1px] p-2 rounded-lg" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}

export default PlayResultButtons;
