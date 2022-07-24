import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import CustomTextInput from '../../../components/inputText/CustomTextInput';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import RoundedLogoView from '../../../components/views/RoundedLogoView';
import EMAIL_ICON from '../../../assets/icons/email.svg';
import PASSWORD_ICON from '../../../assets/icons/password.svg';

import variables, {height_screen, width_screen} from '../../../utils/utils';
import styles from '../style';
import CheckBox from '../../../components/buttons/CheckBox';
import CustomButton from '../../../components/buttons/CustomButton';
import LinkLabel from '../../../components/views/LinkLabel';

function Login({navigation}) {
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
          {'Sign In'}
        </Heading>
        <BasicText
          color={variables.fontColorGray}
          size={variables.fontSizePMedium}
          fontFamily={variables.poppinsFontMediam}
          style={{paddingTop: '2%'}}>
          Welcome Back
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
          placeholder={'Password'}
          leftIcon={PASSWORD_ICON}
          password={true}
          onChangeText={e => {
            console.log(e);
          }}
        />
        <View style={styles.row}>
          <CheckBox
            label={'Remember me'}
            checked={isRemebered}
            onCheckChange={e => {
              setRemembered(e);
            }}
          />
          <Pressable
            onPress={() => {
              console.log('NAVIGATE TO FORGOT ');
            }}>
            <BasicText
              size={variables.getSize(12)}
              color={variables.placeHolderColor}
              fontFamily={variables.interFontMediam}>
              {'Forgot Password?'}
            </BasicText>
          </Pressable>
        </View>
        <CustomButton
          onPress={() => {
            navigation.navigate('InnerNavigation');
          }}
          shadow={true}
          style={{marginTop: '7%'}}>
          {'Sign In'}
        </CustomButton>
        <LinkLabel
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          message={'Don’t have an account?'}
          label={'Sign Up'}
        />
      </View>
    </View>
  );
}

export default Login;
