# `<OrderSummaryHeader />`

This component is used to show the order id and a brief summary of the order.

## Available Props

| Prop         | PropType | Description                                       | Default |
| ------------ | -------- | ------------------------------------------------- | ------- |
| `orderId`    | `number` | Id for order                                      | `null`  |
| `orderDate`  | `string` | The date the order was placed                     | `""`    |
| `orderTotal` | `string` | The order total (after tax and discounts applied) | `""`    |

## Registering a custom `<OrderSummaryHeader />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummaryHeader` and expects the key `import` to return a function that uses dynamic import syntax.
