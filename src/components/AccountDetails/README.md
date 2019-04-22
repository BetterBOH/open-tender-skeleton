# `<AccountDetails>`

This component allows a user to see and edit their account information.

## Available Props

| Prop             | PropType | Description                    |
| ---------------- | -------- | ------------------------------ |
| `accountDetails` | `object` | Account details object from OT |

## Registering a custom `<AccountDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetails` and expects the key `import` to return a function that uses dynamic import syntax.
