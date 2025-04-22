import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import { describe, expect, it } from 'vitest'
import Navbar from '../components/navbar/Navbar'

const renderNavbar = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  )

describe('Navbar', () => {
  it('renders logo and title', () => {
    renderNavbar()
    expect(screen.getByAltText(/Book Doctor Logo/i)).toBeInTheDocument()
    expect(screen.getByText(/Book Doctor/i)).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderNavbar()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on button click', () => {
    renderNavbar()
    const button = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(button)

    // Expect some menu link to show after toggle
    const firstLink = screen.getAllByRole('link')[0]
    expect(firstLink).toBeVisible()
  })

})
