import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  text: {
    fontSize: hp(2),
    color: Colors.black,
    marginHorizontal: wp(1),
    width: wp(60),
    left: wp(3),
    fontWeight: '500',
  },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15) / 2,
    backgroundColor: Colors.orange,
  },
});
