import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BOOK, CARD3} from '../../../constants/constants';

import variables, {width_screen} from '../../../utils/utils';
import BasicText from '../../text/BasicText';
import Heading from '../../text/Heading';

function LiveClassCard({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient style={styles.main} colors={variables.cardGradient3}>
        <View style={styles.bottomContainer}>
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}>
            {'Join Live Class'}
          </Heading>
          <BasicText
            size={variables.fontSizeSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontMediam}
            noOfLines={2}>
            {'Get instant help from expert teachers...'}
          </BasicText>
        </View>
        <View style={styles.imageContainer}>
          <Image source={CARD3} style={styles.image} />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

export default LiveClassCard;
const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.4,
    height: variables.getSize(75),
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    width: '75%',
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
