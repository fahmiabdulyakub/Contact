import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from 'components';
import {PropsType} from './types';

const Header = ({
  title,
  textButtonLeft,
  textButtonRight,
  iconButtonLeft,
  iconButtonRight,
  onPressButtonLeft,
  onPressButtonRight,
}: PropsType) => {
  return (
    <View style={styles.container}>
      <Button
        text={textButtonLeft}
        icon={iconButtonLeft}
        onPress={onPressButtonLeft}
      />
      <Text style={styles.title}>{title}</Text>
      <Button
        text={textButtonRight}
        icon={iconButtonRight}
        onPress={onPressButtonRight}
      />
    </View>
  );
};

export default Header;
