import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StockHoldingListProps} from './Type';
import {styles} from './Style';
import RowText from '../RowText/RowText';

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
        <RowText startingText={symbol} prefixText={'LTP:'} endNumber={LTP} />

        <View style={styles.customTopMargin}>
          <RowText
            startingText={quantity}
            prefixText={'P/L:'}
            isStartingTextBold={false}
            endNumber={individualPNL.toFixed(2)}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default StockHoldingList;
