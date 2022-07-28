import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBox from '../../../components/buttons/CheckBox';
import ThinButton from '../../../components/buttons/ThinButton';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import variables, {width_screen} from '../../../utils/utils';
import styles from './style';

function YearlyPapersScreen({navigation}) {
  const [checkbox, setCheckBox] = useState(false);
  const [paperType, setPaperType] = useState('');

  return (
    <View style={styles.main}>
      <Appbar title={'Yearly Papers'} />
      <View style={{flex: 0.9, backgroundColor: variables.colorWhite}}>
        <DropDownPicker
          zIndex={100}
          label={'Paper Year'}
          items={['Select Paper Year', '2017', '2018', '2019', '2020', '2021']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <DropDownPicker
          zIndex={90}
          label={'Paper Variant'}
          items={['Select Paper Variant']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <Heading
          size={variables.fontSizePMedium}
          color={variables.fontColorMain}
          fontFamily={variables.interFontSemiBold}
          style={{
            textAlign: 'center',
            paddingVertical: '7.5%',
          }}>
          {'Create Topical Worksheet'}
        </Heading>
        <DropDownPicker
          zIndex={70}
          label={'Topic'}
          items={['Select Topic']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <DropDownPicker
          zIndex={35}
          label={'Question Type'}
          items={['Select Question Type', 'MCQs', 'Structured Questions']}
          onSelection={e => {
            setPaperType(e);
          }}
        />
        <DropDownPicker
          zIndex={2}
          label={'Year Range'}
          items={['Select Year Range']}
          onSelection={e => {
            console.log(e);
          }}
        />
        <View style={{width: width_screen * 0.9, paddingHorizontal: '5%'}}>
          <CheckBox
            label={'Any Board or Examination'}
            labelColor={variables.colorFontDark}
            checked={checkbox}
            onCheckChange={e => {
              setCheckBox(e);
            }}
          />
        </View>
        <View style={{paddingTop: '7.5%'}} />
        <ThinButton
          onPress={() => {
            navigation.navigate(
              paperType === 'MCQs' ? 'McqsQuestion' : 'StructuredQuestion',
            );
          }}>
          {'GO'}
        </ThinButton>
      </View>
    </View>
  );
}

export default YearlyPapersScreen;
