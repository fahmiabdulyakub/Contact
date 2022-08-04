import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Card = ({item}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.text}>{item.firstName + ' ' + item.lastName}</Text>
    </TouchableOpacity>
  );
};

export default Card;
