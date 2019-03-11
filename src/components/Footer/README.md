# `<Footer />`

This component is used for rendering the footer.

## Available Props

| Prop             | PropType | Description                      | Default |
| ---------------- | -------- | -------------------------------- | ------- |
| `openTenderLogo` | `string` | Image URL of the OpenTender logo | `''`    |
| `links`          | `string` | Array of links to be rendered    | `[]`    |

## Registering a custom `<Footer />`

The `RegistryLoader` will look for a component registered at `components.registry.Footer` and expects the key `import` to return a function that uses dynamic import syntax.
