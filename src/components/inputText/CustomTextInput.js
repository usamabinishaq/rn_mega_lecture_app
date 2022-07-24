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
let ICON;
function CustomTextInput({
  value,
  onChangeText,
  placeholder,
  placeholderColor = variables.placeHolderColor,
  shadow,
  style,
  password,
  leftIcon,
  labelText,
  width = width_screen * 0.8,
  showPlaceholderWithValue,
  keyboardType,
  height,
  borderRadius = variables.borderRadiusSmall,

  ...props
}) {
  return (
    (ICON = leftIcon),
    (
      <View
        style={[
          styles.mainContainer,
          {
            width: width,
            height: height ? height : null,
            borderRadius: borderRadius,
            ...style,
          },
        ]}>
        <ICON width={20} height={20} style={{marginRight: '5%'}} />
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

export default CustomTextInput;
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: variables.secondScale,
    borderRadius: variables.borderRadiusMedium,
    backgroundColor: variables.colorGrayDim,
    borderColor: variables.colorBorder,
    borderWidth: 1,

    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2.5%',
  },
  input: {
    color: variables.inputTextColor,
    flex: 1,
    fontFamily: variables.interFontRegular,
    minHeight: Platform.OS == 'ios' ? 40 : 30,
  },
});
