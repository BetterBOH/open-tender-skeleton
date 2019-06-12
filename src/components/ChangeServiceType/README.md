# `<ChangeServiceType />`

This component houses the links to change pickup location and view current menu.

## Available Props

| Prop      | PropType | Description                                   | Default  |
| --------- | -------- | --------------------------------------------- | -------- |
| `onClick` | `func`   | Function that runs when the links are clicked | `f => f` |

## Registering a custom `<ChangeServiceType />`

The `RegistryLoader` will look for a component registered at `components.ChangeServiceType` and expects the key `import` to return a function that uses dynamic import syntax.
