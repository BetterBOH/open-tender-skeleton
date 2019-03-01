# `<AccountDetailsItem>`

This component renders details for some aspect of a user's account.

## Available Props

| Prop    | PropType | Description                     | Default |
| ------- | -------- | ------------------------------- | ------- |
| `label` | `string` | The label for the account item. | `''`    |
| `icon`  | `string` | The icon for the account item   | `''`    |
| `value` | `string` | The value for the account item  | `''`    |

## Registering a custom `<AccountDetailsItem />`

The `RegistryLoader` will look for a component registered at `components.registry.AccountDetailsItem` and expects the key `import` to return a function that uses dynamic import syntax.
