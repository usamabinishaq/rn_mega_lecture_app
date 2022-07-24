import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables, {width_screen} from '../../utils/utils';
import Heading from '../text/Heading';

function SingleNotesView({bulletsType, title, index}) {
  return (
    <View style={styles.main}>
      {bulletsType === 'numeric' ? (
        <Heading
          size={variables.getSize(12)}
          color={variables.colorFontDark}
          fontFamily={variables.interFontRegular}
          style={{paddingRight: '2%'}}>
          {`${index}.`}
        </Heading>
      ) : (
        <Icon
          name="ellipse-sharp"
          color={variables.colorFontDark}
          size={5}
          style={{paddingRight: '2%'}}
        />
      )}
      <Heading
        size={variables.getSize(12)}
        color={variables.colorFontDark}
        fontFamily={variables.interFontRegular}
        style={{flex: 1}}>
        {title}
      </Heading>
      <Pressable onPress={() => {}}>
        <Heading
          size={variables.getSize(12)}
          color={variables.colorPrimary}
          fontFamily={variables.interFontSemiBold}>
          {'Download'}
        </Heading>
      </Pressable>
    </View>
  );
}

export default SingleNotesView;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: width_screen * 0.9,
    marginVertical: '2.5%',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
