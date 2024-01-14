import Player from "./components/Player";

let player = [
  { name: "salah", age: 30 },
  { name: "Kevin", age: 30 },
  { name : 'Azard', age : 30},
  {name : 'Alonse', age : 40},
];

let superStar = {name : 'ffff', age : '1111'}


function App() {
  return (
    <>
      <Player {...superStar}></Player>
    </>
  );
}

export default App;
