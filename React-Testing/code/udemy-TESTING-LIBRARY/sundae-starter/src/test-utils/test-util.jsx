import { render } from "@testing-library/react";
import PriceContextProvider from "../context/PriceContextProvider";

const CustomeRender = (ui, options) => {
  return render(ui, {
    wrapper: ({ children }) => {
      return <PriceContextProvider>{children}</PriceContextProvider>;
    },
    ...options
  });
};

export * from '@testing-library/react';

export {CustomeRender as render};
