import {Platform} from 'react-native';

import {Dimensions} from 'react-native';
export const width_screen = Dimensions.get('window').width;
export const height_screen = Dimensions.get('window').height;
export const width_ = Dimensions.get('screen').width;
export const height_ = Dimensions.get('screen').height;
const getSize = size => size;

const variables = {
  getSize,
  colorPrimary: '#08BD80',
  colorSecondary: '#004AAD',
  colorPrimaryDark: '#1FAB5C',
  colorLightSkyBlue: '#F2FEFA',
  colorBlack: '#000000',
  colorBlackDim: 'rgba(0,0,0,0.5)',
  colorFontDark: '#444444',
  colorFontLight: '#44444470',
  colorBackIcon: '#535764',

  bannerGradient1: ['#004AAD', '#8F94FB'],
  bannerGradient2: ['#3A6186', '#7BC6CC'],
  bannerGradient3: ['#16BFFD', '#CB3066'],
  bannerGradient4: ['#7B4397', '#8F94FB'],

  cardGradient1: ['#FED271', '#FFD14B'],
  cardGradient2: ['#EF9FC2', '#FF75B1'],
  cardGradient3: ['#85BFFF', '#449CFC'],

  colorWhite: '#ffffff',
  colorWhiteDim: '#f2f2f2',
  colorGrayDim: '#FAFAFA',
  colorSuccess: '#18B141',
  colorError: '#FF6060',
  colorBorder: '#E3E3E3',
  colorIconBorder: '#a4a4a4',
  colorBackground: '#FAFBFF',
  colorLightSubtext: '#9595CE',
  transactionIconBGColor: '#E0E5F8',
  fontColorMain: '#004AAD',
  inputTextColor: '#000',
  fontColorGray: '#A1A1A1',
  fontColorMediumGray: '#716F81',
  colorLightBorder: '#F8F8F8',

  placeHolderColor: '#AFAFAF',

  dimGray: '#ababab',
  tagBgColor: '#D9D9D9',

  // fontBold: "SF-Pro-Display-Bold",
  // fontSemiBold: "SF-Pro-Display-Semibold",
  // fontRegular: "Poppins-Regular",
  // fontThin: "SF-Pro-Display-Light",
  // fontMediam: "SF-Pro-Display-Medium",
  // fontItalic: "SF-Pro-Display-LightItalic",

  poppinsFontBold: Platform.OS === 'android' ? 'poppinsbold' : 'poppinsbold',
  poppinsFontSemiBold:
    Platform.OS === 'android' ? 'poppinssemibold' : 'poppinssemibold',
  poppinsFontRegular:
    Platform.OS === 'android' ? 'poppinsregular' : 'poppinsregular',
  poppinsFontMediam:
    Platform.OS === 'android' ? 'poppinsmedium' : 'poppinsmedium',
  interFontBold: Platform.OS === 'android' ? 'interbold' : 'interbold',
  interFontSemiBold:
    Platform.OS === 'android' ? 'intersemibold' : 'intersemibold',
  interFontRegular: Platform.OS === 'android' ? 'interregular' : 'interregular',
  interFontMediam: Platform.OS === 'android' ? 'intermedium' : 'intermedium',

  // fontBold: "",
  // fontSemiBold: "",
  // fontRegular: "",
  // fontThin: "",
  // fontMediam: "",
  // fontItalic: "",
  fontWeightBold: '600',
  fontWeightThin: '200',
  fontWeightRegular: '400',
  colorHeading: '#2D2D53',
  colorSubtext: '#8B8B8B',
  avatarColor: '#EFABAB',
  colorRatingActive: '#00CA9D',
  colorRatingInActive: '#DAD9E2',

  fontSizeH1Large: getSize(50),
  fontSizeH1Medium: getSize(32),
  fontSizeH1Small: getSize(27),
  fontSizeH2Large: getSize(24),
  fontSizeH2Medium: getSize(21),
  fontSizeH2Small: getSize(18),
  fontSizePMedium: getSize(16),
  fontSizePSmall: getSize(14),
  fontSizeSubtext: getSize(12),
  fontSizeSmall: getSize(10),
  fontSizeTine: getSize(8),

  UIPaddingHorizontal: '6%',
  UIPaddingVertical: '6%',
  authPagePaddingTop: '30%',
  tineScale: height_screen * 0.005,
  firstScale: height_screen * 0.01,
  secondScale: height_screen * 0.015,
  thirdScale: height_screen * 0.02,
  fourScale: height_screen * 0.025,
  fiveScale: height_screen * 0.03,
  sixScale: height_screen * 0.04,
  iosTopPadding: height_screen * 0.05,
  iosTopPadding_firstScale: height_screen * 0.03,

  borderRadiusSmall: getSize(5),
  borderRadiusMedium: getSize(10),
  borderRadiusLarge: getSize(30),
  borderRadiusXLarge: getSize(70),

  shadowStyle: intensity => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: intensity / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: intensity * 0.7,
    elevation: intensity,
  }),

  circleStyle: size => ({
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  circleSizeSmall: getSize(50),
  circleSizeMedium: getSize(60),
};

export default variables;
