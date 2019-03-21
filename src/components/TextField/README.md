# `<TextField />`

This component is used for rendering input text fields.

## Available Props

| Prop           | PropType | Description                                                  | Default  |
| -------------- | -------- | ------------------------------------------------------------ | -------- |
| `className`    | `string` | Classes to be added to the rendered `input` class list       | `null`   |
| `variant`      | `string` | Variant of the `input`                                       | primary  |
| `type`         | `string` | Type attribute of the `input`                                | `null`   |
| `autoComplete` | `string` | Autocomplete attribute of the `input`                        | `null`   |
| `onChange`     | `func`   | Callback that will run when the input's content is modified  | `f => f` |
| `value`        | `string` | Value attribute of the `input`                               | `''`     |
| `placeholder`  | `string` | Short hint that describes the expected value of the `input`  | `null`   |
| `isDisabled`   | `bool`   | Boolean that indicates whether or not to disable the `input` | `false`  |
| `iconLeft`     | `string` | Name of the icon to the left of the `input`                  | `null`   |
| `label`        | `string` | Label for the `input`                                        | `''`     |

## Registering a custom `<TextField />`

The `RegistryLoader` will look for a component registered at `components.registry.TextField` and expects the key `import` to return a function that uses dynamic import syntax.
