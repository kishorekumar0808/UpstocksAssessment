import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StockHoldingListProps} from './Type';
import {styles} from './Style';

const StockHoldingList: React.FC<StockHoldingListProps> = ({
  symbol,
  quantity,
  LTP,
  avgPrice,
}) => {
  const [individualPNL, setIndividualPNL] = useState(0);

  useEffect(() => {
    if (LTP !== undefined && quantity !== undefined && avgPrice !== undefined) {
      const currentVal = LTP * quantity;
      const investmentVal = avgPrice * quantity;

      const pnl = currentVal - investmentVal;
      setIndividualPNL(pnl);
    }
  }, [LTP, quantity, avgPrice]);

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.symbol}>{symbol}</Text>

          <View style={styles.ltpInnerContainer}>
            <Text style={styles.ltp}>LTP:</Text>
            <Image
              source={require('../../Assets/Images/rupee.png')}
              style={styles.rupeeImage}
            />
            <Text style={styles.ltpInnerText}> {LTP}</Text>
          </View>
        </View>

        <View style={[styles.rowContainer, styles.customTopMargin]}>
          <Text style={styles.quantity}>{quantity}</Text>

          <View style={styles.ltpInnerContainer}>
            <Text style={styles.ltp}>P/L:</Text>
            <Image
              source={require('../../Assets/Images/rupee.png')}
              style={styles.rupeeImage}
            />
            <Text style={styles.ltpInnerText}>{individualPNL.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default StockHoldingList;
