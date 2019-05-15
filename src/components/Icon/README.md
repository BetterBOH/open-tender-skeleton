# `<Icon />`

This component is used for rendering SVG icons.

## Available Props

| Prop        | PropType | Description                                         | Default |
| ----------- | -------- | --------------------------------------------------- | ------- |
| `icon`      | `string` | Name of the icon to be rendered                     | Right   |
| `fill`      | `string` | Color of the icon                                   | #cbd2d9 |
| `className` | `string` | Classes to be added to the icon wrapper             | w100    |
| `alt`       | `string` | Specifies the aria-labelledby attribute of the icon | `''`    |

## Registering a custom `<Icon />`

The `RegistryLoader` will look for a component registered at `components.registry.Icon` and expects the key `import` to return a function that uses dynamic import syntax.
