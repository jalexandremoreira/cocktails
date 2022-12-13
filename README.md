# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

The app is currently deployed through Vercel [here](https://cocktails-three-rust.vercel.app/).

## Available Scripts

In the project directory, you can run:

### `yarn install --ignore-engines`

Installs the necessary dependencies for the project.\

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Development Time

Development took about 12h, including the time to implement the API. The reason for this is the lack of a UI library. I wanted to display my ability to create complex UI from scratch (particularly a Modal), but this took a lot of time. I also wanted to implement a search bar, but I ran out of time.

A couple of extra hours were also spent on the first day just quickly mocking up the layout and establishing a solid foundation of the visual language of the app, in order to reduce time spent on design decisions later on.

## Future Improvements

Some of the things in this list are "nice to have" and some are "must have" in order to make the app production ready. I do see myself using this app in the future, so I will certainly implement some of these features.

- Add a search bar;
- Add routes in order to share drinks with friends;
- Add a "load more button" to the home page in order to load the next letter of the alphabet;
- Add a 404 page
- Add better handling when there are no favorites;
- Add E2E testing with Cypress or a similar tool;
- Add better handling of errors;
- Add accounts for persistent favorites;
