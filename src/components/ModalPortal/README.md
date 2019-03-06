# `<ModalPortal />`

This component is used to display a modal.

## Available Props

| Prop       | PropType          | Description                            | Default |
| ---------- | ----------------- | -------------------------------------- | ------- |
| `children` | `object || array` | Array of react elements to be rendered | `null`  |

## Registering a custom `<ModalPortal />`

The `RegistryLoader` will look for a component registered at `components.registry.ModalPortal` and expects the key `import` to return a function that uses dynamic import syntax.
