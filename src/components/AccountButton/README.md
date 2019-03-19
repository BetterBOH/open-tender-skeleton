# `<AccountButton>`

This component is a button that indicates whether the user is authenticated.

## Available Props

| Prop        | PropType   | Description                                                        | Default    |
| ----------- | ---------- | ------------------------------------------------------------------ | ---------- |
| `className` | `string`   | Classes to be added to the rendered `button` class list            | `null`     |
| `icon`      | `string`   | Name of svg icon to be rendered when a user avatar is not availble | userCircle |
| `customer`  | `Customer` | Customer object from OpenTender                                    | `null`     |

## Registering a custom `<AccountButton />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountButton` and expects the key `import` to return a function that uses dynamic import syntax.
