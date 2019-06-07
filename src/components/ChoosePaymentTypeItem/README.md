# `<ChoosePaymentTypeItem />`

This component renders individual items, i.e. payment types, for the `ChoosePaymentType` component.

## Available Props

| Prop                      | PropType | Description                                                   | Default  |
| ------------------------- | -------- | ------------------------------------------------------------- | -------- |
| `paymentType`             | `string` | Type of payment method the user wishes to add                 | `''`     |
| `isSelected`              | `bool`   | Indicates whether the payment type is selected                | `false`  |
| `selectPaymentMethodType` | `func`   | Callback that sets `newPaymentMethodType` in `PaymentMethods` | `f => f` |

## Registering a custom `<ChoosePaymentTypeItem />`

The `RegistryLoader` will look for a component registered at `components.registry.ChoosePaymentTypeItem` and expects the key `import` to return a function that uses dynamic import syntax.
