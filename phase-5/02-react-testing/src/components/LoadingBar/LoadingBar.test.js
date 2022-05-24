import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import LoadingBar from './LoadingBar';

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


// LOADING BAR RENDERS
test('renders LoadingBar', () => {
  render(<LoadingBar />, container)

  const loadingBar = document.querySelector('.loading-bar')

  expect(loadingBar).toBeTruthy();
});



// LOADING BAR STARTS AT 0 WIDTH
test('starts at zero percent', () => {
  render(<LoadingBar />, container)

  const loadingBar = document.querySelector('.loading-bar')

  expect(loadingBar.style.width).toBe("0%")
})



// LOADING BAR GOES TO 100% WIDTH AFTER TWO SECONDS (MOCKING TIME ADVANCEMENT)
test('goes to one hundred percent after two seconds', () => {
  jest.useFakeTimers();
  render(<LoadingBar />, container)

  act(() => {
    jest.advanceTimersByTime(2000);
  });

  const loadingBar = document.querySelector('.loading-bar')

  expect(loadingBar.style.width).toBe("100%")
  jest.useRealTimers();
})
