# `<Icon />`

This component is used for rendering SVG icons.

## Available Props

| Prop        | PropType | Description                             | Default |
| ----------- | -------- | --------------------------------------- | ------- |
| `alt`       | `string` | Specifies the alt attribute of the icon | `null`  |
| `className` | `string` | Classes to be added to the icon wrapper | w100    |
| `fill`      | `string` | Color of the icon                       | #8D92A3 |
| `icon`      | `string` | Name of the icon to be rendered         | Right   |

## Registering a custom `<Icon />`

The `RegistryLoader` will look for a component registered at `components.registry.Icon` and expects the key `import` to return a function that uses dynamic import syntax.
