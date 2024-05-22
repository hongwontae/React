/* eslint-disable no-unused-vars */
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "hwt1",
  },
  {
    id: 2,
    name: "hwt2",
  },
  {
    id: 3,
    name: "hwt3",
  },
  {
    id: 4,
    name: "hwt4",
  },
  {
    id: 5,
    name: "hwt5",
  },
  {
    id: 6,
    name: "hwt6",
  },
];

function General() {

    const [shoot, setShoot] = useState([]);

    function addItem(item){
        setShoot(prevState=>{
            return [
                ...prevState,
                {...item}
            ]
        })
    }
    console.log(shoot)

  return (
    <>
      <div>Map</div>
      {data.map((ele) => {
        return (
          <>
            <div key={ele.id}>{ele.name}</div>
            <button onClick={()=>addItem(ele)}>Plus!</button>
          </>
        );
      })}
    </>
  );
}

export default General;
