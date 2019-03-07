# `<HeroImage />`

This component is used for rendering a hero image.

## Available Props

| Prop        | PropType | Description                                                    | Default |
| ----------- | -------- | -------------------------------------------------------------- | ------- |
| `src`       | `string` | Image path to render                                           | `null`  |
| `className` | `string` | Classes to be added to `<div />` that wraps around `<Image />` | `''`    |

## Registering a custom `<HeroImage />`

The `RegistryLoader` will look for a component registered at `components.registry.HeroImage` and expects the key `import` to return a function that uses dynamic import syntax.
