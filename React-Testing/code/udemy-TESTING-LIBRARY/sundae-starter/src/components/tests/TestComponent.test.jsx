import {render, screen} from '../../test-utils/test-util';
import TestComponent from '../TestComponent';
import {userEvent} from '@testing-library/user-event';
test('tt', async ()=>{
    const user = userEvent.setup();
    render(<TestComponent/>);

    const onePriceElement = screen.getByRole('spinbutton', {name : 'oneP'})
    await user.clear(onePriceElement);
    await user.type(onePriceElement, '1')
    expect(onePriceElement).toHaveValue(1)

    const twoPriceElement = screen.getByRole('spinbutton', {name : 'twoP'});
    const totalPriceElement = screen.getByRole('term', {name : 'totalPrice'});
    await user.clear(twoPriceElement);
    await user.clear(onePriceElement);
    await user.type(twoPriceElement, '200');
    await user.type(onePriceElement, '100');

    expect(totalPriceElement).toHaveTextContent('300')



    
})