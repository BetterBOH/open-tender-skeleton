# `<AuthResetPassword />`

This component allows a user to reset their password.

## Available Props

| Prop                            | PropType             | Description                                                                              | Default |
| ------------------------------- | -------------------- | ---------------------------------------------------------------------------------------- | ------- |
| `actions`                       | `object`             | Object containing resetUserPassword and finishResetUserPassword actions from Open Tender |         |
| `openTenderRef`                 | `OpenTenderRefModel` | Open Tender Ref Model                                                                    | `null`  |
| `attemptedEmail`                | `string`             | Email submitted to Open Tender to attempt resetting password                             | `''`    |
| `resetUserPasswordStatus`       | `string`             | resetUserPassword status from Open Tender                                                | IDLE    |
| `finishResetUserPasswordStatus` | `string`             | finishResetUserPassword status from Open Tender                                          | IDLE    |

## Registering a custom `<AuthResetPassword />`

The `RegistryLoader` will look for a component registered at `components.registry.AuthResetPassword` and expects the key `import` to return a function that uses dynamic import syntax.
