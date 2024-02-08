import {View, Text} from 'react-native';
import React from 'react';
import {HeaderProps} from './Type';
import {styles} from './Style';

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleColor}>{title}</Text>
    </View>
  );
};

export default Header;
