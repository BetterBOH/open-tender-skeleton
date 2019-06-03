# `<AppBackground />`

This component is used to render the app background image for certain routes.

## Available Props

| Prop       | PropType | Description                                          | Default |
| ---------- | -------- | ---------------------------------------------------- | ------- |
| `location` | `object` | Location object from React Router DOM's `withRouter` | `null`  |

## Registering a custom `<AppBackground />`

The `RegistryLoader` will look for a component registered at `components.registry.AppBackground` and expects the key `import` to return a function that uses dynamic import syntax.
