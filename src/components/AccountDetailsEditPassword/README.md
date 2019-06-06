# `<AccountDetailsEditPassword />`

This component allows a user to edit their password.

## Available Props

| Prop                 | PropType             | Description                                    | Default  |
| -------------------- | -------------------- | ---------------------------------------------- | -------- |
| `customerAttributes` | `object`             | Account details object from selector           | `null`   |
| `openTenderRef`      | `OpenTenderRefModel` | Open Tender Ref Model                          | `null`   |
| `updateUser`         | `func`               | updateUser action from Open Tender             | `f => f` |
| `updateUserStatus`   | `string`             | updateUser status from Open Tender             | IDLE     |
| `onClose`            | `func`               | Function that runs when the user clicks cancel | `f => f` |

## Registering a custom `<AccountDetailsEditPassword />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetailsEditPassword` and expects the key `import` to return a function that uses dynamic import syntax.
