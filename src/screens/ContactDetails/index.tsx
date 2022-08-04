import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from 'components';
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
    </View>
  );
};

export default ContactDetails;
