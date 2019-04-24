# `<InvalidItemsInCart />`

This component is used to inform a user that there are items in their cart that are invalid.

## Available Props

| Prop                | PropType | Description                                      | Default  |
| ------------------- | -------- | ------------------------------------------------ | -------- |
| `errors`            | `array`  | An array of error objects                        | `[]`     |
| `handleAcceptClick` | `func`   | Callback that will run when a user clicks accept | `f => f` |

## Registering a custom `<InvalidItemsInCart />`

The `RegistryLoader` will look for a component registered at `components.registry.InvalidItemsInCart` and expects the key `import` to return a function that uses dynamic import syntax.
