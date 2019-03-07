import React from 'react';

import { Card, HeroImage, Text, Icon } from 'components';

const DashboardHero = React.memo(props => {
  const { customerFirstName, heroImageUrl, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="vh100 relative">
      <HeroImage src={heroImageUrl} />
      <Card
        variant="dashboard-hero"
        className="col-12 bg-color-white text-center z1 py1_5"
      >
        <Text size="headline" className="block my1">
          {/* {!!customerFirstName ?
            `${Language.t('dashboard.welcomeBack')}!` :
            `${Language.t('dashboard.welcomeBack')}, ${customerFirstName}!`
          } */}
          {!!customerFirstName
            ? 'Welcome back!'
            : `Welcome back, ${customerFirstName}!`}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {/* {Language.t('dashboard.adlib')} */}
          How can we serve you today?
        </Text>
      </Card>
    </div>
  );
});

export default DashboardHero;
