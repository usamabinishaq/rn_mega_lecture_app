import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import variables, {height_screen, width_screen} from '../../utils/utils';
import Heading from '../text/Heading';

function SingleCourseCard({data, onPress}) {
  return (
    <Pressable style={styles.main} onPress={onPress}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Heading
          size={variables.getSize(12)}
          fontFamily={variables.interFontMediam}>
          {data.name}
        </Heading>
      </View>
    </Pressable>
  );
}
export default SingleCourseCard;
const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.43,
    height: height_screen * 0.225,
    backgroundColor: variables.colorWhite,
    borderRadius: 20,
    alignItems: 'center',
    padding: '2.5%',
    paddingBottom: '2%',
    borderWidth: 1,
    borderColor: variables.colorBorder,
    margin: '2.5%',
  },
  image: {width: '98%', height: '80%', borderRadius: 10},
});
