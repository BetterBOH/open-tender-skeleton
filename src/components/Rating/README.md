# `<Rating>`

This component is used to display or set a rating.

## Available Props

| Prop            | PropType | Description                                              | Default  |
| --------------- | -------- | -------------------------------------------------------- | -------- |
| `isInteractive` | `bool`   | Optionally render an interactive version to set a rating | `false`  |
| `total`         | `number` | Total number of points available for a rating            | 5        |
| `rating`        | `number` | Number of points set on a rating                         | 0        |
| `icon`          | `string` | Name of svg icon to be rendered to indicate a point      | `Star`   |
| `onChange`      | `func`   | Callback that will run when a button gets clicked        | `f => f` |

## Registering a custom `<Rating />`

The `RegistryLoader` will look for a component registered at `components.registry.Rating` and expects the key `import` to return a function that uses dynamic import syntax.
