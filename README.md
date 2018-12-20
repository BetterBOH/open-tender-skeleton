# Open Tender Skeleton

This repository contains the skeletal React components for Open Tender client applications. It provides an interface that is tightly connected with [Brandibble Redux](https://github.com/BetterBOH/brandibble-redux) to enable an easy-to-configure, out-of-the-box Open Tender ordering app.

## Table of Contents

- [Usage](#usage)
  - [Getting Started](#getting-started)
  - [Configuring Styles](#configuring-styles)
- [Contributing](#contributing)
  - [Local Development](#local-development)
  - [Requests for Comments](#requests-for-comments)
  - [References](#references)

---

## Usage

### Getting Started

Simply install this package via the command line:

```
yarn add BetterBOH/open-tender-skeleton#master
```

To use with React, simply import the `Skeleton` component and stylesheet (`open-tender-skeleton/src/styles.scss`) into your application.

```js
import React from 'react';
import ReactDOM from 'react-dom';

import 'open-tender-skeleton/src/styles.scss';
import { Skeleton } from 'open-tender-skeleton';

ReactDOM.render(<Skeleton />, document.getElementById('root'));
```

### Configuring Styles

There are two ways to configure styles in the `Skeleton` app. The first method would be to override the SCSS variables that are compiled into the `open-tender-skeleton` stylesheet. The second method would be to override rules per selector.

#### Override SCSS Variables

To override SCSS variables, just import another SCSS stylesheet with new variables values before the `open-tender-skeleton/src/styles.scss` is imported. All SCSS variables are [documented here](src/styles/README.md). Ensure this configuration file is imported **before** the imported stylesheet, otherwise the defaults will be used to compile the SCSS into style tags:

```js
import React from 'react';
import ReactDOM from 'react-dom';

// local stylesheet with configuration
import 'styles/config.scss';

import 'open-tender-skeleton/src/styles.scss';
import { Skeleton } from 'open-tender-skeleton';

ReactDOM.render(<Skeleton />, document.getElementById('root'));
```

This will render CSS into the `<head>` and will favor the variable definitions in `config.scss`.

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

import 'open-tender-skeleton/src/styles.scss';

// local stylesheet with overrides
import 'styles/overrides.scss';

import { Skeleton } from 'open-tender-skeleton';

ReactDOM.render(<Skeleton />, document.getElementById('root'));
```

It is okay to use both methods to adjust styles at the same time. You can even break SCSS into a separate file to keep SCSS imports tidy. Just always ensure that `config.scss` comes before and `overrides.scss` comes after the imported stylesheet from the package.

---

## Contributing

### Local Development

First install the package and then the mock app:

```bash
# clone the package
git clone https://github.com/BetterBOH/open-tender-skeleton.git

# install npm packages
yarn

# install the mock app npm packages
cd mock && yarn
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

To begin development, set the Rollup builder to watch and start the mock app:

```bash
# navigate /open-tender-skeleton
# start1 rollup with the 'config' and 'watch' flags
rollup -c -w

# in a different terminal window start the mock create-react-app
cd mock && yarn start
```

You should now see a new React app running on [localhost:3000](http://localhost:3000). Performing changes in either the local package or the mock app will reload the browser window with the updates.

### Requests for Comments

Requests for Comments (RFCs) will be conducted before each major addition to this repository. Creating RFCs will ensure all stakeholders have the opportunity to voice goals and concerns as this library develops. RFCs will be submitted as Pull Requests and will only be merged in once the planned feature has been agreed upon.

All RFCs can be found in the [RFCs directory](https://github.com/BetterBOH/open-tender-frontend/blob/master/rfcs) of this repository.

### References

To view or add links that are important to the development of this library, visit the project's [references document](https://gist.github.com/joshiefishbein/091b8ce4e4f8ac123c0a82a041392918).
