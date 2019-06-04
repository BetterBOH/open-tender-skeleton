# `<AuthEmailCheck />`

This component allows a user to check if an account associated with their email address already exists.

## Available Props

| Prop                      | PropType             | Description                                            | Default |
| ------------------------- | -------------------- | ------------------------------------------------------ | ------- |
| `actions`                 | `object`             | Object containing validateUser action from Open Tender |         |
| `openTenderRef`           | `OpenTenderRefModel` | Open Tender Ref Model                                  | `null`  |
| `validateUserEmailStatus` | `string`             | validateUser status from Open Tender                   | IDLE    |

## Registering a custom `<AuthEmailCheck />`

The `RegistryLoader` will look for a component registered at `components.registry.AuthEmailCheck` and expects the key `import` to return a function that uses dynamic import syntax.
