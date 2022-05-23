import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Numbers from './Numbers';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  render(<Numbers items={[1,2,3]} />, container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


// CLICK_COUNTER TESTS

test('renders Numbers', () => {
  const numbersDiv = document.querySelector('div')

  expect(numbersDiv).toBeTruthy();
});



test('renders the array of numbers in p tags', () => {
  const numberOne = document.querySelectorAll('p')[0]
  expect(numberOne.textContent).toBe("1")

  const numberTwo = document.querySelectorAll('p')[1]
  expect(numberTwo.textContent).toBe("2")

  const numberThree = document.querySelectorAll('p')[2]
  expect(numberThree.textContent).toBe("3")
})
