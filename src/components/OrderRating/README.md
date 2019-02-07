# `<OrderRating>`

This component is used to display or set a past order's rating.

## Available Props

| Prop            | PropType | Description                                                  | Default |
| --------------- | -------- | ------------------------------------------------------------ | ------- |
| `isInteractive` | `bool`   | Optionally render a non-interactive version for display only | `true`  |
| `total`         | `number` | Total number of points available for an order's rating       | 5       |
| `rating`        | `number` | Number of points set on a rating                             | 0       |
| `icon`          | `string` | Name of svg icon to be rendered to indicate a point          | `Star`  |

## Registering a custom `<OrderRating />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderRating` and expects the key `import` to return a function that uses dynamic import syntax.
