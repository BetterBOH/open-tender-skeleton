# `<LineItemRow />`

This component is used for a line item.

## Available Props

| Prop              | PropType | Description                                                   | Default  |
| ----------------- | -------- | ------------------------------------------------------------- | -------- |
| `lineItem`        | `object` | Line item data                                                | `null`   |
| `handleDecrement` | `func`   | Callback that will run when an item's quantity is decremented | `f => f` |
| `handleIncrement` | `func`   | Callback that will run when an item's quantity is incremented | `f => f` |
| `isConfigurable`  | `bool`   | Optionally disable line item actions (default enabled)        | `true`   |

## Registering a custom `<LineItemRow />`

The `RegistryLoader` will look for a component registered at `components.registry.LineItemRow` and expects the key `import` to return a function that uses dynamic import syntax.
