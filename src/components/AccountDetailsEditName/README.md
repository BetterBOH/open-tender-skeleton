# `<AccountDetailsEditName />`

This component allows a user to edit their first and last names.

## Available Props

| Prop                 | PropType             | Description                                    | Default  |
| -------------------- | -------------------- | ---------------------------------------------- | -------- |
| `customerAttributes` | `object`             | Account details object from selector           | `null`   |
| `openTenderRef`      | `OpenTenderRefModel` | Open Tender Ref Model                          | `null`   |
| `updateUser`         | `func`               | updateUser action from OT                      | `f => f` |
| `updateUserStatus`   | `string`             | updateUser status from OT                      | IDLE     |
| `onClose`            | `func`               | Function that runs when the user clicks cancel | `f => f` |

## Registering a custom `<AccountDetailsEditName />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetailsEditName` and expects the key `import` to return a function that uses dynamic import syntax.
