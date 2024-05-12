/* eslint-disable react/prop-types */

import { useEffect } from "react";

function Test1() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer Start!");
    }, 2000);
    return ()=>{
        clearInterval(timer);
    }
  }, []);

  return (
    <>
      <h1>Hello-World</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem enim
        esse adipisci, asperiores dolor fugiat ratione dolorum, quasi
        dignissimos non laboriosam reprehenderit inventore quisquam quia? Beatae
        provident neque asperiores quis.
      </p>
    </>
  );
}

export default Test1;
