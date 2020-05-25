import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders click button', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Click/i)
  expect(linkElement).toBeInTheDocument()
})
