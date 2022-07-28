import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from '../../utils/icons';
import variables, {height_screen, width_screen} from '../../utils/utils';
import ThinButton from '../buttons/ThinButton';
import Heading from '../text/Heading';

function AlertModal({title, message, success = true, onPress, onClose}) {
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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              style={{
                color: success ? variables.colorPrimary : variables.colorError,
              }}
              type={'fa'}
              name={success ? 'check-circle' : 'times-circle'}
              size={50}
            />
            <Heading
              color={variables.fontDarkGray}
              size={variables.fontSizePSmall}
              fontFamily={variables.interFontRegular}
              style={{
                marginVertical: '2.5%',
                maxWidth: width_screen * 0.5,
                textAlign: 'center',
              }}>
              {message}
            </Heading>
            <ThinButton
              onPress={onPress}
              shadow={true}
              fontSize={variables.getSize(12)}
              style={{
                marginVertical: '2.5%',
                borderRadius: 10,
                width: width_screen * 0.25,
              }}>
              {'Okay'}
            </ThinButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AlertModal;
const styles = StyleSheet.create({
  mainContainer: {
    width: width_screen * 0.85,
    backgroundColor: variables.colorWhiteDim,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
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
    height: '20%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
  body: {
    height: '80%',
    width: '100%',
    paddingVertical: '10%',
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
