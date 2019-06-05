# `<DetailItemRowWithChildren />`

This component renders a detail with a label, an icon, and an expandable/collapsible children container.

## Available Props

| Prop          | PropType          | Description                                                  | Default |
| ------------- | ----------------- | ------------------------------------------------------------ | ------- |
| `label`       | `string`          | Label for the detail                                         | `null`  |
| `icon`        | `string`          | Icon for the detail                                          | `null`  |
| `value`       | `string`          | Required value for the detail                                | `''`    |
| `hasError`    | `bool`            | Indicates whether the detail should show with an error state | `false` |
| `shouldClose` | `bool`            | Indicates whether the children container should close        | `false` |
| `children`    | `node` or `array` | React element(s) passed in as children                       | `null`  |

## Registering a custom `<DetailItemRowWithChildren />`

The `RegistryLoader` will look for a component registered at `components.registry.DetailItemRowWithChildren` and expects the key `import` to return a function that uses dynamic import syntax.
