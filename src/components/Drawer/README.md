# `<Drawer />`

This component is used to display a drawer.

## Available Props

| Prop             | PropType | Description                                | Default  |
| ---------------- | -------- | ------------------------------------------ | -------- |
| `drawerIsActive` | `bool`   | Value in Redux if Drawer should be visible | `false`  |
| `variant`        | `string` | Describes which drawer should be rendered  | `''`     |
| `data`           | `object` | Data that the specific drawer needs        | `{}`     |
| `resetModal`     | `func`   | Resets drawer data in Redux                | `f => f` |

## Registering a custom `<Drawer />`

The `RegistryLoader` will look for a component registered at `components.registry.Drawer` and expects the key `import` to return a function that uses dynamic import syntax.
