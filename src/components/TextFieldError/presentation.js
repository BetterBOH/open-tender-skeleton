import React from 'react';
import { Text } from 'components';

const TextFieldError = React.memo(({ errors }) => {
  if (!errors.length) return null;

  const uniqueErrors = Array.from(new Set(errors));
  const errorMessage = uniqueErrors.reduce((allErrors, error) => {
    const lastCharacterIsAPeriod = error[error.length - 1] === '.';
    const editedError = lastCharacterIsAPeriod
      ? error.substring(0, error.length - 1)
      : error;
    if (allErrors.length === 0) {
      return editedError;
    }

    return `${allErrors}, ${editedError.toLowerCase()}`;
  }, '');

  return (
    <div className="text-left">
      <Text className="color-error" size="detail">{`${errorMessage}.`}</Text>
    </div>
  );
});

export default TextFieldError;
