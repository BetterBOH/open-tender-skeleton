# `<OrderFeedback />`

This component is used to leave a rating and comment for a completed order.

## Available Props

| Prop    | PropType     | Description             | Default |
| ------- | ------------ | ----------------------- | ------- |
| `order` | `OrderModel` | Open Tender Order Model | `{}`    |

## Registering a custom `<OrderFeedback />``

The `RegistryLoader` will look for a component registered at `components.OrderFeedback` and expects the key `import` to return a function that uses dynamic import syntax.
