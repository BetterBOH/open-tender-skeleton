# `<Modal />`

This component is used to display a modal.

## Available Props

| Prop        | PropType | Description                               | Default |
| ----------- | -------- | ----------------------------------------- | ------- |
| `isVisible` | `bool`   | Value in Redux if Modal should be visible | `false` |
| `variant`   | `string` | Describes which modal should be rendered  | `''`    |
| `data`      | `object` | Data that the specific modal needs        | `{}`    |
| `resetModal`| `func`   | Resets modal data in Redux                | `f => f`|

## Registering a custom `<Modal />`

The `RegistryLoader` will look for a component registered at `components.registry.Modal` and expects the key `import` to return a function that uses dynamic import syntax.
