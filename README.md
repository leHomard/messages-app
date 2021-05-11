# Getting Started with Create React App

A simple app that shows a list of a message and an input to add a new one, using ChakraUI and MSW (mock service worker).

## How to run the application

In the project directory, you can add an .env.development file and add to it this variable :

REACT_APP_API_MOCKING="enabled"

In order to load the mocks powered by the mock service worker.

### `install dependencies`

Run `yarn` in the root of the directory to install dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `App description`

The main page contains a list of all messages and an input to add a new message.

The list of messages is fetched from `/messages` an API mocked with MSW, and the post of the messages is added only in local state.
