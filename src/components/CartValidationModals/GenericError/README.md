# `<GenericError />`

This component is used to inform a user that there is an error that requires resetting the application.

## Available Props

| Prop                | PropType | Description                                                                                 | Default  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------- | -------- |
| `handleAcceptClick` | `func`   | Callback that will run when a user clicks accept                                            | `f => f` |
| `actions`           | `object` | Object containing resetModal action from redux and resetApplication action from Open Tender |          |
| `history`           | `object` | History object from React Router DOM's `withRouter`                                         |          |

## Registering a custom `<GenericError />`

The `RegistryLoader` will look for a component registered at `components.registry.GenericError` and expects the key `import` to return a function that uses dynamic import syntax.
