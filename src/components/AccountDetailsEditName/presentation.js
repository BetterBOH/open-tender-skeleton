import React from 'react';
import { Text, TextField, ConfirmButtons } from 'components';
import get from 'utils/get';

const InputTypes = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName'
};

const AccountDetailsEditName = React.memo(
  ({
    customerAttributes,
    handleChange,
    handleSubmit,
    errors,
    localesContext
  }) => (
    <div className="AccountDetailsEditName py1">
      <div className="px1 mt_5 mb1_5">
        <Text size="cta" className="text-bold color-black">
          {localesContext.Language.t('dashboard.account.editName')}
        </Text>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="px1 mb1_5">
          <TextField
            className="mb1"
            label={localesContext.Language.t(
              'dashboard.account.placeholders.firstName'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.firstName'
            )}
            value={get(customerAttributes, InputTypes.FIRST_NAME)}
            onChange={value => handleChange(InputTypes.FIRST_NAME, value)}
            errors={get(errors, InputTypes.FIRST_NAME)}
          />
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.lastName'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.lastName'
            )}
            value={get(customerAttributes, InputTypes.LAST_NAME)}
            onChange={value => handleChange(InputTypes.LAST_NAME, value)}
            errors={get(errors, InputTypes.LAST_NAME)}
          />
        </div>
        <ConfirmButtons handleConfirm={handleSubmit} handleCancel={f => f} />
      </form>
    </div>
  )
);

export default AccountDetailsEditName;