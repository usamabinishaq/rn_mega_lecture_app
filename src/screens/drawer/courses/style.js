import variables, {height_screen, width_screen} from '../../../utils/utils';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: variables.colorWhite,
    width: width_screen,
  },
  cards: {
    height: variables.getSize(height_screen * 0.25),
    marginVertical: '5%',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: width_screen * 0.4,
    height: height_screen * 0.18,
    alignSelf: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    marginTop: 5,
    resizeMode: 'contain',
    left: -5,
  },
});
export default styles;
