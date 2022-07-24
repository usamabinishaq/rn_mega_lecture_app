import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../utils/utils';
import BasicText from '../text/BasicText';

function CheckBox({
  checked,
  label,
  onCheckChange,
  labelColor = variables.placeHolderColor,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon
        name={checked ? 'checkbox' : 'square-outline'}
        color={variables.colorPrimary}
        size={20}
        onPress={() => onCheckChange(!checked)}
      />
      {label ? (
        <BasicText
          size={variables.getSize(12)}
          color={labelColor}
          fontFamily={variables.interFontMediam}
          style={{paddingLeft: '2.5%'}}>
          {label}
        </BasicText>
      ) : null}
    </View>
  );
}

export default CheckBox;
