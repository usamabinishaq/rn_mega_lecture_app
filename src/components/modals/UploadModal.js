import {Done, Kinematics, UPLOAD_ICON} from '../../constants/constants';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import variables, {height_screen, width_screen} from '../../utils/utils';

import CustomButton from '../buttons/CustomButton';
import UPLOADICON from '../../assets/icons/image_upload.svg';
import LinkLabel from '../views/LinkLabel';
import Icon from '../../utils/icons';
import Heading, {headingSize} from '../text/Heading';
import ThinButton from '../buttons/ThinButton';

let ICON;
function UploadModal({
  title,
  chapterName,
  downloadLeft,
  onClose,
  onUpload,
  ...props
}) {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        width: width_screen,
        height: height_screen,
        backgroundColor: '#00000025',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.mainContainer, variables.shadowStyle(4)]}>
        <View style={styles.headerView}>
          <Heading
            color={variables.colorWhite}
            size={variables.fontSizePSmall}
            fontFamily={variables.interFontBold}
            style={{flex: 1, textAlign: 'center', left: 10}}>
            {title}
          </Heading>

          <Icon
            style={{color: variables.colorWhite}}
            type={'entypo'}
            name="cross"
            size={25}
            onPress={onClose}
          />
        </View>

        <View style={styles.body}>
          <UPLOADICON style={styles.uploadImage} />
          <View style={[styles.chapterView, variables.shadowStyle(4)]}>
            <Heading
              size={variables.getSize(12)}
              fontFamily={variables.interFontMediam}
              color={variables.fontDarkGray}
              style={{
                paddingHorizontal: '5%',
                flex: 0.95,
                textAlign: 'left',
              }}>
              {'Upload Answers File'}
            </Heading>
            <Icon
              name={'diff-added'}
              type={'octicon'}
              color={variables.colorPrimary}
              size={20}
            />
          </View>
          <ThinButton
            onPress={onUpload}
            shadow={true}
            style={{
              marginVertical: '10%',
              borderRadius: 10,
              width: width_screen * 0.25,
            }}>
            {'Upload'}
          </ThinButton>
        </View>
      </View>
    </View>
  );
}

export default UploadModal;
const styles = StyleSheet.create({
  mainContainer: {
    width: width_screen * 0.85,
    height: '35%',
    maxHeight: '45%',
    backgroundColor: variables.colorWhite,
    borderRadius: 10,
  },
  input: {
    color: variables.inputTextColor,
    flex: 1,
    fontFamily: variables.interFontRegular,
    minHeight: Platform.OS == 'ios' ? 40 : 30,
  },
  headerView: {
    width: '100%',
    backgroundColor: variables.colorPrimary,
    height: '12%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
  body: {
    height: '88%',
    width: '100%',
    marginTop: '5%',

    backgroundColor: variables.colorWhite,

    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  uploadImage: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  chapterView: {
    minWidth: width_screen * 0.65,
    maxWidth: width_screen * 0.8,
    borderRadius: variables.getSize(5),
    marginHorizontal: '5%',

    marginTop: '10%',
    height: 45,
    backgroundColor: variables.colorWhite,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageStyle: {width: 25, height: 25, borderRadius: 25 / 2},
  downloadLeftView: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
