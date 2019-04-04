# `<EditServiceTypeTime>`

This component allows you to select a time for an order.

## Available Props

| Prop                     | PropType | Description                     | Default |
| ------------------------ | -------- | ------------------------------- | ------- |
| `orderableDatesAndTimes` | `object` | OpenTender data for order times | `null`  |

## Registering a custom `<EditServiceTypeTime />`

The `RegistryLoader` will look for a component registered at `components.registry.EditServiceTypeTime` and expects the key `import` to return a function that uses dynamic import syntax.
