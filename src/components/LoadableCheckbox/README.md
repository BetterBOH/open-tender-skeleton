# `<LoadableCheckbox />`

This component is a checkbox that shows a spinner when it is loading.

## Available Props

| Prop        | PropType | Description                                        | Default      |
| ----------- | -------- | -------------------------------------------------- | ------------ |
| `isLoading` | `bool`   | Indicates if we should show the spinner            | `false`      |
| `isChecked` | `bool`   | Indicates if checkbox should display check         | `false`      |
| `onClick`   | `func`   | Is executed when checkbox is clicked               | `f => f`     |
| `label`     | `string` | The text that appears to right of checkbox         | `''`         |
| `id`        | `string` | The id associated with input and label of checkbox | `checkbox-1` |

## Registering a custom `<LoadableCheckbox />`

The `RegistryLoader` will look for a component registered at `components.registry.LoadableCheckbox` and expects the key `import` to return a function that uses dynamic import syntax.
