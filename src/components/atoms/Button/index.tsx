import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = ({text, onPress, icon}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
