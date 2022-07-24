import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../../utils/utils';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: width_screen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {flex: 0.9, justifyContent: 'center', alignItems: 'center'},
  logoStyle: {
    width: width_screen * 0.6,
    height: height_screen * 0.5,
    resizeMode: 'contain',
  },
});
export default styles;
