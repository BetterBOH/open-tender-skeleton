# `<AccountButton />`

This component is a button that indicates whether the user is authenticated.

## Available Props

| Prop                  | PropType        | Description                                                         | Default    |
| --------------------- | --------------- | ------------------------------------------------------------------- | ---------- |
| `className`           | `string`        | Classes to be added to the rendered `button` class list             | `''`       |
| `icon`                | `string`        | Name of svg icon to be rendered when a user avatar is not available | UserCircle |
| `customer`            | `CustomerModel` | Open Tender Customer Model                                          | `null`     |
| `userIsAuthenticated` | `bool`          | Indicates whether user is authenticated                             | `false`    |

## Registering a custom `<AccountButton />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountButton` and expects the key `import` to return a function that uses dynamic import syntax.
