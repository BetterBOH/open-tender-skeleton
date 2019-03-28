# `<RadioInput />`

This component is a custom radio input.

## Available Props

| Prop        | PropType        | Description                                                       | Default |
| ----------- | --------------- | ----------------------------------------------------------------- | ------- |
| `className` | `string`        | Classes to be added to the rendered `RadioInput` class list       | `''`    |
| `id`        | `number/string` | `id` for the `input`, used for `label`'s `for` attribute          | `null`  |
| `name`      | `string`        | Name for the `input`                                              | `''`    |
| `checked`   | `bool`          | Indicates whether the `RadioInput` should be displayed as checked | `false` |

## Registering a custom `<RadioInput />`

The `RegistryLoader` will look for a component registered at `components.registry.RadioInput` and expects the key `import` to return a function that uses dynamic import syntax.
