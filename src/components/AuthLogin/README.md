# `<AuthLogin />`

This component allows a user to log in with their email address and password.

## Available Props

| Prop                     | PropType             | Description                                                | Default |
| ------------------------ | -------------------- | ---------------------------------------------------------- | ------- |
| `actions`                | `object`             | Object containing authenticateUser action from Open Tender |         |
| `openTenderRef`          | `OpenTenderRefModel` | Open Tender Ref Model                                      | `null`  |
| `attemptedEmail`         | `string`             | Email submitted to Open Tender for validation              | ''      |
| `authenticateUserStatus` | `string`             | authenticateUser status from Open Tender                   | IDLE    |
| `serverErrors`           | `array`              | List of errors from `authenticationErrors` selector        | []      |

## Registering a custom `<AuthEmailCheck />`

The `RegistryLoader` will look for a component registered at `components.registry.AuthEmailCheck` and expects the key `import` to return a function that uses dynamic import syntax.
