/* eslint-disable testing-library/no-dom-import */
import SummaryForm from '../summary/SummaryForm';
import {render, screen} from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

test('Summary-from checkbox test', ()=>{
    render(<SummaryForm/>)

    const checkbox = screen.getByRole('checkbox', {name : /term/i});
    expect(checkbox).not.toBeChecked()

    const buttonElement = screen.getByRole('button', {name : /confirm order/i});
    expect(buttonElement).toBeDisabled()
})

test('interaction test', async ()=>{
    render(<SummaryForm></SummaryForm>)

    const user = UserEvent.setup();

    const checkbox = screen.getByRole('checkbox', {name : /term/i});
    const buttonElement = screen.getByRole('button', {name : /confirm order/i});

    await user.click(checkbox);
    expect(buttonElement).toBeEnabled()
    
    await user.click(checkbox);
    expect(buttonElement).toBeDisabled()
})

test('popover test', async ()=>{
    render(<SummaryForm/>)
    const user = UserEvent.setup();

    const popover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(popover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover2 = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover2).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover2).not.toBeInTheDocument();
    

})