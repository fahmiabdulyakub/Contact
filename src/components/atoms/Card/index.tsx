import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Card = ({item, onPress}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.image} />
      <Text style={styles.text}>{item.firstName + ' ' + item.lastName}</Text>
    </TouchableOpacity>
  );
};

export default Card;
