# Study Hall - React Day 5
## Controlled Forms & Inputs

## Learning Goals
- Controlled vs Uncontrolled inputs

## Before lecture try to...

- Make all `inputs` on the form controlled

- Make inputs and their states default to certain values that make sense

- When someone submits the form, use an alert to let them know how much they owe based on their income and bracket:
  - If someone is a *Service Drone* they owe 50% of their income
  - If someone is a *Middle Class American* they owe 20% of their income
  - If someone has *Been to Space* they owe 1% of their income
  - The message ought to be formatted as `You owe $10000 this year! Thank you for paying your taxes!`


- When someone submits the `form`, it resets both state and the form without refreshing the page

- When a person clicks the `reset button`, all fields and state reset without refreshing the page

### Advanced

- Suggest a tax bracket in the provided `span` based on the income a person types in:
    - Between `0` and `30,000`, suggest the person is a *Service Drone*
    - Between `30,000` and `100,000`, suggest the person is a *Middle Class American*
    - Above `100,000`, suggest the person *Been to Space*

- If a person selects a tax bracket, keep the form from selecting the bracket if their income is too low:
  - Anyone can choose *Service Drone*
  - Must be at least `30,000` for *Middle Class American*
  - Must be at least `100,000` for *Been to Space*


- In the `textarea` for leaving a comment, replace your choice of bad words like `"dang"` and `"darn"` with asterisks (`"I hate the **** IRS!"`)

## HW after lecture

- Side Effects and Data Fetching
  - Scrimba Playlist: Side Effects and Data Fetching
    - all videos
  - The useEffect Hook
  - The useEffect Hook - Cleaning Up
  - Data Fetching in React
  - React Simple Data Fetching Lab
