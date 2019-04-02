# `<RadioSelectButton />`

This button is used to make a selection. It accepts a list of children to be rendered alongside a radio button.

## Available Props

| Prop         | PropType        | Description                                                              | Default  |
| ------------ | --------------- | ------------------------------------------------------------------------ | -------- |
| `className`  | `string`        | Classes to be added to the rendered `button` class list                  | `null`   |
| `id`         | `number/string` | Required ID for the `RadioInput`                                         | `''`     |
| `variant`    | `string`        | Describes whether a standalone or list button should be rendered         | list     |
| `name`       | `string`        | Name for the `RadioInput`                                                | `''`     |
| `children`   | `nodeList`      | Elements to be shown next to the `RadioInput` on the `RadioSelectButton` | `null`   |
| `isSelected` | `bool`          | Indicates whether the `RadioSelectButton` is selected                    | `false`  |
| `onClick`    | `func`          | Callback that will run when an `onclick` event occurs                    | `f => f` |

## Registering a custom `<RadioSelectButton />`

The `RegistryLoader` will look for a component registered at `components.registry.RadioSelectButton` and expects the key `import` to return a function that uses dynamic import syntax.
