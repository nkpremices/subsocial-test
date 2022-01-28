# Subsocial Senior React Dev Test
This repository contains the code for the Subsocial Senior React Dev Test.

> Disclaimer: The content herein is for demonstration purposes only. With more time, I could have made this a little more interesting.

We have a dapp: sub.id . <br>
There are many connections to different blockchain networks and in order to always be aware of which ones work, 
we would like the page with the status of connections. <br>

Each connection to the network should be represented as a green or red rectangle <br>
green - connected <br>
red - disconnected <br>

## Project development steps/requirements

### Steps(Requirements)
* UI idea Sketching
* Implementation of the design with `SASS + CSS modules`
* Implementation of the redux layer using `react-redux` and `redux-thunk` (in `Typescript` of course)
* Consuming the required endpoints
* Adding all components to storybook

### Requirements not fully met
* The storybook of a `ChainCard` is not loading well css. I didn't fix it due to having a really tight schedule at work.


## Project structure
   ```
  |-- @types
  |   |-- chain.ts
  |   |-- index.d.ts
  |   `-- redux
  |       `-- actionCreators.ts
  |-- README.md
  |-- assets
  |   |-- img
  |   `-- svg
  |-- next-env.d.ts
  |-- next-preset.js
  |-- next.config.js
  |-- package.json
  |-- pages
  |   |-- _app.tsx
  |   |-- api
  |   |   `-- hello.ts
  |   |-- components
  |   |   |-- Chains
  |   |   |   |-- ChainCard.tsx
  |   |   |   `-- index.tsx
  |   |   |-- Footer
  |   |   |   `-- index.tsx
  |   |   `-- Header
  |   |       |-- Header.tsx
  |   |       `-- header.module.scss
  |   `-- index.tsx
  |-- public
  |   |-- favicon.ico
  |   |-- id-logo.png
  |   |-- menu-bars.png
  |   |-- offline-sign.svg
  |   |-- online-sign.svg
  |   |-- spinner.gif
  |   |-- static
  |   |   |-- stories
  |   |   `-- template.md
  |   |-- sub-id-logo.png
  |   `-- vercel.svg
  |-- services
  |   `-- axios.service.ts
  |-- store
  |   |-- actions
  |   |   |-- creators
  |   |   |   `-- chains.actions.ts
  |   |   `-- types
  |   |       `-- chains.types.ts
  |   |-- index.ts
  |   |-- initialState.ts
  |   `-- reducers
  |       |-- chains.reducer.ts
  |       `-- index.ts
  |-- stories
  |   |-- chainCard.stories.tsx
  |   `-- chains.stories.tsx
  |-- styles
  |   |-- Home.module.scss
  |   `-- globals.scss
  `-- tsconfig.json

```

## Getting started

### 1. Installation steps

* Clone the repo using

```https://github.com/nkpremices/subsocial-test.git```

* Install dependencies by running

```yarn```

* For development run `yarn dev` to start the development server
* For production run `yarn build` to build the production version and then `yarn start` to start the server
* For storybook run `yarn storybook` to start the storybook server
* To build storybook run `yarn build-storybook`


### 2. Notes
* You can find the app deployed to [this link](https://subsocial-test.netlify.app/)
* You can find storybook at [this link](https://subsocial-test.netlify.app/static/stories/index.html)
* Hover a card to see more details
