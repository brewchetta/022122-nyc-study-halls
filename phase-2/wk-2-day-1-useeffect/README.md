# Study Hall - React Day 6
## Component Lifecycle and useEffect

## Learning Goals
- Stages of component lifecycle
- UseEffect hook
- GET requests in React

## Before lecture try this...

- Set up the `Get A New Joke` button so that when it's clicked, it loads a newly fetched joke into the state `currentJoke`

- Make it so when the page loads, it fetches a new joke and and loads that new joke into `currentJoke` with a `useEffect`

- Set up a `useEffect` so that when the `currentJoke` state changes, the `numberOfJokesFetched` state ticks up

- Set up a `useEffect` to load a randomly fetched image for the `RandomImage` component when it's loaded
  - You can use one of these APIs:
    - https://random-d.uk/api
    - https://placekitten.com/
    - https://randomfox.ca/floof/
    - https://random.dog/woof.json
    - https://axoltlapi.herokuapp.com/
    - https://placebear.com/

### Advanced

- The `numberOfJokesFetched` seems a little off... amend the `useEffect` so it only updates the `numberofJokesFetched` if the `currentJoke` is a proper joke!

- Set up the `saveCurrentJoke` button so that we can save a joke to state somewhere and display our saved jokes in the `FavoriteJokesDisplay`

- When our favorite jokes state updates, use a `useEffect` to fetch another joke and load it into the `currentJoke` state

## HW
- Side Effects and Data Fetching
  - Putting it All Together: React Fetch CRUD lab
