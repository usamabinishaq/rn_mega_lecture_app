import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import variables, {width_screen} from '../../utils/utils';
import Heading, {headingSize} from '../text/Heading';

function ThinButton({
  onPress,
  children,
  borderRadius = 4,
  shadow,
  lightText,
  style,
  fontSize = 10,
  disabled = false,
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.buttonContainer,
        {
          borderRadius: borderRadius,
          ...(shadow ? variables.shadowStyle(4) : {}),
          ...style,
        },
      ]}
      {...props}
      onPress={onPress}>
      {/* // disabled={disabled ? disabled : api_loading} */}
      {typeof children == 'string' ? (
        <Heading
          size={fontSize}
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

export default ThinButton;
const styles = StyleSheet.create({
  buttonContainer: {
    minWidth: width_screen * 0.2,
    alignSelf: 'center',
    backgroundColor: variables.colorPrimary,
    padding: '2.5%',
    paddingHorizontal: '3%',
    marginRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
