import React from 'react';
import {Image, View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import {Marking_SchemeImg} from '../../../constants/constants';
import {height_screen} from '../../../utils/utils';
import styles from './style';

function MarkingScheme({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar title={'Marking Scheme'} />
      <View
        style={{flex: 0.9, paddingHorizontal: '5%', paddingVertical: '2.5%'}}>
        <Image
          style={{
            width: '100%',

            resizeMode: 'contain',
          }}
          source={Marking_SchemeImg}
        />
      </View>
    </View>
  );
}

export default MarkingScheme;
