import {TextInputProps, View, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import styles from './styles';
import {Colors} from 'themes';

const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={styles.input}
        placeholderTextColor={Colors.dark_grey}
        numberOfLines={5}
        returnKeyType="next"
        {...props}
      />
    </View>
  );
});

export default Input;
