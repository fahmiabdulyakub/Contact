import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(30) / 2,
    backgroundColor: Colors.orange,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  containerTitle: {
    backgroundColor: Colors.background,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
  },
  title: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    color: Colors.black,
  },
  containerFormBorder: {
    paddingRight: wp(5),
    marginLeft: wp(5),
    paddingVertical: hp(0.8),
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerForm: {
    paddingRight: wp(5),
    marginLeft: wp(5),
    paddingVertical: hp(0.8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  formName: {
    fontSize: hp(1.8),
    fontWeight: '400',
    color: Colors.black,
    width: wp(28),
  },
});

export default styles;
