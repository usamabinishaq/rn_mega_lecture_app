import {Dimensions, StyleSheet} from 'react-native';

import variables from '../../../utils/utils';
import {width_screen} from '../../../utils/utils';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: variables.colorWhite},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    height: width_screen * 0.1,
    alignSelf: 'center',
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  video: {
    width: width / 1,
    height: width * 0.5625,
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  fullscreenVideoportrait: {
    flex: 1,
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
    height: width * 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '80%',
  },
  fullscreenVideolandscpae: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
});

export default styles;
