import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Components', () => {
    test('renders Https?', async()=>{

        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json : async ()=>[{id : 'p1', title : 'First post'}]
        });

        render(<Async/>)
        const listItem = await screen.findAllByRole('listitem');
        expect(listItem).not.toHaveLength(0);
    })
})
