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
import UPLOADICON from '../../assets/icons/upload.svg';
import LinkLabel from '../views/LinkLabel';
import Icon from '../../utils/icons';
import Heading, {headingSize} from '../text/Heading';
import ThinButton from '../buttons/ThinButton';
import {useNavigation} from '@react-navigation/native';

let ICON;
function DownloadModal({
  title,
  chapterName,
  downloadLeft,
  onClose,
  onDownload,
  ...props
}) {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        width: width_screen,
        height: height_screen * 0.9,
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
          <View style={{height: height_screen * 0.2}}>
            <UPLOADICON style={styles.uploadImage} />
            <View style={[styles.chapterView, variables.shadowStyle(4)]}>
              <Image source={Kinematics} style={styles.imageStyle} />
              <Heading
                size={variables.getSize(12)}
                fontFamily={variables.interFontMediam}
                color={variables.fontDarkGray}
                style={{paddingHorizontal: '5%'}}>
                {chapterName}
              </Heading>
            </View>
            <Heading
              size={variables.fontSizeSmall}
              fontFamily={variables.interFontMediam}
              color={variables.colorError}
              style={styles.downloadLeftView}>
              Download Left: {downloadLeft}
            </Heading>
          </View>
          <ThinButton
            onPress={onDownload}
            shadow={true}
            style={{
              marginVertical: '2.5%',
              borderRadius: 10,
              width: width_screen * 0.25,
            }}>
            {'Download PDF'}
          </ThinButton>
          <ThinButton
            onPress={() => {}}
            shadow={true}
            style={{
              marginVertical: '2.5%',
              borderRadius: 10,
              width: width_screen * 0.25,
            }}>
            {'View File'}
          </ThinButton>
          <LinkLabel
            message={'Download Unlimited Notes?'}
            label={'Buy Membership'}
            Member={true}
            labelColor={variables.colorLink}
            size={variables.fontSizeSmall}
            onPress={() => {
              navigate('SubscriptionScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default DownloadModal;
const styles = StyleSheet.create({
  mainContainer: {
    width: width_screen * 0.85,
    maxHeight: '50%',

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
    paddingVertical: '5%',
    backgroundColor: variables.colorWhite,
    justifyContent: 'center',
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

    marginTop: '2.5%',
    height: 45,
    backgroundColor: variables.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageStyle: {width: 25, height: 25, borderRadius: 25 / 2},
  downloadLeftView: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
