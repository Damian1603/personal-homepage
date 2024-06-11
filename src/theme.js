
const colorNames = {

    whiteLilac: "#fbfbfe",
    scienceBlue: "#0366d6",
    black: "#000000",
    slateGray: "#6e7e91",
    mineShaft: "#252525",  
    white: "#ffffff", 
    dodgerBlue: "#2188ff",
    mercury: "#e5e5e5",
    violet: "#090a3308",
    iron: "#d1d5da",
    lightBlue: "rgba(3, 101, 214, 0.2)",
    lightMineShaft: "#9c9c9c"
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        site: {
          background: colorNames.whiteLilac,
          text: colorNames.slateGray,  
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.iron,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.lightBlue,
            header: colorNames.scienceBlue,
        }, 
        themeSwitch: {
            background: colorNames.mercury,
            backgroundIcon: colorNames.slateGray,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border:colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.lightMineShaft,
            backgroundIcon: colorNames.white,
            icon: colorNames.black,
        },
    },
};