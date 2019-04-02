# `<SelectPaymentMethodItem />`

This component that displays a payment method item.

## Available Props

| Prop                          | PropType       | Description                                         | Default        |
| ----------------------------- | -------------- | --------------------------------------------------- | -------------- |
| `addPaymentMethod`            | `bool`         | Used to add the option to select add payment method | `false`        |
| `isSelected`                  | `bool`         | True if the item is selected                        | `false`        |
| `selectExistingPaymentMethod` | `func`         | Function to call when item is selected              | `f => f`       |
| `paymentMethod`               | `PaymentModel` | PaymentModel object                                 | `PaymentModel` |

## Registering a custom `<SelectPaymentMethodItem />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethodItem` and expects the key `import` to return a function that uses dynamic import syntax.
