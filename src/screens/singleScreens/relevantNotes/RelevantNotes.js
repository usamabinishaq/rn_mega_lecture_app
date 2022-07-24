import React from 'react';
import {ScrollView, View} from 'react-native';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import SingleNotesView from '../../../components/views/SingleNotesView';
import {Notes, Worksheets} from '../../../data/data';
import variables from '../../../utils/utils';
import styles from './style';

function RelevantNotes({navigation, route}) {
  let {title} = route.params.course;
  return (
    <View style={styles.main}>
      <Appbar title={title + ' Notes'} />
      <View style={{flex: 0.9}}>
        <ScrollView>
          <Heading
            size={variables.getSize(14)}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}
            style={{marginHorizontal: '5%', marginVertical: '3%'}}>
            {`Worksheets`}
          </Heading>
          {Worksheets.map((item, index) => {
            return (
              <SingleNotesView key={index} bulletsType={'dots'} title={item} />
            );
          })}
          <Heading
            size={variables.getSize(14)}
            color={variables.colorFontDark}
            fontFamily={variables.interFontSemiBold}
            style={{marginHorizontal: '5%', marginVertical: '3%'}}>
            {`${title} (Updated)`}
          </Heading>
          {Notes.map((item, index) => {
            return (
              <SingleNotesView
                key={index}
                bulletsType={'numeric'}
                title={item}
                index={index + 1}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default RelevantNotes;
