// start here
// these are basic tests to show how we can

// the first thing we need to do is import all the items we need like testing utilities:
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
// and the component we're testing:
import App from './App';



// HELPERS

// next we set up some helpers, specifically things to do before and after each test
let container

beforeEach(() => {
  // the container is something we create and destroy each test to avoid things 'leaking' between tests and contaminating results
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
  // here we destroy the container we're using so we can make a new one for the next test
})


// this first test is simple, we want to test and see whether the app renders

// APP RENDERS
// easy enough, test is a function that takes in a string that describes the test and a callback function which is the test to run
test('renders the App component', () => {
  // in here I first render the component I'm testing in the container
  render(<App />, container)

  // if I have something I need to grab I can use good old querySelector syntax
  const app = document.querySelector('.App')

  // finally comes the `assertion` which tells us what to expect
  // the `.toBe` syntax is important since without it the test will always pass unless there's a syntax error or something
  expect(app).toBeTruthy()
})


// APP HAS THE EXPECTED TITLE TEXT
test('has title text', () => {
  // in this test we're doing the same thing except testing that the title includes a piece of text
  render(<App />, container)

  const title = document.querySelector('h1')

  expect(title).toBeTruthy()
  expect(title.textContent.includes('React Testing')).toBeTruthy()
  // I like includes here, you'll probably notice the real text has exclamation marks which the test accounts for
})




// APP CAN RESPOND TO A FETCH CALL
// this test is a bit more advanced as we need to fake the `fetch`
test('can respond to fetch calls', async () => {
  // before anything, notice that we use `async` with our callback function

  // first we need to declare the fake data
  // (I accidentally named it `cakeNumbers` instead of `fakeNumbers` and now it's canon)
  const cakeNumbers = [1,2,3,4,5,6]

  // this next bit of syntax tells our framework to watch for fetches and intercept them
  // basically, it'll immediately create and resolve promises to mock the promises in a fetch
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(cakeNumbers)
      // the ultimate result that gets returned are our dear friends the `cakeNumbers`
    })
  );

  // for this to work, we need to wrap our render in an `act` function
  // act basically allows jest to wait for all the reacty stuff to happen (useEffect, useState, etc)
  // normally we don't have to do this but bc useEffect is asynchronous we need to utilize async / await
  // this way it'll wait for promises from our useEffect to resolve before moving on to the next line
  await act(async () => {
    render(<App />, container);
  });

  // at this point the mock fetch has finished and we can continue
  // I'm just going to grab all the li's that should be on the page now
  const lis = document.querySelectorAll('li')

  // here I just check that the lis exist and there aren't 0 of them, i.e. something rendered to the list
  expect(lis).toBeTruthy()
  expect(lis.length > 0).toBeTruthy()

  // now I check that the first and last li match our cakeNumbers
  expect(lis[0].textContent).toBe('1')
  expect(lis[5].textContent).toBe('6')
})
