import { render, screen } from '@testing-library/react';
import SignIn from '../Pages/SignIn'
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    
    it("has a heading", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
    
        screen.logTestingPlaygroundURL()
    
        const signin = screen.getByRole("heading", {
            name: /Sign In/i
        })
    })
})