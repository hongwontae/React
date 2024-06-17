/* eslint-disable react/prop-types */
function FormationSaveLoad({getQueryToggle}) {
  return (
    <>
      <div className="flex justify-end gap-4 mr-28">
        <button className="border-[1px] text-red-300 p-[1px]" onClick={()=>{
          return getQueryToggle(0)
        }}>Save-1</button>
        <button className="border-[1px] text-red-300 p-[1px]" onClick={()=>{
          return getQueryToggle(1)
        }}>Save-2</button>
        <button className="border-[1px] text-red-300 p-[1px]" onClick={()=>{
          return getQueryToggle(2)
        }}>Save-3</button>
        <button className="border-[1px] text-red-300 p-[1px]" onClick={()=>{
          return getQueryToggle(3)
        }}>Save-4</button>
      </div>
    </>
  );
}

export default FormationSaveLoad;
