# `<Image />`

This component is used for rendering images and background images.

## Available Props

| Prop        | PropType   | Description                                                                                  | Default |
| ----------- | ---------- | -------------------------------------------------------------------------------------------- | ------- |
| `alt`       | `string`   | Alt text to be added to the rendered `img`                                                   | `null`  |
| `children`  | `nodeList` | When `isBg` is `true`, this component can wrap other elements                                | `null`  |
| `className` | `string`   | Classes to be added to the rendered `img` class list                                         | `null`  |
| `isBg`      | `bool`     | Optionally render the image as a full-width, full-height `div` with a `backgroundImage` prop | `false` |
| `loaded`    | `bool`     | Whether or not the image has been fully downloaded and is loaded into the DOM                | `false` |
| `onImgLoad` | `func`     | Callback that will run when `didLoad` is fired                                               | `null`  |
| `src`       | `string`   | Image path to render                                                                         | `null`  |
| `style`     | `object`   | Object of styles to supply to the rendered `img` as a prop                                   | `null`  |

## Registering a custom `<Image />`

The `RegistryLoader` will look for a component registered at `components.registry.Image` and expects the key `import` to return a function that uses dynamic import syntax.
