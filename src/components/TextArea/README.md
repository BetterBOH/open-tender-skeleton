# `<TextArea />`

This component is used for rendering textareas.

## Available Props

| Prop          | PropType | Description                                                    | Default  |
| ------------- | -------- | -------------------------------------------------------------- | -------- |
| `name`        | `string` | Name attribute of the `textarea`                               | `null`   |
| `className`   | `string` | Classes to be added to the rendered `textarea` class list      | `null`   |
| `rows`        | `number` | Number of rows that the `textarea` should have                 | `15`     |
| `onChange`    | `func`   | Callback that will run when the textarea's content is modified | `f => f` |
| `value`       | `string` | Value attribute of the `textarea`                              | `''`     |
| `placeholder` | `string` | Short hint that describes the expected value of the `textarea` | `null`   |

## Registering a custom `<TextArea />`

The `RegistryLoader` will look for a component registered at `components.registry.TextArea` and expects the key `import` to return a function that uses dynamic import syntax.
