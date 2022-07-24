import React from 'react';
import {FlatList, View} from 'react-native';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import Appbar from '../../../components/views/Appbar';
import SingleCourseCard from '../../../components/views/SingleCourseCard';
import {CoursesData} from '../../../data/data';
import variables from '../../../utils/utils';
import styles from './style';

function SelectVideoCourse({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar title={'Select Video Course'} />
      <View style={{flex: 0.9, backgroundColor: variables.colorWhite}}>
        <DropDownPicker
          zIndex={10}
          label={'Examination'}
          items={['CAIE: Cambridge Assessment International Examination']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <DropDownPicker
          label={'Category'}
          items={['O-Levels: Ordinary Level']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <FlatList
          style={{marginTop: '2.5%'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={CoursesData}
          renderItem={({item, index}) => {
            return (
              <SingleCourseCard
                data={item}
                onPress={() => {
                  navigation.navigate('SelectNotes');
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

export default SelectVideoCourse;
