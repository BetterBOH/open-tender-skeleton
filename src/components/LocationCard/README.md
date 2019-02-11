# `<LocationCard />`

This component is a card that displays a location's info with an image.

## Available Props

| Prop       | PropType | Description                     | Default |
| ---------- | -------- | ------------------------------- | ------- |
| `location` | `object` | Location object from OpenTender | `null`  |

## Registering a custom `<LocationCard />`

The `RegistryLoader` will look for a component registered at `components.registry.LocationCard` and expects the key `import` to return a function that uses dynamic import syntax.
