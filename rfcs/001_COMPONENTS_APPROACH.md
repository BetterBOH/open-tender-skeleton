# Open Tender Frontend Component Library
The Open Tender Frontend component library will be an extensible collection of React components. These components will be designed to meet two main goals:

1. This library will seamlessly interact with Open Tender Frontend's store (Redux in this case). This will guarantee a standard and stable relationship with all remote API dependencies.
2. By itself, this library will be able to build a minimal, yet fully-functional Open Tender client application.

To do this, we must ensure components are reusable, customizable, exceed today's web accessibility standards, and are well-documented.

## Reusability

Individual components will be designed to be functional, standalone UI elements with a common theme. With an emphasis on navigation and form-related elements, components should be able to exist separately as well as they exist within a grouping of other library components.

Components are to be built to handle different responsibilities with local state and the global store on an instance-by-instance basis.

## Customization

This library will be built to maintain a thematic consistency across the UI elements while providing ways to alter a component's appearance on the fly.

### Context API and Library Themes

We will provide tools for preparing a _theme_ for applications that intend to use the component library.

We will provide a directory dedicated to theming called `themes`. Inside of this directory will be exportable objects that describe the visual features of the library should that object be loaded into the application's `context`.

```js
export const LightTheme = {
  textColor: '#222',
  backgroundColor: '#EEE'
};

export const DarkTheme = {
  textColor: '#EEE',
  backgroundColor: '#222'
};
```

By feeding this theme into [React's Context API](https://reactjs.org/docs/context.html), we can provide ever-present access to the theme in order to style or re-style elements throughout the application.

We will use the approved designs of the component library to develop and approve a theme's required shape. We can fallback to a default theme should a provided theme's object shape not meet the requirements.

Doing this will provide the Open Tender development team with a quick and easy way to make global design decisions and changes in the future. More importantly, it provides a launchpad for a future admin interface that would allow merchants to customize the look and feel of their application.

### Alternate Rendering and On-The-Fly Customization

Using [render props](https://reactjs.org/docs/render-props.html) we can supply developers with a way of completely overhauling a component's appearance while providing safe default behavior.

```js
class ParentForm extends React.Component {
  render() {
    <ChildField
      render={self => {
        return (
          <div className="Child--alternate">
            <input onChange={self.handleInputChange} />
          </div>
        );
      }}
    />
  }
}

class ChildField extends React.Component {
  state = {
    value: null
  };

  handleInputChange = value => {
    this.setState({ value });
  };

  render() {
    // alternate render prop
    if (this.props.render
      && typeof this.props.render === 'function') {
      return this.props.render();
    }
    
    // standard render if no valid render prop exists
    return <input onChange={this.handleInputChange} />; 
  }
}
```

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

When reviewing, we should check the Pull Reuqest's Crystalizer link to ensure our browser extension a11y tools are also reporting no warnings or errors. This part of the process is vital as these tests can be performed by the public –– and will determine our accountability should any accessibility issues arise.

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
