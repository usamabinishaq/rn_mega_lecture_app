import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import variables, {width_screen} from '../../utils/utils';
import Heading, {headingSize} from '../text/Heading';

function CustomButton({
  onPress,
  children,
  shadow,
  lightText,
  style,
  disabled = false,
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.buttonContainer,
        {
          ...(shadow ? variables.shadowStyle(4) : {}),
          ...style,
        },
      ]}
      {...props}
      onPress={onPress}>
      {/* // disabled={disabled ? disawbled : api_loading} */}
      {typeof children == 'string' ? (
        <Heading
          size={variables.fontSizePSmall}
          color={variables.colorWhite}
          style={{fontFamily: variables.interFontBold, letterSpacing: 0.5}}>
          {children}
        </Heading>
      ) : (
        children
      )}
      {/* {api_loading ? (
        <ActivityIndicator
          style={{paddingLeft: variables.firstScale}}
          color={variables.colorWhite}
        />
      ) : null} */}
    </TouchableOpacity>
  );
}

export default CustomButton;
const styles = StyleSheet.create({
  buttonContainer: {
    width: width_screen * 0.45,
    backgroundColor: variables.colorPrimary,
    padding: '3.5%',
    borderRadius: variables.getSize(8),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
