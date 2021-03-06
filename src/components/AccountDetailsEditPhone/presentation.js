import React from 'react';
import { Status } from 'brandibble-redux';
import { Text, TextField, ConfirmButtons } from 'components';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

const AccountDetailsEditPhone = React.memo(
  ({
    customerAttributes,
    updateUserStatus,
    handleChange,
    handleSubmit,
    handleCancel,
    errors,
    localesContext
  }) => (
    <div className="AccountDetailsEditPhone py1">
      <div className="px1 mt_5 mb1_5">
        <Text size="cta" className="text-bold color-black">
          {localesContext.Language.t('dashboard.account.editPhone')}
        </Text>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="px1 mb1_5">
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.phone'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.phone'
            )}
            value={get(customerAttributes, InputTypes.PHONE)}
            onChange={handleChange}
            errors={
              get(errors, InputTypes.PHONE)
                ? [get(errors, InputTypes.PHONE)]
                : []
            }
          />
        </div>
        <ConfirmButtons
          confirmButtonText={
            updateUserStatus === Status.PENDING
              ? localesContext.Language.t('dashboard.account.loading')
              : localesContext.Language.t('dashboard.account.update')
          }
          confirmButtonIsDisabled={
            !get(customerAttributes, InputTypes.PHONE) ||
            updateUserStatus === Status.PENDING
          }
          handleConfirm={handleSubmit}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  )
);

export default AccountDetailsEditPhone;
