import React from 'react';
import {Text as RNText} from 'react-native';
import variables from '../../utils/utils';
function Text({
  children,
  highlight,
  highlightColor = variables.colorPrimary,
  fontSize,
  fontFamily,
  color = variables.colorBlack,
  style,
  ...props
}) {
  return (
    <RNText
      {...props}
      style={{
        fontSize,
        color: highlight ? highlightColor : color,
        fontFamily: fontFamily,

        ...style,
      }}>
      {children}
    </RNText>
  );
}

export default Text;
