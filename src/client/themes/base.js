import {
  SIZES,
  PADDING,
  MARGIN,
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
} from './constants';

const baseTheme = {
  fontFamily: FONT_FAMILIES.roboto,
  fontSize: FONT_SIZES.sm,

  SIZES,
  PADDING,
  MARGIN,
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
};

export const getProperty = (property, key) => ({ theme }) => theme[property][key];

export const getColor = color => getProperty('COLORS', color);
export const getSize = size => getProperty('SIZES', size);

export default baseTheme;
