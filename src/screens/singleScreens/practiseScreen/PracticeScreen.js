import React from 'react';
import {FlatList, View} from 'react-native';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import Appbar from '../../../components/views/Appbar';
import SingleCourseCard from '../../../components/views/SingleCourseCard';
import {CoursesData} from '../../../data/data';
import variables from '../../../utils/utils';
import Courses from '../../drawer/courses/Courses';
import styles from './style';

function PracticeScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar title={'Practice'} />
      <View style={{flex: 0.9, backgroundColor: variables.colorWhite}}>
        <DropDownPicker
          label={'Exam Type'}
          items={[
            'Examination (Cambridge O Levels, Matric, ACCA etc.)',
            'Examination (Cambridge O Levels, Matric, ACCA etc.)',
            'Examination (Cambridge O Levels, Matric, ACCA etc.)',
          ]}
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
                  navigation.navigate('YearlyPapersScreen');
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

export default PracticeScreen;
