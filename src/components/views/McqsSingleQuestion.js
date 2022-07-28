import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import variables, {width_screen} from '../../utils/utils';
import ThinButton from '../buttons/ThinButton';
import Heading from '../text/Heading';

function McqsSingleQuestion({questionNumber, question, options}) {
  const {navigate} = useNavigation();
  const getOptions = index => {
    switch (index) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
      default:
        break;
    }
  };
  return (
    <View style={styles.main}>
      <Heading
        size={variables.getSize(12)}
        color={variables.colorFontDark}
        fontFamily={variables.interFontMediam}
        style={{paddingVertical: 5}}>
        {`Question ${questionNumber}`}
      </Heading>
      <Heading
        size={variables.getSize(12)}
        color={variables.colorFontDark}
        fontFamily={variables.interFontMediam}
        style={{paddingVertical: 5}}>
        {`${questionNumber}. ${question}`}
      </Heading>
      {options.map((item, index) => {
        return (
          <Heading
            key={index}
            size={variables.getSize(12)}
            color={variables.colorFontDark}
            fontFamily={variables.interFontMediam}>
            <Heading
              fontFamily={variables.interFontBold}
              size={variables.getSize(12)}
              color={variables.colorFontDark}>
              {`${getOptions(index)}. `}
            </Heading>
            {`${item}`}
          </Heading>
        );
      })}
      <ScrollView contentContainerStyle={{paddingVertical: '5%'}} horizontal>
        <ThinButton
          onPress={() => {
            navigate('MarkingScheme');
          }}
          fontSize={variables.getSize(7)}
          style={{
            paddingHorizontal: '1%',
            marginRight: 5,
          }}>{`Marking Scheme`}</ThinButton>
        <ThinButton
          fontSize={variables.getSize(7)}
          style={{
            paddingHorizontal: '1%',
            marginRight: 5,
          }}>{`Video Explanation`}</ThinButton>
        <ThinButton
          fontSize={variables.getSize(7)}
          style={{
            paddingHorizontal: '1%',
            marginRight: 5,
            minWidth: width_screen * 0.1,
          }}>{`Notes`}</ThinButton>
        <ThinButton
          fontSize={variables.getSize(7)}
          style={{
            paddingHorizontal: '1%',
            marginRight: 5,
          }}>{`Video Course`}</ThinButton>
        <ThinButton
          fontSize={variables.getSize(7)}
          onPress={() => {
            navigate('JoinLiveClassForm');
          }}
          style={{
            paddingHorizontal: '1%',
            marginRight: 5,
          }}>{`Join Live Class`}</ThinButton>
      </ScrollView>
    </View>
  );
}

export default McqsSingleQuestion;
const styles = StyleSheet.create({
  main: {
    width: width_screen,
    paddingHorizontal: variables.getSize(25),
    paddingVertical: variables.getSize(10),
  },
});
