# `<AuthSignup />`

This component allows a user to sign up for an account with their email address, first name, last name, phone number, and password.

## Available Props

| Prop                     | PropType             | Description                                                            | Default |
| ------------------------ | -------------------- | ---------------------------------------------------------------------- | ------- |
| `actions`                | `object`             | Object containing createAndAuthenticateUser action from Open Tender    |         |
| `openTenderRef`          | `OpenTenderRefModel` | Open Tender Ref Model                                                  | `null`  |
| `attemptedEmail`         | `string`             | Email submitted to Open Tender for account creation and authentication | `''`    |
| `authenticateUserStatus` | `string`             | createAndAuthenticateUser status from Open Tender                      | IDLE    |

## Registering a custom `<AuthSignup />`

The `RegistryLoader` will look for a component registered at `components.registry.AuthSignup` and expects the key `import` to return a function that uses dynamic import syntax.
