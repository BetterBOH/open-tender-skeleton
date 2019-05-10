# `<TextFieldError />`

This component is used for rendering errors.

## Available Props

| Prop     | PropType | Description                           | Default |
| -------- | -------- | ------------------------------------- | ------- |
| `errors` | `array`  | Array of strings to display as errors | `[]`    |

## Registering a custom `<TextFieldError />`

The `RegistryLoader` will look for a component registered at `components.registry.TextFieldError` and expects the key `import` to return a function that uses dynamic import syntax.
