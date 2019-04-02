# `<ChoosePaymentTypeItem />`

This component displays a payment type a user can add.

## Available Props

| Prop                      | PropType | Description                                   | Default  |
| ------------------------- | -------- | --------------------------------------------- | -------- |
| `paymentType`             | `string` | Type of payment type the user wants to create | `''`     |
| `isSelected`              | `bool`   | Describes whether item is selected            | `false`  |
| `selectPaymentMethodType` | `func`   | sets the paymentType the user wants to add    | `f => f` |

## Registering a custom `<ChoosePaymentTypeItem />`

The `RegistryLoader` will look for a component registered at `components.registry.ChoosePaymentTypeItem` and expects the key `import` to return a function that uses dynamic import syntax.
