# `<PastOrdersIndex />`

This component is an index of a customer's past orders.

## Available Props

| Prop                       | PropType | Description                                       | Default  |
| -------------------------- | -------- | ------------------------------------------------- | -------- |
| `orders`                   | `array`  | Array of order objects from OpenTender            | `[]`     |
| `attemptReorder`           | `func`   | Action which attempts to reorder a previous order | `f => f` |
| `createSystemNotification` | `func`   | Action which renders a notification               | `f => f` |

## Registering a custom `<PastOrdersIndex />`

The `RegistryLoader` will look for a component registered at `components.registry.PastOrdersIndex` and expects the key `import` to return a function that uses dynamic import syntax.
