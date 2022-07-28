import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import variables, {width_screen} from '../../utils/utils';
import BasicText from '../text/BasicText';

function LinkLabel({
  message,
  label,
  onPress,
  style,
  labelColor = variables.colorPrimary,
  size = variables.getSize(14),
}) {
  return (
    <View style={styles.mainContainer}>
      <BasicText
        size={size}
        color={variables.placeHolderColor}
        fontFamily={variables.interFontMediam}>
        {message}
      </BasicText>

      <Pressable onPress={onPress}>
        <BasicText
          size={size}
          color={labelColor}
          fontFamily={variables.interFontSemiBold}
          style={{paddingHorizontal: '2.5%'}}>
          {label}
        </BasicText>
      </Pressable>
    </View>
  );
}

export default LinkLabel;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: width_screen,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7%',
  },
});
