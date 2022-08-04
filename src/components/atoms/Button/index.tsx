import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = ({text, textColor, onPress, icon}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{...styles.title, color: textColor}}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
