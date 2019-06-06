# `<BackButton>`

This component is a button that allows the user to go back to the previous URL.

## Available Props

| Prop        | PropType | Description                                             | Default  |
| ----------- | -------- | ------------------------------------------------------- | -------- |
| `className` | `string` | Classes to be added to the rendered `button` class list | `''`     |
| `icon`      | `string` | Name of svg icon to be rendered in the button           | Back     |
| `onClick`   | `func`   | Callback that will run when an `onclick` event occurs   | `f => f` |

## Registering a custom `<BackButton />`

The `RegistryLoader` will look for a component registered at `components.registry.BackButton` and expects the key `import` to return a function that uses dynamic import syntax.
