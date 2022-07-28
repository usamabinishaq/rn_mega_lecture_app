import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import variables, {width_screen} from '../../../utils/utils';

import Appbar from '../../../components/views/Appbar';
import Heading from '../../../components/text/Heading';
import Icon from '../../../utils/icons';
import React from 'react';
import {SubscriptionData} from '../../../data/subscription';
import styles from './style';

export default function SubscriptionScreen() {
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View
        style={[
          {
            borderWidth: 1,
            borderColor: item.color,
            margin: 5,
            width: '47%',
            height: 240,
            backgroundColor: variables.colorWhite,
            borderRadius: 10,
          },
          variables.shadowStyle(5),
        ]}>
        <View
          style={{
            height: 40,
            backgroundColor: item.color,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Heading
            size={13}
            color={variables.colorWhite}
            fontFamily={variables.poppinsFontSemiBold}>
            {item.title}
          </Heading>
        </View>
        <View>
          <Image style={styles.tinyLogo} source={item.subscriptionLogo} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="check-circle" type="fa" size={10} color={item.color} />
          <Heading
            size={10}
            fontFamily={variables.poppinsFontRegular}
            style={{marginLeft: 5}}
            color={variables.colorFontDark}>
            {item.month}
          </Heading>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="check-circle" type="fa" size={10} color={item.color} />
          <Heading
            size={10}
            fontFamily={variables.poppinsFontRegular}
            style={{marginLeft: 5}}
            color={variables.colorFontDark}>
            {item.padiChecking}
          </Heading>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="check-circle" type="fa" size={10} color={item.color} />
          <Heading
            size={10}
            fontFamily={variables.poppinsFontRegular}
            style={{marginLeft: 5}}
            color={variables.colorFontDark}>
            {'View All Features'}
          </Heading>
        </View>
        <TouchableOpacity
          style={{
            width: 80,
            height: 30,
            backgroundColor: item.color,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Heading
            size={12}
            color={variables.colorWhite}
            fontFamily={variables.poppinsFontSemiBold}>
            {'Choose'}
          </Heading>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <Appbar title={'Upgrade Subscription'} />
      <View style={{flex: 0.9, alignSelf: 'center'}}>
        <FlatList
          data={SubscriptionData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={'2'}
        />
      </View>
    </View>
  );
}
