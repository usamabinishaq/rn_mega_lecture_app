import React from 'react';
import {FlatList, View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import styles from './style';
import MENUICON from '../../../assets/icons/menu.svg';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import SingleCourseCard from '../../../components/views/SingleCourseCard';
import {CoursesData} from '../../../data/data';
import {height_screen} from '../../../utils/utils';

function LiveClass({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar
        leftIcon={MENUICON}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 0.85}}>
        <DropDownPicker
          label={'Exam Type'}
          items={['Examination (Cambridge O Levels, Matric, ACCA etc.)']}
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
                joinButton={true}
                height={height_screen * 0.275}
                onJoin={() => {
                  navigation.navigate('JoinLiveClassForm');
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

export default LiveClass;
