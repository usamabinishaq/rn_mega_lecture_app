import React from 'react';
import variables from '../../utils/utils';
import Text from './Text';

export const textSize = {
  MEDIUM: variables.fontSizePMedium,
  SMALL: variables.fontSizePSmall,
  EX_SMALL: variables.fontSizeSubtext,
};

function BasicText({
  children,
  size = textSize.MEDIUM,
  fontFamily,
  color = variables.colorBlack,
  ...props
}) {
  return (
    <Text fontSize={size} color={color} fontFamily={fontFamily} {...props}>
      {children}
    </Text>
  );
}

export default BasicText;
