A React application for men knitters

It uses
  - React v17.0.1
  - Type Checker - TypeScript
  - Preprocessors - Sass/SCSS
  - State management - Redux Toolkit
  - CSS Framework - Material-UI
  - CSS-in-JS Modules — Styled Components
  - Router - React Router
  - Unit Testing - Jest & Enzym + Sinon
  - E2E Testing - Jest & Puppeteer
  - Folder structure
  - Generate templates
  - Format & Lint - ESLint & Prettier
  - Useful utilities - Lodash, Moment, Classnames, Serve, React-Snap, React-Helmet

Custom Templates, format, and ESLint configurations.
The original Create React App README available [here](./README_CRA.md).

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder. 
- `yarn build:serve` - run a local static build using the production build using serve library. Install `yarn install -g serve`.
- `yarn build:profile` - profiling production build. 
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lints issues according to style guide set.
- `yarn format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `yarn isready` - will check if the code is ready for showtime (production), run lint, format and build.
- `yarn test:e2e` - run e2e integration testing with the help of Jest & Puppeteer.
- `yarn test:e2e-watch` - same as test:e2e just with a watcher.
- `yarn test:e2e-alone` - stand-alone e2e integration testing NodeJS script for testing using Puppeteer.
- `yarn test:debug` - debug your jest tests using the debugger statement, more info [here](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).
- `yarn coverage` - this test is to create a coverage report at needs extra setting in order to work as expected. 
