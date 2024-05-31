import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent, {useEvent} from '@testing-library/user-event'

describe("Greeing Components", () => {
  test("renders Hello World", () => {
    render(<Greeting></Greeting>);

    //assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('string check', ()=>{
    render(<Greeting></Greeting>)
    const horp = screen.getByText('HHHHHH');
    expect(horp).toBeInTheDocument();
  });

  test('button click state change check', ()=>{
    render(<Greeting></Greeting>)

    const buttonElement = screen.getByText('Button');
    userEvent.click(buttonElement);

    const existingElement = screen.getByText('PPPPP');
    expect(existingElement).toBeInTheDocument();
  })

});
