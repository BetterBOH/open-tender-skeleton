# `<PastOrderCard />`

This component is used to show an overview of a past order.

## Available Props

| Prop               | PropType | Description                             | Default |
| ------------------ | -------- | --------------------------------------- | ------- |
| `order`            | `object` | Order object from OpenTender            | `null`  |
| `showReorderPrice` | `bool`   | Optionally show price on reorder button | `null`  |

## Registering a custom `<PastOrderCard />`

The `RegistryLoader` will look for a component registered at `components.registry.PastOrderCard` and expects the key `import` to return a function that uses dynamic import syntax.
