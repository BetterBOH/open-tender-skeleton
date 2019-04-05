# `<LocateMeButton />`

This component is a button that retrieves the user's location via Navigator.geolocation when clicked.

## Available Props

| Prop          | PropType | Description                                             | Default  |
| ------------- | -------- | ------------------------------------------------------- | -------- |
| `className`   | `string` | Classes to be added to the rendered `button` class list | `null`   |
| `onClick`     | `func`   | Callback that runs when the button is clicked           | `f => f` |
| `showLoading` | `bool`   | Indicates whether the button should show 'loading' text | `false`  |

## Registering a custom `<LocateMeButton />`

The `RegistryLoader` will look for a component registered at `components.registry.LocateMeButton` and expects the key `import` to return a function that uses dynamic import syntax.
