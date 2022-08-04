import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: hp(8),
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.dark_grey,
    borderBottomWidth: 2,
  },
  title: {
    color: Colors.black,
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
});
