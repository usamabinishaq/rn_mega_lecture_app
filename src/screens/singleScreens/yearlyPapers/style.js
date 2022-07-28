import {StyleSheet} from 'react-native';
import variables from '../../../utils/utils';

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: variables.colorWhite},
  dashedView: {
    borderStyle: 'dashed',
    borderBottomWidth: 2,
    borderColor: variables.fontColorMain,
  },
});
export default styles;
