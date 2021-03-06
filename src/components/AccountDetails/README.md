# `<AccountDetails />`

This component allows a user to see and edit their account information.

## Available Props

| Prop               | PropType             | Description                          | Default  |
| ------------------ | -------------------- | ------------------------------------ | -------- |
| `accountDetails`   | `object`             | Account details object from selector |          |
| `openTenderRef`    | `OpenTenderRefModel` | Open Tender Ref Model                | `null`   |
| `updateUser`       | `func`               | updateUser action from Open Tender   | `f => f` |
| `updateUserStatus` | `string`             | updateUser status from Open Tender   | IDLE     |
| `updateUserErrors` | `object`             | updateUser errors from Open Tender   | `null`   |

## Registering a custom `<AccountDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetails` and expects the key `import` to return a function that uses dynamic import syntax.
