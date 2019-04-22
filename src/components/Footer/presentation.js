import React from 'react';
import { logoWhite } from 'assets';
import { Anchor, Image, Text } from 'components';
import getRoutes from 'utils/getRoutes';

const Footer = React.memo(({ localesContext, brandContext }) => {
  const { logoImage, links } = brandContext;

  return (
    <div className="Footer none md:flex flex-wrap items-center w100 px3 py6 relative none bg-color-brand-color-dark">
      <div className="Footer__logo col-2">
        <Anchor url={getRoutes().WELCOME} className="block md:col-8 lg:col-6">
          <Image src={logoImage} />
        </Anchor>
      </div>
      <div className="Footer__links col-7 flex justify-around px2">
        {links.map(link => (
          <Anchor
            key={link.url}
            className="Footer__links__link color-white"
            url={link.url}
          >
            {link.name}
          </Anchor>
        ))}
      </div>
      <div className="Footer__powered-by col-3">
        <Text
          size="detail"
          className="uppercase text-bold mb2 letter-spacing-md color-white"
        >
          {localesContext.Language.t('footer.attribution')}
        </Text>
        <Image
          src={logoWhite}
          alt="Open Tender Logo."
          className="w100 height-auto"
        />
      </div>
    </div>
  );
});

export default Footer;
