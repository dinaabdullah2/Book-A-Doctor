import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../components/layout/modal'


describe('Modal component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    onConfirm: vi.fn(),
    confirmText: 'Yes',
    declineText: 'No',
    disabled: false,
    children: <p>Modal content</p>,
  }

  it('renders when isOpen is true', () => {
    render(<Modal {...defaultProps} />)
    expect(screen.getByText(/modal content/i)).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />)
    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<Modal {...defaultProps} />)
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    fireEvent.click(closeButton)
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('calls onConfirm when confirm button is clicked', () => {
    render(<Modal {...defaultProps} />)
    const confirmButton = screen.getByRole('button', { name: /yes/i })
    fireEvent.click(confirmButton)
    expect(defaultProps.onConfirm).toHaveBeenCalled()
  })

  it('calls onClose when decline button is clicked', () => {
    render(<Modal {...defaultProps} />)
    const declineButton = screen.getByRole('button', { name: /no/i })
    fireEvent.click(declineButton)
  })

  it('disables confirm button when disabled=true', () => {
    render(<Modal {...defaultProps} disabled={true} />)
    const confirmButton = screen.getByRole('button', { name: /yes/i })
    expect(confirmButton).toBeDisabled()
  })
})
