# Open Tender Frontend Component Library
The Open Tender Frontend component library will be an extensible collection of React components. These components will be designed to meet two main goals:

1. This library will seamlessly interact with Open Tender Frontend's store (Redux in this case). This will guarantee a standard and stable relationship with all remote API dependencies.
2. By itself, this library will be able to build a minimal, yet fully-functional Open Tender client application.

To do this, we must ensure components are customizable, exceed today's web accessibility standards, and are well-documented.

## Customization

Skeletal components will render all required aspects of an Open Tender frontend application. There will be three primary ways to manipulate the appearance of these components: adjusting style configuration, writing style-specific overrides in CSS, and overhauling registered components by composing and registering alternate components.

### Adjusting the style configuration for the SCSS source

We will provide defaults for a documented set of SCSS variables before component-specific files are imported to provide an easy way to configure theme settings. These defaults can be overwritten using a SCSS config file:

Styles can be initialized by Open Tender using a typical importing and SCSS `default` values:

```scss
// base/_defaults.scss provided by Open Tender
$success-color: green !default;
$error-color: red !default;

// components/_Flash.scss provided by Open Tender
.Flash {
  &--success {
    background-color: $success-color;
  }

  &--error {
    background-color: $error-color;
  }
}

// styles.scss provided by Open Tender
@import 'base/defaults';
@import 'components/Flash';
```

You would then import a file into your app containing overrides for the theme's defaults so the values in `_default.scss` don't stick:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from 'open-tender-frontend';

// contains alternate values for $success-color and $error-color
import './styles/theme-config.scss';
import 'open-tender-frontend/styles/styles.scss';

ReactDOM.render(
  <Skeleton />,
  document.getElementById('root')
);
```

### Performing CSS overrides outside of the SCSS flow

You can simply provide separate CSS/SCSS files after you import the library SCSS:

```scss
// theme-overrides.scss
.Flash--success {
  background-color: violet;
}
```

and then import them directly:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from 'open-tender-frontend';

import './styles/theme-config.scss';
import 'open-tender-frontend/styles/styles.scss';

// contains overrides for specific selectors
import './styles/theme-overrides.scss';

ReactDOM.render(
  <Skeleton />,
  document.getElementById('root')
);
```

### Registering Alternate Components

Out of the box, we can provide a configurable registry of components:

```js
export const config = {
  registry: {
    components: {
      MenuItem: {
        path: 'components/MenuItem/presentation'
      }
    },
    views: {
      WelcomeView: {
        path: 'views/WelcomeView'
      }
    }
  }
};
```

We would develop against our own default configuration object. We can supply `<Skeleton />` with a user-created config object to be merged with config defaults and then globalized within the resulting tree:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import config from './config.js';
import { Skeleton } from 'open-tender-frontend';

import './styles/theme-config.scss';
import 'open-tender-frontend/styles/styles.scss';

ReactDOM.render(
  <Skeleton config={config} />,
  document.getElementById('root')
);
```

`Skeleton.js` would then use a merged config to power a Context provider:

```js
class Skeleton extends React.Component {
  constructor(props) {
    super(...arguments);

    const config = get(props, 'config', {});

    this.config = Object.assign({}, defaultConfig, config);
    this.ConfigContext = React.createContext(this.config);
  }

  render() {
    const ContextProvider = this.ConfigContext.Provider;

    return (
      <ContextProvider>
        <!-- ... other composable layout components -->
      </ContextProvider>
    );
  }
}
```

The resulting config object would be heavily used to associate _wrappers_ and _presentations_ of components.

```js
import withMenuItemProps from 'components/MenuItem/wrapper';

const MenuItem = props => {
  const component = props.config.registry.components.MenuItem.path;
  return React.lazy(() => import(component));
};

export default withMenuItemProps(MenuItem);
```

In this case, the `withMenuItemProps` _wrapper_ creates a [higher-order component](https://reactjs.org/docs/higher-order-components.html) out of the provided _presentation_ layer being imported. This allows us to separate a component's concerns of functionality and presentation and gives the chance to swap out a component's UI globally without rewriting its relationship to the UI system. [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) is used for code-splitting.

This will keep code inclusion passive and confirm that each of our library's components will be wrapped with necessary functionality.

We can supply a registry for each layer of the tree (views, layout components, and base UI components) to ensure all aspects of the DOM can be overhauled if needed.

**NOTE:** This requires a diligent documentation of each `wrapper` so that `presentation` layers of components can be overwritten without accidentally omitting responsibilities once provided by its original form.

## Accessibility

Empowering Open Tender developers to make accessible and inclusive apps is a priority. Because this library will compose a majority of the DOM, it is important that each component renders HTML that meets [WCAG 2.1](https://www.w3.org/TR/WCAG21/) Level AA compliance.

### Writing Compliant Code

To maintain Level AA compliance is to also maintain Level A compliance. While contributing to this repository use these checklists to ensure Level A and Level AA requirements are met:

- [WCAG Level A Checklist](https://github.com/twg/accessibility/wiki/WCAG-Level-A-Checklist)
- [WCAG Level AA Checklist](https://github.com/twg/accessibility/wiki/WCAG-Level-AA-Checklist)

### Linters and Continuous Integration Tools

In addition to using other pre-commit, code-clarity linting tools such as [ESLint](https://eslint.org/) and/or [Prettier](https://prettier.io/), it is recommended that we use a pre-commit linter for catching accessibility issues. Currently, [react-a11y](https://github.com/reactjs/react-a11y) is the community-recommended utility for accessibility warnings during compilation. 

We could also add a series of test suites that render components and require a component snapshot to pass accessibility tests conducted with [axe-core](https://www.npmjs.com/package/axe-core).

The same tests could be used in our continuous integration if other, more passive tools (like [AccessLint](https://github.com/accesslint/accesslint-ci)) aren't sufficient.

### Browser QA

When reviewing, we should check the Pull Request's Crystalizer link to ensure our browser extension a11y tools are also reporting no warnings or errors. This part of the process is vital as these tests can be performed by the public –– and will determine our accountability should any accessibility issues arise.

## Documentation

A document will be provided with any new component. This document should describe the functionality, recommended use, and customizable properties of components.

## Contribution

In addition to a standard contribution document, we should adopt the following checklist to approve Pull Requests into the components directory of this repository:

1. Components meet design specifications
2. Components meet functionality specifications
3. Components meet customizability specifications
4. Components meet accessibility specifications
5. There is a test to confirm each of the four requirements above
6. There is documentation provided for each new component

We should only consider Pull Requests mergeable when all of the above is met – in addition to any requirement of contributor approvals.
