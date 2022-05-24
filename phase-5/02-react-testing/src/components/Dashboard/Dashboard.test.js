// this one will feel a bit different
// basically, right here we're pretending the 'Calendar' component is very complex
// maybe it fetches all your data from googlecal and renders it in a computationally demanding way
// we don't want to test our dashboard with such a computationally complex component
// we just want to test that our dashboard works
// so.... we'll substitute our Calendar with a DummyCalendar
// ( yes I know the real calendar I created is just a div but let's pretend it's not )
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Dashboard from './Dashboard';

// HELPERS

// this will create a `mock` calendar for us
// jest.mock will intercept our `import Calendar from "./Calendar"`
// it will replace what we'd normally get with this quick DummyCalendar
jest.mock("./Calendar", () => {
  return function DummyCalendar() {
    return (
      <div className="mock-calendar">Hi I am mocked!</div>
    );
  };
  // DummyCalendar is actually just a very quickly built functional component
});

// from here on out everything should look familiar
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
  // normally you wouldn't test the mocked component
  // I'm doing this here just to prove that the DummyCalendar is what the test is using
  render(<Dashboard />, container)

  const mockCal = document.querySelector('.mock-calendar')

  expect(mockCal).toBeTruthy()
})
