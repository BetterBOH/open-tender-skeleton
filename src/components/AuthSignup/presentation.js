import React from 'react';

import { Card, Text, Button } from 'components';

const AuthSignup = React.memo(
  ({
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
    error,
    handleFieldChange,
    handleSubmit
  }) => (
    <Card className="p1">
      <Text size="headline">Signup</Text>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('email', value);
            }}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('firstName', value);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('lastName', value);
            }}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('phoneNumber', value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('password', value);
            }}
          />
        </div>
        <Button onClick={handleSubmit}>Sign Up</Button>
        {error && <p>{error}</p>}
      </form>
    </Card>
  )
);

export default AuthSignup;
