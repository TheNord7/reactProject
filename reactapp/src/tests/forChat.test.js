import Chats from "../pages/Chats";
import { render } from "@testing-library/react";

describe('Chats render test', () => {
    it('snapshot test', () => {
        const component = render(<Chats />)

        expect(component).toMatchSnapshot();
    })
});