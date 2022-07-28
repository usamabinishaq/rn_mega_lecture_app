import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {LOGO} from '../../constants/constants';
import variables from '../../utils/utils';
import Heading from '../text/Heading';
import ToggleSwitch from 'toggle-switch-react-native';

function Appbar({leftIcon, title, timer, onTimer, onLeftIconPress, isTimer}) {
  let ImageIcon = leftIcon;
  const navigate = useNavigation();

  return (
    <View style={[styles.main, {flex: leftIcon ? 0.15 : 0.1}]}>
      {leftIcon ? (
        <Pressable onPress={onLeftIconPress} style={{flex: 0.1}}>
          <ImageIcon width={25} height={25} />
        </Pressable>
      ) : (
        <Icon
          name="chevron-thin-left"
          size={20}
          color={variables.colorBackIcon}
          onPress={() => {
            navigate.goBack();
          }}
        />
      )}
      {title ? (
        <Heading
          size={variables.fontSizePMedium}
          color={variables.fontColorMain}
          fontFamily={variables.interFontSemiBold}
          style={{flex: 1, textAlign: 'center', right: timer ? -25 : 5}}>
          {title}
        </Heading>
      ) : (
        <Image source={LOGO} style={styles.image} />
      )}
      {timer ? (
        <ToggleSwitch
          isOn={isTimer}
          onColor={variables.colorPrimary}
          offColor={variables.fontDarkGray}
          label={'Timer'}
          labelStyle={{
            color: variables.colorBackIcon,
            fontSize: variables.fontSizeSmall,
            fontFamily: variables.interFontMediam,
          }}
          size="small"
          onToggle={onTimer}
        />
      ) : null}
    </View>
  );
}

export default Appbar;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    paddingHorizontal: '5%',

    alignItems: 'center',
  },
  image: {width: 60, height: 60, flex: 0.9, resizeMode: 'contain', right: 15},
});
