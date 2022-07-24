import {StyleSheet} from 'react-native';
import variables, {width_screen} from '../../utils/utils';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: variables.colorWhite,
    flex: 1,
    width: width_screen,
  },
  mainHeading: {paddingTop: '5%'},
  row: {
    flexDirection: 'row',
    width: width_screen * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
