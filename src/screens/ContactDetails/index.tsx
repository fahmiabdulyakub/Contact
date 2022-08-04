import {ScrollView, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {Header, Input} from 'components';
import {Props} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';
import {DataUserType} from 'types/DataUserType';
import {RootState} from 'store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from 'store/actions';

const ContactDetails = ({route}: Props) => {
  const {data} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const {user} = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const inputLastNameRef = useRef<TextInput>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPhoneRef = useRef<TextInput>(null);

  const [userDetail, setUserDetail] = useState<DataUserType>(data);

  const onPressSave = () => {
    let newUser = user;

    const index = user.findIndex((item: DataUserType) => {
      item.id === userDetail.id;
    });

    newUser[index] = userDetail;
    dispatch(updateUser(newUser));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        textButtonLeft="Cancel"
        textButtonRight="Save"
        onPressButtonLeft={() => navigation.goBack()}
        onPressButtonRight={onPressSave}
      />
      <ScrollView style={styles.containerBody}>
        <View style={styles.image} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Main Information</Text>
        </View>
        <View style={styles.containerFormBorder}>
          <Text style={styles.formName}>First Name</Text>
          <Input
            value={userDetail.firstName}
            onChangeText={(value: string) =>
              setUserDetail({...userDetail, firstName: value})
            }
            onSubmitEditing={() => inputLastNameRef.current?.focus()}
          />
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.formName}>Last Name</Text>
          <Input
            ref={inputLastNameRef}
            value={userDetail.lastName}
            onChangeText={(value: string) =>
              setUserDetail({...userDetail, lastName: value})
            }
            onSubmitEditing={() => inputEmailRef.current?.focus()}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Sub Information</Text>
        </View>
        <View style={styles.containerFormBorder}>
          <Text style={styles.formName}>Email</Text>
          <Input
            ref={inputEmailRef}
            value={userDetail?.email ?? ''}
            onChangeText={(value: string) =>
              setUserDetail({...userDetail, email: value})
            }
            onSubmitEditing={() => inputPhoneRef.current?.focus()}
          />
        </View>
        <View style={styles.containerFormBorder}>
          <Text style={styles.formName}>Phone</Text>
          <Input
            ref={inputPhoneRef}
            value={userDetail.phone ?? ''}
            onChangeText={(value: string) =>
              setUserDetail({...userDetail, phone: value})
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactDetails;
