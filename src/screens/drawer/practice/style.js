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
    marginVertical: '2.5%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  innerCards: {
    height: '100%',
    marginLeft: '2.5%',
    justifyContent: 'space-between',
  },
  headingStyle: {paddingTop: '5%', paddingHorizontal: '5%', textAlign: 'left'},
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width_screen,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  slider: {alignItems: 'center'},
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
});
export default styles;
