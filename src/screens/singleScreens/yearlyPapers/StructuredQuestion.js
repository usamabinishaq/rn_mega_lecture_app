import React, {useState} from 'react';
import {Image, View} from 'react-native';
import ThinButton from '../../../components/buttons/ThinButton';
import AlertModal from '../../../components/modals/AlertModal';
import UploadModal from '../../../components/modals/UploadModal';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import {Structured_Image} from '../../../constants/constants';
import variables, {width_screen} from '../../../utils/utils';
import styles from './style';

function StructuredQuestion({navigation}) {
  const [isTimer, setIsTimer] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

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
      {isUploadModalVisible ? (
        <UploadModal
          title={'Upload Answers'}
          onClose={() => {
            setIsUploadModalVisible(false);
          }}
          onUpload={() => {
            setIsUploadModalVisible(false);
            setIsUploadSuccess(true);
          }}
        />
      ) : isUploadSuccess ? (
        <AlertModal
          title={'Upload Answers'}
          message={'Uploaded Successfully'}
          onPress={() => {
            setIsUploadSuccess(false);
          }}
          onClose={() => {
            setIsUploadSuccess(false);
          }}
        />
      ) : null}
      <View
        style={{
          flex: 0.9,
          backgroundColor: variables.colorWhite,
          marginHorizontal: '5%',
        }}>
        <Heading
          size={variables.fontSizePSmall}
          color={variables.fontColorMain}
          fontFamily={variables.interFontSemiBold}
          style={{
            textAlign: 'left',
            width: width_screen * 0.65,
            alignSelf: 'center',
          }}>
          {`Kinematics - Structured Questions - O levels - 2019`}
        </Heading>
        <Heading
          size={variables.getSize(12)}
          color={variables.colorFontDark}
          fontFamily={variables.interFontSemiBold}
          style={{paddingTop: '5%'}}>
          {`Question Paper`}
        </Heading>
        <Image
          source={Structured_Image}
          style={{
            width: '100%',
            height: '75%',
            resizeMode: 'contain',
            borderWidth: 1,
            borderColor: variables.colorBorder,
            marginVertical: '5%',
          }}
        />
        <ThinButton
          fontSize={12}
          borderRadius={10}
          onPress={() => {
            setIsUploadModalVisible(true);
          }}
          style={{minWidth: width_screen * 0.3}}>
          {'Upload Answer'}
        </ThinButton>
      </View>
    </View>
  );
}

export default StructuredQuestion;
