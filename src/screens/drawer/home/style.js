import {StyleSheet} from 'react-native';
import variables, {height_screen, width_screen} from '../../../utils/utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: variables.colorWhite,
    width: width_screen,
    alignItems: 'center',
  },
  cards: {
    height: variables.getSize(height_screen * 0.25),
    marginVertical: '5%',
    flexDirection: 'row',
  },
});
export default styles;
