import { render, screen, fireEvent } from "@testing-library/react";
import { getByRole, logRoles } from "@testing-library/dom";
import App from "./App";

test('test button checked box interaction', ()=>{
  render(<App/>)
  const buttonElement = screen.getByRole('button', {name : /blue/i})
  const checkboxElement = screen.getByRole('checkbox', {name : /dbc/i})
  expect(buttonElement).toBeEnabled()
  expect(checkboxElement).not.toBeChecked()

  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeDisabled()

  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeEnabled()



})

test('button color test', ()=>{
  render(<App/>)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toHaveClass('red')

  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveClass('blue')

  const checkbox = screen.getByRole('checkbox', {name : /dbc/i})
  fireEvent.click(checkbox)
  expect(buttonElement).toBeDisabled()
  expect(buttonElement).toHaveClass('gray')
})

describe('', () => {
  test();
  test();
  test();
})
