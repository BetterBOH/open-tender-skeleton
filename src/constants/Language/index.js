import Polyglot from 'node-polyglot';
import Locales from 'constants/Language/Locales';

import { EN_US } from 'constants/LocaleCodes';

/**
 * Translations default to en-US if no translation file is found.
 */
const defaultLocale = EN_US;
const Language = new Polyglot({ defaultLocale });

/**
 * Translations begin with the en-US locale
 * and are extended/overwritten there after.
 */
Language.extend(Locales[defaultLocale]);

export default Language;
