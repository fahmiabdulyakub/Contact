import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    height: hp(5),
    borderRadius: 8,
    paddingHorizontal: wp(3),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.light_grey,
    flex: 1,
  },
  input: {
    fontSize: hp(1.8),
    fontWeight: '400',
    color: Colors.black,
    top: 1,
  },
});
