# `<MiniCart />`

This component is used to display active cart information.

## Available Props

| Prop          | PropType | Description                                      | Default |
| ------------- | -------- | ------------------------------------------------ | ------- |
| `handleClose` | `func`   | Function that fires when close button is clicked | `noop`  |

## Registering a custom `<MiniCart />`

The `RegistryLoader` will look for a component registered at `components.registry.MiniCart` and expects the key `import` to return a function that uses dynamic import syntax.
