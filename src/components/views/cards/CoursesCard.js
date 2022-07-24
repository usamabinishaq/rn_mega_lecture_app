import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BOOK} from '../../../constants/constants';

import variables, {width_screen} from '../../../utils/utils';
import BasicText from '../../text/BasicText';
import Heading from '../../text/Heading';

function CoursesCard({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient style={styles.main} colors={variables.cardGradient2}>
        <View style={styles.imageContainer}>
          <Image source={BOOK} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}>
            {'Courses'}
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

export default CoursesCard;
const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.4,
    height: variables.getSize(100),
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  image: {
    width: variables.getSize(95),
    height: variables.getSize(70),
    left: variables.getSize(15),
    resizeMode: 'contain',
  },
  bottomContainer: {
    bottom: variables.getSize(-45),
    paddingLeft: '10%',
  },
});
