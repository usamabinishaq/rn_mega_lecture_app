import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import CustomTextInput from '../../../components/inputText/CustomTextInput';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import RoundedLogoView from '../../../components/views/RoundedLogoView';
import EMAIL_ICON from '../../../assets/icons/email.svg';
import PASSWORD_ICON from '../../../assets/icons/password.svg';
import PHONE_ICON from '../../../assets/icons/phone.svg';

import variables, {height_screen, width_screen} from '../../../utils/utils';
import styles from '../style';
import CheckBox from '../../../components/buttons/CheckBox';
import CustomButton from '../../../components/buttons/CustomButton';
import LinkLabel from '../../../components/views/LinkLabel';

function SignUp({navigation}) {
  const [isRemebered, setRemembered] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <RoundedLogoView />
      <View style={{flex: 0.8, alignItems: 'center'}}>
        <Heading
          color={variables.fontColorMain}
          fontFamily={variables.poppinsFontMediam}
          size={variables.fontSizeH2Medium}
          style={styles.mainHeading}>
          {'Sign Up'}
        </Heading>
        <BasicText
          color={variables.fontColorGray}
          size={variables.fontSizePMedium}
          fontFamily={variables.poppinsFontMediam}
          style={{paddingTop: '2%'}}>
          {'Create Account'}
        </BasicText>
        <View style={{padding: '5%'}} />
        <CustomTextInput
          placeholder={'Email'}
          leftIcon={EMAIL_ICON}
          onChangeText={e => {
            console.log(e);
          }}
        />
        <CustomTextInput
          placeholder={'Phone Number'}
          leftIcon={PHONE_ICON}
          keyboardType={'numeric'}
          onChangeText={e => {
            console.log(e);
          }}
        />
        <CustomTextInput
          placeholder={'Password'}
          leftIcon={PASSWORD_ICON}
          password={true}
          onChangeText={e => {
            console.log(e);
          }}
        />
        <View style={styles.row}>
          <CheckBox
            label={'I accept the Terms of Service and Privacy Policy'}
            checked={isRemebered}
            onCheckChange={e => {
              setRemembered(e);
            }}
          />
        </View>
        <CustomButton
          onPress={() => {}}
          shadow={true}
          style={{marginTop: '7%'}}>
          {'Sign Up'}
        </CustomButton>
        <LinkLabel
          onPress={() => {
            navigation.navigate('Login');
          }}
          message={'Already have an account?'}
          label={'Sign In'}
        />
      </View>
    </View>
  );
}

export default SignUp;
