# `<LineItemsCard />`

This component is used for line items.

## Available Props

| Prop                       | PropType | Description                                                                  | Default  |
| -------------------------- | -------- | ---------------------------------------------------------------------------- | -------- |
| `items`                    | `array`  | Line items data                                                              | `null`   |
| `handleDecrement`          | `func`   | Callback that will run when an item's quantity is decremented                | `f => f` |
| `handleIncrement`          | `func`   | Callback that will run when an item's quantity is incremented                | `f => f` |
| `isConfigurable`           | `bool`   | Optionally disable line item actions (default enabled)                       | `true`   |
| `showItemsWithoutQuantity` | `bool`   | Optionally hide/remove items with 0 quantity (default shown with add button) | `true`   |

## Registering a custom `<LineItemsCard />`

The `RegistryLoader` will look for a component registered at `components.registry.LineItemsCard` and expects the key `import` to return a function that uses dynamic import syntax.
