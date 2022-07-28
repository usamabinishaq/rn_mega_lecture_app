import {Chemist, Chemist1, Profile} from '../../../constants/constants';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import variables, {height_screen, width_screen} from '../../../utils/utils';

import Appbar from '../../../components/views/Appbar';
import Heading from '../../../components/text/Heading';
import Icon from '../../../utils/icons';
import MENUICON from '../../../assets/icons/menu.svg';
import {Paper} from '../../../constants/constants';
import React from 'react';
import styles from './style';
import ThinButton from '../../../components/buttons/ThinButton';

function Courses({navigation}) {
  const Courses = [
    {
      id: 1,
      title: 'AS Chemistry',
      courseImage: Chemist,
      persons: '184',
      courseTime: '20 Hours 30 minute',
      profileImage: Profile,
      name: 'Fahad Hameed Ahmed',
    },
    {
      id: 2,
      title: 'A2 Chemistry',
      courseImage: Chemist1,
      persons: '174',
      courseTime: '24 Hours 30 minute',
      profileImage: Profile,
      name: 'Fahad Hameed Ahmed',
    },
    {
      id: 3,
      title: 'A2 Chemistry',
      courseImage: Chemist1,
      persons: '174',
      courseTime: '24 Hours 30 minute',
      profileImage: Profile,
      name: 'Fahad Hameed Ahmed',
    },
    {
      id: 4,
      title: 'AS Chemistry',
      courseImage: Chemist,
      persons: '184',
      courseTime: '20 Hours 30 minute',
      profileImage: Profile,
      name: 'Fahad Hameed Ahmed',
    },
  ];

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View
        style={[
          {
            borderWidth: 1,
            margin: 5,
            padding: 10,
            borderColor: '#C4C4C450',
            height: height_screen * 0.44,
            width: width_screen * 0.5 - 10,
            backgroundColor: variables.colorWhite,
            borderRadius: 5,
          },
        ]}>
        <View>
          <Image style={styles.tinyLogo} source={item.courseImage} />
          <View style={{marginTop: 10, marginLeft: 2}}>
            <Heading
              size={12}
              fontFamily={variables.interFontMediam}
              color={variables.colorFontDark}>
              {item.title}
            </Heading>
          </View>
          <View
            style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="person"
              type="octicon"
              size={17}
              color={variables.colorFontLight}
            />
            <Heading
              size={10}
              fontFamily={variables.interFontMediam}
              color={variables.colorFontDark}
              style={{paddingLeft: '2.5%'}}>
              {item.persons}
            </Heading>

            <Icon
              style={{marginLeft: 10}}
              name="clock-time-three-outline"
              type="materialCommunity"
              size={17}
              color={variables.dimGray}
            />
            <Heading
              size={10}
              fontFamily={variables.interFontMediam}
              color={variables.colorFontDark}
              style={{paddingLeft: '2.5%'}}>
              {item.courseTime}
            </Heading>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={styles.profileImage} source={item.profileImage} />
            <Heading
              size={10}
              fontFamily={variables.interFontMediam}
              color={variables.colorFontDark}
              style={{
                marginLeft: 5,
                marginTop: 5,
                width: '70%',
                textAlign: 'auto',
              }}>
              {`By ${item.name}`}
            </Heading>
          </View>
          <View>
            <Heading
              size={10}
              fontFamily={variables.interFontRegular}
              color={variables.colorFontDark}
              style={{
                marginTop: 5,
                width: '70%',
                textAlign: 'auto',
              }}>
              {'Course Ratings'}
            </Heading>
            <View style={{paddingVertical: '2.5%', flexDirection: 'row'}}>
              <Icon
                type={'ionicon'}
                name={'star'}
                color={variables.colorLink}
                size={10}
                style={{paddingLeft: '1.5%'}}
              />
              <Icon
                type={'ionicon'}
                name={'star'}
                color={variables.colorLink}
                size={10}
                style={{paddingLeft: '1.5%'}}
              />
              <Icon
                type={'ionicon'}
                name={'star'}
                color={variables.colorLink}
                size={10}
                style={{paddingLeft: '1.5%'}}
              />
              <Icon
                type={'ionicon'}
                name={'star'}
                color={variables.colorLink}
                size={10}
                style={{paddingLeft: '1.5%'}}
              />
              <Icon
                type={'ionicon'}
                name={'star'}
                color={variables.colorLink}
                size={10}
                style={{paddingLeft: '1.5%'}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: variables.colorFontLight,
            marginTop: 5,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Heading
            fontFamily={variables.interFontMediam}
            size={14}
            color={variables.colorFontDark}
            style={{paddingRight: '15%'}}>
            {'Rs 5000'}
          </Heading>
          <ThinButton borderRadius={10} style={{paddingVertical: '5%'}}>
            {'Add to Cart'}
          </ThinButton>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <Appbar
        leftIcon={MENUICON}
        onLeftIconPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 0.85, backgroundColor: variables.colorWhite}}>
        <FlatList
          data={Courses}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={'2'}
        />
      </View>
    </View>
  );
}

export default Courses;
