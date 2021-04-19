# Movies explorer

This project has been bootstraped via create-react-app and yarn package manager.

### How to run the project
First, you should have an authorization token from https://www.themoviedb.org/.

Then, copy that token in the `.env.example` file.

Last, run the following commands:

`cp .env.example .env`

`yarn start`

### How to build project
`yarn build`

### How to test the project
`yarn test`

#### Tech stack used in the project
- React.js
- Redux and Redux-thunk
- Jest and react-testing-library
- Storybook (``yarn storybook``)
- Typescript and prettier

#### Final thoughts
Although this project has used `redux` to manage state of the application, it is a good idea to use libraries that separate remote state from ui state. However, in order to demonstrate the ability to work with redux, this idea has been ignored in this project.