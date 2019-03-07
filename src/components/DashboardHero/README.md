# `<DashboardHero />`

This component shows a welcome message in the dashboard.

## Available Props

| Prop                | PropType | Description                      | Default |
| ------------------- | -------- | -------------------------------- | ------- |
| `customerFirstName` | `string` | Name of authenticated customer   | `''`    |
| `heroImageUrl`      | `string` | Image URL for the dashboard hero | `null`  |

## Registering a custom `<DashboardHero />`

The `RegistryLoader` will look for a component registered at `components.registry.DashboardHero` and expects the key `import` to return a function that uses dynamic import syntax.
