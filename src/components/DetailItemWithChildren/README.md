# `<DetailItemRowWithChildren />`

This component renders a detail with a label an icon and expandable/collapsible child container.

## Available Props

| Prop          | PropType                | Description                                                    | Default |
| ------------- | ----------------------- | -------------------------------------------------------------- | ------- |
| `label`       | `string`                | Label for the detail                                           | `''`    |
| `icon`        | `string`                | Icon for the detail                                            | `''`    |
| `value`       | `string`                | Value for the detail                                           | `''`    |
| `shouldClose` | `bool`                  | A value that if becomes true will close the children container | `false` |
| `onClick`     | `func`                  | Function to call when dropdown is clicked                      | `null`  |
| `children`    | `node or array of node` | React element passed in as children                            | `null`  |

## Registering a custom `<DetailItemRowWithChildren />`

The `RegistryLoader` will look for a component registered at `components.registry.DetailItemRowWithChildren` and expects the key `import` to return a function that uses dynamic import syntax.
