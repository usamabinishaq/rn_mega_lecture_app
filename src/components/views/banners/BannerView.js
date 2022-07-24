import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SLIDER1} from '../../../constants/constants';
import variables, {height_screen, width_screen} from '../../../utils/utils';
import CustomButton from '../../buttons/CustomButton';
import ThinButton from '../../buttons/ThinButton';
import Heading from '../../text/Heading';

function BannerView({
  gradient,
  title,
  description,
  image,
  multiButtons = false,
  buttonTitle1,
  buttonPress1,
  buttonTitle2,
  buttonPress2,
  ...props
}) {
  return (
    <LinearGradient
      style={styles.main}
      colors={gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={{flex: 0.65, padding: '5%'}}>
        <Heading
          size={variables.fontSizePSmall}
          color={variables.colorWhite}
          fontFamily={variables.interFontBold}>
          {title}
        </Heading>
        <Heading
          size={variables.fontSizeSmall}
          color={variables.colorWhite}
          fontFamily={variables.interFontMediam}
          style={{paddingVertical: '5%', lineHeight: 15}}>
          {description}
        </Heading>
        <View style={{flexDirection: 'row'}}>
          {multiButtons ? (
            <>
              <ThinButton onPress={buttonPress1}>{buttonTitle1}</ThinButton>
              <ThinButton onPress={buttonPress2}>{buttonTitle2}</ThinButton>
            </>
          ) : (
            <ThinButton onPress={buttonPress1}>{buttonTitle1}</ThinButton>
          )}
        </View>
      </View>
      <View
        style={{flex: 0.35, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={image} style={styles.sliderImage} />
      </View>
    </LinearGradient>
  );
}

export default BannerView;
const styles = StyleSheet.create({
  main: {
    height: variables.getSize(height_screen * 0.19),
    flexDirection: 'row',
    alignSelf: 'center',
    width: width_screen * 0.9,
    marginVertical: '2.5%',
    backgroundColor: variables.colorSecondary,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  sliderImage: {
    width: '100%',
    resizeMode: 'contain',
  },
});
