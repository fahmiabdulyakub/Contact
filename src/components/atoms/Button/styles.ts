import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    marginBottom: hp(2),
  },
  title: {
    fontSize: hp(1.8),
    color: Colors.orange,
  },
});
