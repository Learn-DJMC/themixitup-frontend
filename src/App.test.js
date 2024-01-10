import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

describe("<Home /", () => {
  it('has a heading', () => {
    render(<BrowserRouter>
    <App />
    </BrowserRouter>) 

screen.logTestingPlaygroundURL

  const heading = screen.getByRole('heading')
  expect(heading).toBeInTheDocument()
})
})
