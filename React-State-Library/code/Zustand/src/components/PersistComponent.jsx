import { useStore } from "../store/PersistTestState";

function PersistComponent() {
  const { inputData, nameHandler, ageHandler } = useStore();
  console.log(inputData);

  return (
    <>
      <div>
        <label>Name</label>
        <input type="text" onChange={(e) => nameHandler(e)} value={inputData.name}></input>

        <label>Age</label>
        <input type="number" onChange={(e) => ageHandler(e)} value={inputData.age}></input>
      </div>
    </>
  );
}

export default PersistComponent;
