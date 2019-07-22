# Open Tender Skeleton

This repository contains the skeletal React components for Open Tender client applications. It provides an interface that is tightly connected with [Brandibble Redux](https://github.com/BetterBOH/brandibble-redux) to enable an easy-to-configure, out-of-the-box Open Tender ordering app.

## Table of Contents

- [Usage](#usage)
  - [Getting Started](#getting-started)
  - [Configuring Styles](#configuring-styles)
  - [The Component Registry](#the-component-registry)
- [Contributing](#contributing)
  - [Local Development](#local-development)
  - [Requests for Comments](#requests-for-comments)
  - [References](#references)

---

## Usage

### Getting Started

First, create a new React app via [Create React App](https://github.com/facebook/create-react-app) and cd into that directory.

```
npx create-react-app my-app
cd my-app
```

Open up your app directory in your IDE of choice and delete the following files:

- `yarn.lock`
- `src/App.css`
- `src/App.js`
- `src/App.test.js`
- `src/index.css`
- `src/logo.svg`
- `src/serviceWorker.js`

Then delete your `node_modules` folder and run the following commands:

```
npm install
npm install BetterBOH/open-tender-skeleton#master
npm install node-sass
```

Now we need to set up a couple of configuration files and update your `index.js` file in order to run the Skeleton app.

First, create an `.env` file in your app's root directory that looks like this:

```
NODE_PATH=src/
SKIP_PREFLIGHT_CHECK=true
REACT_APP_OPEN_TENDER_API_KEY="[STRING__TO_BE_OBTAINED_FROM_OPEN_TENDER]"
REACT_APP_OPEN_TENDER_BRAND=[INTEGER__TO_BE_OBTAINED_FROM_OPEN_TENDER]
REACT_APP_OPEN_TENDER_ORIGIN="[STRING__DOMAIN_OF_YOUR_OPEN_TENDER_SITE]"
REACT_APP_OPEN_TENDER_API_ENDPOINT="[https://www.brandibble.co/api/ OR https://staging.brandibble.co/api/]"
REACT_APP_MAPBOX_API_KEY="[STRING__TO_BE_OBTAINED_FROM_MAPBOX]"
REACT_APP_MAPBOX_STYLE_URL="[STRING__TO_BE_OBTAINED_FROM_MAPBOX]"
```

As you can see above, you'll need to obtain an API key and brand ID from Open Tender in order to get up and running. You'll also to need to [sign up for a Mapbox account](https://account.mapbox.com/auth/signup/) if you don't already have an API key and set up a single map style using Mapbox Studio so you can provide a Style URL to your `.env` file (it can be anything to start, so you can just use one of the Mapbox starter templates).

Next, create a `config.js` file that looks like this the `config.example.js` in this repo and update your `index.js` file to look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import config from 'config';

import 'open-tender-skeleton/src/styles.scss';
import { Skeleton } from 'open-tender-skeleton';

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
```

Then switch back to your terminal run `npm start` in the root directory of your new app.

This will start the app and open up a new browser window displaying the Skeleton App landing page where you choose an order type.

### Configuring Styles

There are two ways to configure styles in the `Skeleton` app. The first method would be to change the SCSS variables that are compiled into the `open-tender-skeleton` stylesheet. The second method would be to override rules per selector.

#### Change SCSS Variables in your config file

All you have to do here is open up your `config.js` file and change the values in the `colors` attribute (and elsewhere). This will render CSS into the `<head>` and will favor the variable definitions in `config.js`.

#### Override Selectors

You can inspect elements as they render in the browser or open the package and search for the component you intend to adjust. You can then use the BEM selector and write normal CSS or SCSS to override it:

```scss
// overrides.scss
.Skeleton {
  opacity: 0;
  transition: all 2s;

  &--loaded {
    opacity: 1;
  }
}
```

Include this file **after** the stylesheet import so they take priority in the DOM when compiled into style tags:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import config from 'config';

import 'open-tender-skeleton/src/styles.scss';

// local stylesheet with overrides
import 'styles/overrides.scss';

import { Skeleton } from 'open-tender-skeleton';

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
```

It is okay to use both methods to adjust styles at the same time. You can even break SCSS into a separate file to keep SCSS imports tidy. Just always ensure that `overrides.scss` comes after the imported stylesheet from the package.

### The Component Registry

Each component is wrapped with a [higher-order component](https://reactjs.org/docs/higher-order-components.html). This is done to maintain functionality while providing an easy way to overhaul the JSX that components render.

The `Skeleton` component accepts a `config` prop. The input should match the following shape:

```js
{
  registry: {
    components: {
      Foo: {
        import: () => import('components/Foo')
      },
      Bar: {
        import: () => import('components/Bar')
      }
    }
  }
}
```

Where `components` is an object of references to components within the `Skeleton`. Each reference may contain an `import` property that returns a function that returns an dynamic import. The provided component will be loaded via [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) and replace the referenced component throughout the system.

The [Context API](https://reactjs.org/docs/context.html) is used to distribute this configuration throughout the `Skeleton`. Each component wrapper will check the registry for a user-provided alternate component. It will wrap the alternate component with props that will allow the alternate to fulfill the duties of its predecessor. Each of the wrapper components are [documented here](src/components/README.md).

## Contributing

### Local Development

First install the package and then the mock app:

```bash
# clone the package
git clone https://github.com/BetterBOH/open-tender-skeleton.git

# install npm packages
npm install

# install the mock app npm packages
cd mock && npm install
```

Now you must create an NPM link to link to the local version of the package in your mock app:

```bash
# navigate to /open-tender-skeleton and create the link
npm link

# now link to it in your mock app
cd mock && npm link open-tender-skeleton
```

When your mock app imports `Skeleton` from `open-tender-skeleton` it should now be referring to the parent directory. This allows for live module reloading on code changes in the local `open-tender-skeleton` package.

You will have to repeat the `npm link` step if you delete and reinstall `node_modules` in either directory.

To begin development, set the Babel builder to watch and start the mock app:

```bash
# navigate /open-tender-skeleton
npm start

# in a different terminal window start the mock create-react-app
cd mock && npm start
```

You should now see a new React app running on [localhost:3000](http://localhost:3000). Performing changes in either the local package or the mock app will reload the browser window with the updates.

### Requests for Comments

Requests for Comments (RFCs) will be conducted before each major addition to this repository. Creating RFCs will ensure all stakeholders have the opportunity to voice goals and concerns as this library develops. RFCs will be submitted as Pull Requests and will only be merged in once the planned feature has been agreed upon.

All RFCs can be found in the [RFCs directory](https://github.com/BetterBOH/open-tender-skeleton/tree/master/rfcs) of this repository.

### References

To view or add links that are important to the development of this library, visit the project's [references document](https://gist.github.com/joshiefishbein/091b8ce4e4f8ac123c0a82a041392918).
