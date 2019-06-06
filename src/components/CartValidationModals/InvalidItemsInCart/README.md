# `<InvalidItemsInCart />`

This component is used to inform a user that there are items in their cart that are invalid.

## Available Props

| Prop                | PropType | Description                                                      | Default  |
| ------------------- | -------- | ---------------------------------------------------------------- | -------- |
| `showCancelButton`  | `bool`   | Indicates whether the modal should show a cancel button          | `true`   |
| `errors`            | `array`  | An array of error objects from Open Tender                       | `[]`     |
| `handleAcceptClick` | `func`   | Callback that will run when a user clicks accept                 | `f => f` |
| `actions`           | `object` | Object containing resetModal action from redux                   |          |
| `cart`              | `object` | Object containing an array of the current line items in the cart |          |

## Registering a custom `<InvalidItemsInCart />`

The `RegistryLoader` will look for a component registered at `components.registry.InvalidItemsInCart` and expects the key `import` to return a function that uses dynamic import syntax.
