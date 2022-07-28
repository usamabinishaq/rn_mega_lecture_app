import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import variables, {height_screen, width_screen} from '../../utils/utils';
import ThinButton from '../buttons/ThinButton';
import Heading from '../text/Heading';

function SingleCourseCard({
  data,
  onPress,
  joinButton,
  onJoin,
  height = height_screen * 0.225,
}) {
  return (
    <Pressable style={[styles.main, {height: height}]} onPress={onPress}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          height: height - height_screen * 0.18,
        }}>
        <Heading
          size={variables.getSize(12)}
          fontFamily={variables.interFontMediam}
          style={{}}>
          {data.name}
        </Heading>
        {joinButton ? (
          <ThinButton
            fontSize={12}
            borderRadius={10}
            onPress={onJoin}
            style={{marginVertical: '5%'}}>
            {'Join'}
          </ThinButton>
        ) : null}
      </View>
    </Pressable>
  );
}
export default SingleCourseCard;
const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.43,

    backgroundColor: variables.colorWhite,
    borderRadius: 20,
    alignItems: 'center',
    padding: '2.5%',
    paddingBottom: '2%',
    borderWidth: 1,
    borderColor: variables.colorBorder,
    margin: '2.5%',
  },
  image: {width: '98%', height: height_screen * 0.165, borderRadius: 10},
});
