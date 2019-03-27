# `<SelectPaymentMethodItem />`

This component that displays a payment method item.

## Available Props

| Prop                        | PropType       | Description                                         | Default        |
| --------------------------- | -------------- | --------------------------------------------------- | -------------- |
| `addPaymentMethod`          | `boolean`      | Used to add the option to select add payment method | `false`        |
| `isSelected`                | `boolean`      | True if the item is selected                        | `false`        |
| `selectExistingPaymentType` | `function`     | Function to call when item is selected              | `f => f`       |
| `payment`                   | `PaymentModel` | PaymentModel object                                 | `PaymentModel` |

## Registering a custom `<SelectPaymentMethodItem />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethodItem` and expects the key `import` to return a function that uses dynamic import syntax.
