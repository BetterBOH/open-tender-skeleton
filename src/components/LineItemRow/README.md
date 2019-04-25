# `<LineItemRow />`

This component is used for a line item.

## Available Props

| Prop             | PropType | Description                                            | Default |
| ---------------- | -------- | ------------------------------------------------------ | ------- |
| `lineItem`       | `object` | Line item data                                         | `null`  |
| `isConfigurable` | `bool`   | Optionally disable line item actions (default enabled) | `true`  |

## Registering a custom `<LineItemRow />`

The `RegistryLoader` will look for a component registered at `components.registry.LineItemRow` and expects the key `import` to return a function that uses dynamic import syntax.
