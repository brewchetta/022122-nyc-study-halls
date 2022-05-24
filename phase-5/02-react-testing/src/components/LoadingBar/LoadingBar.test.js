import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import LoadingBar from './LoadingBar';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  jest.useFakeTimers();
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
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

  expect(loadingBar.style.width).toBe("0%")
})




// LOADING BAR GOES TO 100% WIDTH AFTER TWO SECONDS (MOCKING TIME ADVANCEMENT)
test('loading bar starts at 100', () => {
  render(<LoadingBar />, container)

  act(() => {
    jest.advanceTimersByTime(1999);
  });

  let loadingBar = document.querySelector('.loading-bar')
  expect(loadingBar.style.width).toBe("0%")

  act(() => {
    jest.advanceTimersByTime(1);
  });

  loadingBar = document.querySelector('.loading-bar')
  expect(loadingBar.style.width).toBe("100%")

})
