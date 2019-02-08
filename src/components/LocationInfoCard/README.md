# `<LocationInfoCard />`

This component is a card that displays a location's info with a button to change location.

## Available Props

| Prop       | PropType | Description                     | Default |
| ---------- | -------- | ------------------------------- | ------- |
| `location` | `object` | Location object from OpenTender | `null`  |

## Registering a custom `<LocationInfoCard />`

The `RegistryLoader` will look for a component registered at `components.registry.LocationInfoCard` and expects the key `import` to return a function that uses dynamic import syntax.
