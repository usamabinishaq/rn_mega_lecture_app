import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import McqsSingleQuestion from '../../../components/views/McqsSingleQuestion';
import variables from '../../../utils/utils';
import styles from './style';

function McqsQuestion(props) {
  const [isTimer, setIsTimer] = useState(false);
  return (
    <View style={styles.main}>
      <Appbar
        title={'Questions'}
        timer={true}
        isTimer={isTimer}
        onTimer={() => {
          setIsTimer(!isTimer);
        }}
      />
      <View style={{flex: 0.9, backgroundColor: variables.colorWhite}}>
        <Heading
          size={variables.fontSizePSmall}
          color={variables.fontColorMain}
          fontFamily={variables.interFontSemiBold}
          style={{textAlign: 'center'}}>
          {`Kinematics - MCQs - O levels - 2019`}
        </Heading>
        <View style={{flex: 0.6}}>
          <ScrollView>
            <McqsSingleQuestion
              questionNumber={1}
              question={'Which quantities are both vectors? '}
              options={[
                'acceleration and length',
                'distance and velocity',
                'length and distance',
                'velocity and acceleration',
              ]}
            />
            <McqsSingleQuestion
              questionNumber={2}
              question={
                'Which reading is given to one tenth of a millimetre?  '
              }
              options={['3.3 cm', '3.31 cm', '3.310 cm', '3.312 cm']}
            />
            <McqsSingleQuestion
              questionNumber={3}
              question={
                'Which reading is given to one tenth of a millimetre?  '
              }
              options={['3.3 cm', '3.31 cm', '3.310 cm', '3.312 cm']}
            />
          </ScrollView>
        </View>
        <View style={{flex: 0.4}}>
          <View style={styles.dashedView} />
          <View style={{flexDirection: 'row', marginVertical: '2.5%'}}>
            <View
              style={{
                flex: 0.55,
                height: '100%',
                width: '100%',
              }}>
              <ScrollView indicatorStyle="black" contentContainerStyle={{}}>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorFontDark}
                  style={{padding: 10}}>
                  {'Grading and Score'}
                </Heading>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: '2.5%',
                    alignItems: 'center',
                  }}>
                  <Heading
                    size={variables.getSize(12)}
                    fontFamily={variables.interFontSemiBold}
                    color={variables.colorFontDark}>
                    {'1. '}
                  </Heading>
                  {['A', 'B', 'C', 'D'].map((item, index) => {
                    return (
                      <Pressable
                        key={index}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: variables.colorError,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}>
                        <Heading
                          size={variables.getSize(12)}
                          fontFamily={variables.interFontSemiBold}
                          color={variables.colorError}>
                          {item}
                        </Heading>
                      </Pressable>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View
              style={{flex: 0.025, backgroundColor: variables.fontColorMain}}
            />
            <View style={{flex: 0.4725}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorFontDark}
                  style={{paddingTop: 10, paddingLeft: 10}}>
                  {'Total Score = '}
                </Heading>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorLink}
                  style={{paddingTop: 10}}>
                  {'40'}
                </Heading>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorFontDark}
                  style={{paddingTop: 10, paddingLeft: 10}}>
                  {'Student Analytics: '}
                </Heading>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorPrimary}
                  style={{paddingTop: 10}}>
                  {'30/40'}
                </Heading>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.colorFontDark}
                  style={{paddingTop: 10, paddingLeft: 10}}>
                  {'Set Timer: '}
                </Heading>
                <Heading
                  size={variables.getSize(12)}
                  fontFamily={variables.interFontMediam}
                  color={variables.fontColorMain}
                  style={{paddingTop: 10}}>
                  {'45 Minutes'}
                </Heading>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default McqsQuestion;
