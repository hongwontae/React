import { createContext, useState } from "react";

export const PriceContext = createContext({
  oneIcePrice: 0,
  twoIcePrice: 0,
  totalPrice: 0,
  setPriceData : ()=>{}
});

export default function PriceContextProvider({ children }) {
  const [priceData, setPriceData] = useState({
    oneIcePrice: 0,
    twoIcePrice: 0,
    totalPrice: 0,
  });

  const priceCtx = {
    oneIcePrice: priceData.oneIcePrice,
    twoIcePrice: priceData.twoIcePrice,
    totalPrice: priceData.totalPrice,
    setPriceData
  };

  return (
    <PriceContext.Provider value={priceCtx}>{children}</PriceContext.Provider>
  );
}
