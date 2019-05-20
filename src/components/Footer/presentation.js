import React from 'react';
import { logoWhite } from 'assets';
import { Anchor, Image, Text } from 'components';
import getRoutes from 'utils/getRoutes';

const Footer = React.memo(({ localesContext, brandContext }) => {
  const { logoImage, links } = brandContext;

  return (
    <div className="Footer flex flex-col md:flex-row items-center justify-around w100 bg-color-black px3 py6">
      <div className="Footer__logo mb2 md:m0">
        <Anchor url={getRoutes().WELCOME}>
          <Image
            src={logoImage}
            alt={localesContext.Language.t('global.home')}
            className="wauto"
          />
        </Anchor>
      </div>
      <div className="Footer__links flex flex-col items-center justify-around col-12 md:col-8 md:flex-row md:mx2">
        {links.map(link => (
          <Anchor
            key={link.url}
            className="Footer__links__link color-white mb1 md:m0"
            url={link.url}
          >
            {link.name}
          </Anchor>
        ))}
      </div>
      <div className="Footer__powered-by flex flex-col items-center md:items-start mt1 md:m0">
        <Text
          size="detail"
          className="uppercase text-bold letter-spacing-md color-white block mb_5"
        >
          {localesContext.Language.t('footer.attribution')}
        </Text>
        <Image
          src={logoWhite}
          alt={localesContext.Language.t('footer.openTenderLogo')}
          className="wauto"
        />
      </div>
    </div>
  );
});

export default Footer;
