# `<LocationIsClosed />`

This component is used to inform a user that the location is closed.

## Available Props

| Prop                | PropType | Description                                         | Default  |
| ------------------- | -------- | --------------------------------------------------- | -------- |
| `handleAcceptClick` | `func`   | Callback that will run when a user clicks accept    | `f => f` |
| `actions`           | `object` | Object containing resetModal action from redux      |          |
| `history`           | `object` | History object from React Router DOM's `withRouter` |          |

## Registering a custom `<LocationIsClosed />`

The `RegistryLoader` will look for a component registered at `components.registry.LocationIsClosed` and expects the key `import` to return a function that uses dynamic import syntax.
