import React from 'react';

import { Card, HeroImage, Text, Icon } from 'components';

const DashboardHero = React.memo(props => {
  const { customerFirstName, heroImageUrl, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="vh100 relative">
      <HeroImage src={heroImageUrl} />
      <div className="DashboardHero__icon-container absolute w100 flex justify-center">
        <div className="bg-color-white shadow-md circle">
          <Icon
            className="DashboardHero__icon shadow-md"
            icon="UserCircle"
            fill="gray"
          />
        </div>
      </div>
      <Card
        variant="dashboard-hero"
        className="col-12 bg-color-white text-center z1 py1_5"
      >
        <Text size="headline" className="block my1">
          {!!customerFirstName
            ? `${Language.t('dashboard.welcomeBack')}, ${customerFirstName}!`
            : `${Language.t('dashboard.welcomeBack')}!`}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {Language.t('dashboard.adlib')}
        </Text>
      </Card>
    </div>
  );
});

export default DashboardHero;
