# `<AccountDetails>`

This component allows a user to see and edit their account information.

## Available Props

| Prop        | PropType   | Description                              | Default |
| ----------- | ---------- | ---------------------------------------- | ------- |
| `customer`  | `Customer` | Customer object from OpenTender          | `null`  |
| `addresses` | `Array`    | Array of Address objects from OpenTender | `null`  |
| `payments`  | `Array`    | Array of Payment objects from OpenTender | `null`  |

## Registering a custom `<AccountDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetails` and expects the key `import` to return a function that uses dynamic import syntax.
