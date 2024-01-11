import { render, screen } from '@testing-library/react';
import SignUp from '../Pages/SignUp'
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    
    it("has a heading", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
    
        screen.logTestingPlaygroundURL()
    
        const signin = screen.getByRole("heading", {
            name: /Sign Up/i
        })
    })
})