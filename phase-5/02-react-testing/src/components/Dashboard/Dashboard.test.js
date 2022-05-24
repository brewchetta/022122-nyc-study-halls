import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Dashboard from './Dashboard';

// HELPERS

jest.mock("./Calendar", () => {
  return function DummyCalendar() {
    return (
      <div className="mock-calendar">Hi I am mocked!</div>
    );
  };
});

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
test('renders with a mocked calendar', () => {
  render(<Dashboard />, container)

  const mockCal = document.querySelector('.mock-calendar')

  expect(mockCal).toBeTruthy()
})
