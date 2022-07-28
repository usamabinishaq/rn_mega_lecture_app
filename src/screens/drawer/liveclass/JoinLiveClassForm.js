import React from 'react';
import {View} from 'react-native';
import ThinButton from '../../../components/buttons/ThinButton';
import TextInputWithLabel from '../../../components/inputText/TextInputWithLabel';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import variables, {width_screen} from '../../../utils/utils';
import styles from './style';

function JoinLiveClassForm(props) {
  return (
    <View style={styles.main}>
      <Appbar title={'Join Live Classes'} />
      <View
        style={{
          flex: 0.9,
          paddingHorizontal: '5%',
          paddingVertical: '2.5%',
        }}>
        <Heading
          size={variables.fontSizePSmall}
          fontFamily={variables.interFontSemiBold}
          color={variables.colorFontDark}>
          {`For FREE trial classes, fill out the following form`}
        </Heading>
        {/* {//Form} */}
        <View style={{width: '100%', height: '100%'}}>
          <TextInputWithLabel
            label={'Name'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <TextInputWithLabel
            label={'Email'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <TextInputWithLabel
            label={'Country'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <TextInputWithLabel
            label={'Whatsapp Number'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <TextInputWithLabel
            label={'Exam'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <TextInputWithLabel
            label={'Subjects'}
            required={true}
            onChangeText={e => {
              console.log(e);
            }}
          />
          <ThinButton
            borderRadius={10}
            style={{minWidth: width_screen * 0.3, marginVertical: '5%'}}
            fontSize={12}>
            {'Sign Up'}
          </ThinButton>
        </View>
      </View>
    </View>
  );
}

export default JoinLiveClassForm;
