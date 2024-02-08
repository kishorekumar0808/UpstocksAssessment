import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {RowTextProps} from './Type';

const RowText: React.FC<RowTextProps> = ({
  startingText,
  prefixText,
  endNumber,
  isStartingTextBold = true,
  customSpaceToLogo = true,
  isEndNumberBold = true,
}) => {
  return (
    <View style={styles.rowContainer}>
      <Text
        style={[isStartingTextBold ? styles.startingText : styles.quantity]}>
        {startingText}
      </Text>

      <View style={styles.prefixTextInnerContainer}>
        <Text style={styles.prefixText}>{prefixText}</Text>
        <Image
          source={require('../../Assets/Images/rupee.png')}
          style={[
            customSpaceToLogo ? styles.rupeeImage : styles.customLogoSpace,
          ]}
        />
        <Text
          style={[
            isEndNumberBold ? styles.endNumberBold : styles.endNumberNormal,
          ]}>
          {endNumber}
        </Text>
      </View>
    </View>
  );
};

export default RowText;
