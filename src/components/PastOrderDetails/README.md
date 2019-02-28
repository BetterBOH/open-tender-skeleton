# `<PastOrderDetails />`

This component is used to show details of a past order.

## Available Props

| Prop    | PropType | Description                  | Default |
| ------- | -------- | ---------------------------- | ------- |
| `order` | `Order`  | Order object from OpenTender | `null`  |

## Registering a custom `<PastOrderDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.PastOrderDetails` and expects the key `import` to return a function that uses dynamic import syntax.
