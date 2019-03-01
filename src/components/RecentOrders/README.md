# `<RecentOrders />`

This component shows an overview of the user's recent orders.

## Available Props

| Prop     | PropType | Description                            | Default |
| -------- | -------- | -------------------------------------- | ------- |
| `orders` | `array`  | Array of order objects from OpenTender | `[]`    |

## Registering a custom `<RecentOrders />`

The `RegistryLoader` will look for a component registered at `components.registry.RecentOrders` and expects the key `import` to return a function that uses dynamic import syntax.
