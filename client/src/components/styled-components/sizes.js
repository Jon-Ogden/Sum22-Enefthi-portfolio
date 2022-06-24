export const SIZES = {
    MOBILE_S: "320px",
    MOBILE_M: "375px",
    MOBILE_L: "425px",
    TABLET: "758px",
    LAPTOP: "1024px",
    LAPTOP_L: "1440px",
    DESKTOP: "2560px"
  };
  
  // mobile first design
  export const devices = {
    mobileS: `(min-width: ${SIZES.MOBILE_S})`,
    mobileM: `(min-width: ${SIZES.MOBILE_M})`,
    mobileL: `(min-width: ${SIZES.MOBILE_L})`,
    tablet: `(min-width: ${SIZES.TABLET})`,
    laptop: `(min-width: ${SIZES.LAPTOP})`,
    laptopL: `(min-width: ${SIZES.LAPTOP_L})`,
    desktop: `(min-width: ${SIZES.DESKTOP})`
  };
  