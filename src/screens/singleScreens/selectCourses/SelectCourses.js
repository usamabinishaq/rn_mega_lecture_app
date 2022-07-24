import React from 'react';
import {View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import styles from './style';

function SelectCourses({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar title={'Video Courses'} />
    </View>
  );
}

export default SelectCourses;
