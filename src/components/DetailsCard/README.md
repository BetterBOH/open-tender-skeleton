# `<DetailsCard>`

This component takes a collection of details and renders variations of <DetailItemRow /> for each detail.

## Available Props

| Prop      | PropType | Description                     | Default |
| --------- | -------- | ------------------------------- | ------- |
| `details` | `array`  | An collection of detail objects | `[]`    |

## Registering a custom `<DetailsCard />`

The `RegistryLoader` will look for a component registered at `components.registry.DetailsCard` and expects the key `import` to return a function that uses dynamic import syntax.
