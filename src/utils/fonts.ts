import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratItalic: require("../../assets/fonts/Montserrat-Italic.ttf"),

    MontserratThin: require("../../assets/fonts/Montserrat-Thin.ttf"),
    MontserratThinItalic: require("../../assets/fonts/Montserrat-ThinItalic.ttf"),

    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratMediumItalic: require("../../assets/fonts/Montserrat-MediumItalic.ttf"),

    MontserratBlack: require("../../assets/fonts/Montserrat-Black.ttf"),
    MontserratBlackItalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"),

    MontserratSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratSemiBoldItalic: require("../../assets/fonts/Montserrat-SemiBoldItalic.ttf"),

    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratBoldItalic: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),

    MontserratExtraBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratExtraBoldItalic: require("../../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),

    MontserratLight: require("../../assets/fonts/Montserrat-Light.ttf"),
    MontserratLightItalic: require("../../assets/fonts/Montserrat-LightItalic.ttf"),

    MontserratExtraLight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    MontserratExtraLightItalic: require("../../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
  });
};
