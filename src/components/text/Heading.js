import React from 'react';
import variables from '../../utils/utils';
import Text from './Text';

export const headingSize = {
  LARGE: variables.fontSizeH1Large,
  MEDIUM: variables.fontSizeH1Medium,
  SMALL: variables.fontSizeH1Small,
  XSMALL: variables.fontSizeH2Medium,
  XXSMALL: variables.fontSizeH2Small,
};

function Heading({
  children,
  size = headingSize.MEDIUM,
  color = variables.colorHeading,
  fontFamily,
  ...props
}) {
  return (
    <Text fontSize={size} color={color} bold {...props} fontFamily={fontFamily}>
      {children}
    </Text>
  );
}

export default Heading;
