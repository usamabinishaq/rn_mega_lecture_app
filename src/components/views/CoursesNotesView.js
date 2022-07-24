import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {DummyUrl} from '../../constants/constants';
import variables, {width_screen} from '../../utils/utils';
import Heading from '../text/Heading';

function CoursesNotesView({
  image,
  title,
  watch = false,
  onPress,
  titleColor = variables.fontColorMain,
  ...props
}) {
  return (
    <Pressable style={styles.main} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <Heading
        size={variables.getSize(12)}
        color={titleColor}
        fontFamily={variables.interFontRegular}
        style={{paddingHorizontal: '5%', flex: 1}}>
        {title}
      </Heading>
      {watch ? (
        <Pressable onPress={onPress}>
          <Heading
            size={variables.getSize(12)}
            color={variables.colorPrimary}
            fontFamily={variables.interFontRegular}
            style={{}}>
            {'Watch'}
          </Heading>
        </Pressable>
      ) : null}
    </Pressable>
  );
}

export default CoursesNotesView;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: variables.getSize(10),
    borderWidth: 1,
    width: width_screen * 0.9,
    borderColor: variables.colorBorder,
    paddingHorizontal: '3.5%',
    paddingVertical: '4%',
    alignSelf: 'center',
    marginVertical: '2.5%',
  },
  image: {
    width: variables.getSize(35),
    height: variables.getSize(35),
    borderRadius: variables.getSize(35 / 2),
  },
});
