# `<ConfirmButtons />`

This component houses two buttons-- the main one (with a disabled option) for confirm and a smaller one on the right for cancel.

## Available Props

| Prop                           | PropType           | Description                                                    | Default                          |
| ------------------------------ | ------------------ | -------------------------------------------------------------- | -------------------------------- |
| `confirmButtonClasses`         | `string`           | Classes for the confirm button                                 | `bg-color-gray-dark color-white` |
| `disabledConfirmButtonClasses` | `string`           | Classes for the confirm button when it is disabled             | `bg-color-gray-light color-gray` |
| `confirmButtonIsDisabled`      | `bool`             | Describes whether the confirm button should be disabled        | `false`                          |
| `confirmButtonText`            | `string`           | Text on the confirm button                                     | `Continue`                       |
| `handleConfirm`                | `func`             | Callback that will run when the confirm button is clicked      | `f => f`                         |
| `cancelButtonClasses`          | `string`           | Classes for the cancel button                                  | `bg-color-gray-light`            |
| `cancelButtonIconColor`        | `string`           | Color of the cancel button's icon                              | `white`                          |
| `cancelButtonIcon`             | `string`           | Icon on the cancel button                                      | `Close`                          |
| `handleCancel`                 | `func`             | Callback that will run when the cancel button is clicked       | `f => f`                         |
| `confirmRef`                   | `func` or `object` | Created by `React.createRef()` for focusing on the DOM element | `null`                           |
| `cancelRef`                    | `func` or `object` | Created by `React.createRef()` for focusing on the DOM element | `null`                           |

## Registering a custom `<ConfirmButtons />`

The `RegistryLoader` will look for a component registered at `components.ConfirmButtons` and expects the key `import` to return a function that uses dynamic import syntax.
