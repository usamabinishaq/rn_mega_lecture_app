import React from 'react';
import {View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import styles from './style';
import MENUICON from '../../../assets/icons/menu.svg';
import variables, {width_screen} from '../../../utils/utils';

function Home({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar
        leftIcon={MENUICON}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 0.85, backgroundColor: variables.colorWhite}}></View>
    </View>
  );
}

export default Home;
