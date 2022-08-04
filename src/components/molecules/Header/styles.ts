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
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    color: Colors.black,
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
});
