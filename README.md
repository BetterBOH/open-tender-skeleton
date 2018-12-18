# Open Tender Skeleton

This repository contains the skeletal React components for Open Tender client applications. It provides an interface that is tightly connected with [Brandibble Redux](https://github.com/BetterBOH/brandibble-redux) to enable an easy-to-configure, out-of-the-box Open Tender ordering app.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [Getting Up and Running](#getting-up-and-running)
  - [Requests for Comments](#requests-for-comments)

## Getting Started

### Installation

Simply install this package via the command line:

```
yarn add BetterBOH/open-tender-skeleton#master
```

## Contributing

### Getting Up and Running

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
