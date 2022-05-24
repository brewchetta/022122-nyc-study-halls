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
test('starts at 0', () => {
  render(<ClickCounter />, container)

  const button = document.querySelector('button')

  expect(button.textContent).toBe("0");
});



// THE COUNTER INCREMENTS WHEN CLICKED (INCLUDING MULTIPLE CLICKS)
test('increments the counter each time when clicked', () => {
  render(<ClickCounter />, container)

  const button = document.querySelector('button')

  act(() => {
    button.dispatchEvent( new MouseEvent( "click", { bubbles: true } ) )
  })

  expect(button.textContent).toBe("1");

  act(() => {
    for (let i = 0; i < 10; i++) {
      button.dispatchEvent( new MouseEvent( "click", { bubbles: true } ) )
    }
  })

  expect(button.textContent).toBe("11")
});
