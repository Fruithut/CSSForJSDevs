const BREAKPOINTS = {
  phone: 600 / 16,
  tablet: 950 / 16,
  laptop: 1300 / 16
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptop}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tablet}rem)`,
  phoneAndDown: `(max-width: ${BREAKPOINTS.phone}rem)`,
};