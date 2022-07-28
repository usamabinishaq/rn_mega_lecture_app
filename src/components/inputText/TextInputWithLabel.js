import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import variables from '../../utils/utils';
import {width_screen} from '../../utils/utils';
import Heading from '../text/Heading';
let ICON;
function TextInputWithLabel({
  value,
  onChangeText,
  placeholder,
  placeholderColor = variables.placeHolderColor,
  shadow,
  style,
  password,
  leftIcon,
  labelText,
  showPlaceholderWithValue,
  keyboardType,
  height,
  borderRadius = variables.borderRadiusSmall,
  label,
  required = true,
  ...props
}) {
  return (
    (ICON = leftIcon),
    (
      <View
        style={[
          styles.mainContainer,
          {
            borderRadius: borderRadius,
            ...style,
          },
        ]}>
        <Heading
          fontFamily={variables.interFontSemiBold}
          size={variables.getSize(12)}
          color={variables.colorFontLight}>
          {label}{' '}
          {required ? (
            <Heading
              fontFamily={variables.interFontSemiBold}
              size={variables.getSize(12)}
              color={variables.colorError}>
              {'*'}
            </Heading>
          ) : null}
        </Heading>
        <TextInput
          style={styles.input}
          value={value}
          secureTextEntry={password}
          keyboardType={keyboardType ? keyboardType : 'default'}
          onChangeText={onChangeText}
          returnKeyType={'done'}
          placeholderTextColor={variables.placeHolderColor}
          placeholder={placeholder}
          {...props}
        />
      </View>
    )
  );
}

export default TextInputWithLabel;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: variables.colorWhite,
    width: width_screen * 0.9,
    height: variables.getSize(60),
    marginVertical: '2.5%',
  },
  input: {
    color: variables.inputTextColor,
    height: '60%',
    marginVertical: '1%',
    fontSize: variables.getSize(10),
    fontFamily: variables.interFontRegular,
    borderRadius: variables.getSize(4),
    fontFamily: variables.interFontRegular,
    borderWidth: 1,
    borderColor: variables.placeHolderColor,
  },
});
