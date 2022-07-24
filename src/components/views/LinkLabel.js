import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import variables, {width_screen} from '../../utils/utils';
import BasicText from '../text/BasicText';

function LinkLabel({message, label, onPress}) {
  return (
    <View style={styles.mainContainer}>
      <BasicText
        size={variables.getSize(14)}
        color={variables.placeHolderColor}
        fontFamily={variables.interFontMediam}>
        {message}
      </BasicText>

      <Pressable onPress={onPress}>
        <BasicText
          size={variables.getSize(14)}
          color={variables.colorPrimary}
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
