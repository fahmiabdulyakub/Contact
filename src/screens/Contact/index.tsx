import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from 'components';
import {ICPlus, ICSearch} from 'assets';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Contact"
        iconButtonLeft={<ICSearch />}
        iconButtonRight={<ICPlus />}
      />
      <Text>Contact</Text>
    </View>
  );
};

export default Contact;
