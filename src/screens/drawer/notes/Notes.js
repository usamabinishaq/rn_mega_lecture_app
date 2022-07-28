import React from 'react';
import {FlatList, View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import styles from './style';
import MENUICON from '../../../assets/icons/menu.svg';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import SingleCourseCard from '../../../components/views/SingleCourseCard';
import {CoursesData} from '../../../data/data';
import variables, {height_screen} from '../../../utils/utils';
import Heading from '../../../components/text/Heading';
import CoursesNotesView from '../../../components/views/CoursesNotesView';
import {DummyUrl} from '../../../constants/constants';

function Notes({navigation}) {
  return (
    <View style={styles.main}>
      <Appbar
        leftIcon={MENUICON}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 0.85}}>
        <Heading
          fontFamily={variables.interFontSemiBold}
          size={variables.fontSizePSmall}
          color={variables.fontColorMain}
          style={{alignSelf: 'center'}}>
          {'Notes & Worksheets'}
        </Heading>
        <View style={{marginTop: '2.5%', marginHorizontal: '5%'}}>
          {/* Will Add Flat List For Dynamic Listing */}
          <Heading
            size={variables.getSize(12)}
            fontFamily={variables.interFontRegular}
            color={variables.colorBlack}>
            {'Chemistry'}
          </Heading>
          <CoursesNotesView
            image={DummyUrl[0]}
            title={'O Level Chemistry'}
            watch={false}
            onPress={() => {
              navigation.navigate('RelevantNotes', {
                course: {title: 'O Level Chemistry'},
              });
            }}
          />
          <CoursesNotesView
            image={DummyUrl[1]}
            title={'AS Level Chemistry'}
            watch={false}
            onPress={() => {
              navigation.navigate('RelevantNotes', {
                course: {title: 'AS Level Chemistry'},
              });
            }}
          />
        </View>
        <View style={{marginTop: '2.5%', marginHorizontal: '5%'}}>
          {/* Will Add Flat List For Dynamic Listing */}
          <Heading
            size={variables.getSize(12)}
            fontFamily={variables.interFontRegular}
            color={variables.colorBlack}>
            {'Physics'}
          </Heading>
          <CoursesNotesView
            image={DummyUrl[0]}
            title={'O Level Physics'}
            watch={false}
            onPress={() => {
              navigation.navigate('RelevantNotes', {
                course: {title: 'O Level Physics'},
              });
            }}
          />
          <CoursesNotesView
            image={DummyUrl[2]}
            title={'AS Level Physics'}
            watch={false}
            onPress={() => {
              navigation.navigate('RelevantNotes', {
                course: {title: 'AS Level Chemistry'},
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Notes;
