// this test involves a setTimeout
// luckily, jest can control the spacetime continuum
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import LoadingBar from './LoadingBar';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  // all we need first is a little bit of setup
  // before each test we make sure to turn on our time travel device
  // a.k.a. useFakeTimers
  jest.useFakeTimers();
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
  // after each test we turn off our fake timers in case the next suite of tests doesn't need them
  jest.useRealTimers();
})


// LOADING BAR RENDERS
test('renders LoadingBar', () => {
  render(<LoadingBar />, container)

  const loadingBar = document.querySelector('.loading-bar')

  expect(loadingBar).toBeTruthy();
});



// LOADING BAR STARTS AT 0 WIDTH
test('loading bar starts at 0', () => {
  render(<LoadingBar />, container)

  const loadingBar = document.querySelector('.loading-bar')

  // there's no time travel yet
  // when the bar first renders, the bar should have a width of 0%
  // this makes sense since no time has elapsed
  expect(loadingBar.style.width).toBe("0%")
})




// LOADING BAR GOES TO 100% WIDTH AFTER TWO SECONDS (MOCKING TIME ADVANCEMENT)
test('loading bar starts at 100', () => {
  render(<LoadingBar />, container)

  // here we activate our TIME TRAVEL
  act(() => {
    // we need to wrap this in `act()` to make sure state has time to change
    // in this case we're time travelling to the ms before the change to make sure nothing changes in the 1999ms before the timeout finishes
    jest.advanceTimersByTime(1999);
  });

  let loadingBar = document.querySelector('.loading-bar')
  expect(loadingBar.style.width).toBe("0%")

  act(() => {
    // this next bit of time travel moves forward by a single ms
    // in total we've moved 2000 ms into the future
    jest.advanceTimersByTime(1);
    // and that means... our setTimeout should fire and change the state
  });

  loadingBar = document.querySelector('.loading-bar')
  expect(loadingBar.style.width).toBe("100%")
  // at this point the loading bar should now be set to 100% width
})
