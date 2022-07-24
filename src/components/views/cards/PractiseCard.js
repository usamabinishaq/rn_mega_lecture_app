import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TARGET} from '../../../constants/constants';
import variables, {width_screen} from '../../../utils/utils';
import BasicText from '../../text/BasicText';
import Heading from '../../text/Heading';

function PractiseCard({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient style={styles.main} colors={variables.cardGradient1}>
        <View style={styles.imageContainer}>
          <Image source={TARGET} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}>
            {'Practise'}
          </Heading>
          <BasicText
            size={variables.fontSizeSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontMediam}
            noOfLines={2}>
            {'Browse through thousands of questions....'}
          </BasicText>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

export default PractiseCard;
const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.45,
    height: '100%',
    borderRadius: 10,
    marginRight: '2.5%',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 0.4,
    paddingLeft: '10%',
  },
});
