import { render, screen } from '@testing-library/react'
import Header from '../Components/Header'
import FoodLogo from '../Assets/Food-logo.png'
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
    it("has an image", () => {
      render(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
      )
  
      const image = screen.getByRole("img")
      expect(image).toHaveAttribute("src", FoodLogo)
    })
  })