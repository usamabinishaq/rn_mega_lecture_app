import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import variables, {height_screen} from '../../utils/utils';
import {DEFAULT_USER} from '../../constants/constants';
import Heading from '../../components/text/Heading';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={variables.colorWhite}
        barStyle={'dark-content'}
      />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: variables.colorSecondary}}>
        <View style={styles.topContainer}>
          <Image
            source={DEFAULT_USER}
            style={{
              height: variables.getSize(48),
              width: variables.getSize(48),
              borderRadius: 40,
              marginRight: '5%',
            }}
          />
          <Pressable
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Heading
              size={variables.fontSizePSmall}
              color={variables.colorWhite}
              fontFamily={variables.interFontSemiBold}
              style={{letterSpacing: 0.5, paddingHorizontal: 5}}>
              {'Login'}
            </Heading>
          </Pressable>
          <Heading
            size={variables.fontSizePSmall}
            color={variables.colorWhite}
            fontFamily={variables.interFontSemiBold}
            style={{letterSpacing: 0.5, paddingHorizontal: 5}}>
            {'/'}
          </Heading>
          <Pressable
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}>
            <Heading
              size={variables.fontSizePSmall}
              color={variables.colorWhite}
              fontFamily={variables.interFontSemiBold}
              style={{letterSpacing: 0.5, paddingHorizontal: 5}}>
              {'SignUp'}
            </Heading>
          </Pressable>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: variables.colorSecondary,
    alignItems: 'center',
    flexDirection: 'row',
    height: height_screen * 0.15,
    paddingHorizontal: '5%',
  },
});
