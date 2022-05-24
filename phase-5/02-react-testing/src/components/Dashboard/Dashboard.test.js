import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Dashboard from './Dashboard';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


// DASHBOARD RENDERS
test('renders Dashboard', () => {
  render(<Dashboard />, container)

  const dashboard = document.querySelector('div.dashboard')

  expect(dashboard).toBeTruthy();
});



// DASHBOARD ABLE TO RENDER WITH A MOCKED CALENDAR
jest.mock("./Calendar", () => {
  return function DummyNumbers() {
    return (
      <div>
        <p>I am mocked</p>
      </div>
    )
  }
})



test('example mocking something different', () => {
  render(<Dashboard />, container)

  expect(document.querySelector('p').textContent).toBe("I am mocked")
})
