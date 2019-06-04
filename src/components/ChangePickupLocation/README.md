# `<ChangePickupLocation />`

This component houses the links to change pickup location and view current menu.

## Available Props

| Prop      | PropType | Description                                   | Default  |
| --------- | -------- | --------------------------------------------- | -------- |
| `onClose` | `func`   | Function that runs when the links are clicked | `f => f` |

## Registering a custom `<ChangePickupLocation />`

The `RegistryLoader` will look for a component registered at `components.registry.ChangePickupLocation` and expects the key `import` to return a function that uses dynamic import syntax.
