// the setup here is the same as App.test.js
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import ClickCounter from './ClickCounter';

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


// CLICK_COUNTER RENDERS
test('renders ClickCounter', () => {
  render(<ClickCounter />, container)

  const button = document.querySelector('button')

  expect(button).toBeTruthy();
});



// THE COUNTER STARTS AT 0
test('the button starts at 0', () => {
  render(<ClickCounter />, container)

  const button = document.querySelector('button')

  expect(button.textContent).toBe('0');
})




// THE COUNTER INCREMENTS WHEN CLICKED (INCLUDING MULTIPLE CLICKS)
// this is where things get interesting, we want to mock a click and make sure it increments the button text
test('the button increments on a click', () => {
  render(<ClickCounter />, container)

  const button = document.querySelector('button')
  // so far everything is normal

  // here we see act again, in this case we want to mock a click event
  // we need act() so it'll wait for state to resolve to a new state
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // has the button been clicked once?
  expect(button.textContent).toBe('1');

  // simple `for` loop so we can click the button a bunch of times
  for (let i = 0; i < 1000; i++) {
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  }

  // we've clicked the button one time and then 1000 times, that means we should have 1001
  expect(button.textContent).toBe('1001');
})
