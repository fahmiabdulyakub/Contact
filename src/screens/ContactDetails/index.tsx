import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, Input} from 'components';
import {Props} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';

const ContactDetails = ({route}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <Header
        textButtonLeft="Cancel"
        textButtonRight="Save"
        onPressButtonLeft={() => navigation.goBack()}
      />
      <View style={styles.image} />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Main Information</Text>
      </View>
      <View style={styles.containerFormBorder}>
        <Text style={styles.formName}>First Name</Text>
        <Input value={data.firstName} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.formName}>Last Name</Text>
        <Input value={data.lastName} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Sub Information</Text>
      </View>
      <View style={styles.containerFormBorder}>
        <Text style={styles.formName}>Email</Text>
        <Input value={data.email} />
      </View>
      <View style={styles.containerFormBorder}>
        <Text style={styles.formName}>Phone</Text>
        <Input value={data.phone} />
      </View>
    </View>
  );
};

export default ContactDetails;
