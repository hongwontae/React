import { useContext } from "react";
import { PriceContext } from "../context/PriceContextProvider";

function TestComponent() {
  const { oneIcePrice, twoIcePrice, totalPrice, setPriceData } =
    useContext(PriceContext);

  return (
    <>
      <label htmlFor="oneP">One-Price</label>
      <input
        aria-label="oneP"
        id="oneP"
        type="number"
        onChange={(e) =>
          setPriceData((prev) => {
            return {
              ...prev,
              oneIcePrice: e.target.value,
              totalPrice: Number(e.target.value) + Number(prev.twoIcePrice),
            };
          })
        }
      ></input>
      <div>{oneIcePrice}</div>

      <label htmlFor="twoP">Two-price</label>
      <input
        id="twoP"
        aria-label="twoP"
        type="number"
        onChange={(e) =>
          setPriceData((prev) => {
            return {
              ...prev,
              twoIcePrice: e.target.value,
              totalPrice: Number(e.target.value) + Number(prev.oneIcePrice),
            };
          })
        }
      ></input>
      <div>{twoIcePrice}</div>

      <div role="term" aria-label="totalPrice">{totalPrice}</div>
    </>
  );
}

export default TestComponent;
