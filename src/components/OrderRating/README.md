# `<OrderRating />`

This component is used to rate a completed order.

## Available Props

| Prop      | PropType | Description              | Default |
| --------- | -------- | ------------------------ | ------- |
| `orderId` | `number` | Id for a completed order | `null`  |

## Registering a custom `<OrderRating />``

The `RegistryLoader` will look for a component registered at `components.registry.OrderRating` and expects the key `import` to return a function that uses dynamic import syntax.
