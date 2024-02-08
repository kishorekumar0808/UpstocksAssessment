import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Pressable,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StockHoldingList from '../../Components/StockHoldingList/StockHoldingList';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import {Colors} from '../../Assets/Style/Color';
import {styles} from './Style';
import {UserHoldingType} from './Type';
import {
  getTodayPNL,
  getTotalCurrentValue,
  getTotalIndividualValue,
  getTotalPNL,
} from '../../Assets/Utils/Calculations';
import RowText from '../../Components/RowText/RowText';

const StockHoldingScreen = () => {
  const [userHolding, setUserHolding] = useState<UserHoldingType[]>([]);
  const [collapseValues, setCollapseValues] = useState({
    totalCurrentValue: 0,
    totalInvestment: 0,
    todayProfitAndLoss: 0,
    totalProfitAndLoss: 0,
  });

  const [collapse, setCollapse] = useState(true);
  const [loading, setLoading] = useState(true);

  const getUpstoxData = async () => {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
      );
      if (response.data) {
        setUserHolding(response.data.userHolding);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const renderUpstoxList = ({item}: {item: UserHoldingType}) => {
    return (
      <StockHoldingList
        symbol={item?.symbol}
        quantity={item?.quantity}
        LTP={item?.ltp}
        avgPrice={item?.avgPrice}
      />
    );
  };

  useEffect(() => {
    getUpstoxData();

    setCollapseValues({
      ...collapseValues,
      totalCurrentValue: getTotalCurrentValue(userHolding),
      totalInvestment: getTotalIndividualValue(userHolding),
      todayProfitAndLoss: getTodayPNL(userHolding),
      totalProfitAndLoss: getTotalPNL(
        getTotalCurrentValue(userHolding),
        getTotalIndividualValue(userHolding),
      ),
    });
  }, [userHolding]);

  return (
    <View style={styles.mainContainer}>
      <Header title={'Upstox Holding'} />

      {loading ? (
        <ActivityIndicator
          style={styles.loaderStyle}
          color={Colors.HeaderColor}
          size={'large'}
        />
      ) : (
        <>
          <View style={styles.flatListContainer}>
            <FlatList
              data={userHolding}
              scrollEnabled
              keyExtractor={(item, index) => item.symbol || index.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={renderUpstoxList}
            />
          </View>

          <View
            style={[
              collapse ? styles.greyContainer : styles.collapseGreyContainer,
            ]}>
            <Pressable onPress={() => setCollapse(!collapse)}>
              <Image
                source={
                  collapse
                    ? require('../../Assets/Images/upArrow.png')
                    : require('../../Assets/Images/downArrow.png')
                }
                style={[collapse ? styles.upArrow : styles.downArrow]}
                tintColor={Colors.ArrowColor}
              />
            </Pressable>
          </View>

          {/* collapse container Start */}
          {!collapse && (
            <>
              <View style={styles.customCollapseContainer}>
                <RowText
                  startingText={'Current Value:'}
                  endNumber={collapseValues.totalCurrentValue.toFixed(2)}
                  customSpaceToLogo={false}
                  isEndNumberBold={false}
                />

                <RowText
                  startingText={'Total Investment:'}
                  endNumber={collapseValues.totalInvestment.toFixed(2)}
                  customSpaceToLogo={false}
                  isEndNumberBold={false}
                />

                <RowText
                  startingText={`Today's Profit & Loss:`}
                  endNumber={collapseValues.todayProfitAndLoss.toFixed(2)}
                  customSpaceToLogo={false}
                  isEndNumberBold={false}
                />
              </View>
            </>
          )}
          {/* collapse container End */}

          <View style={styles.bottomProfitLossContainer}>
            <Text style={styles.commonText}>Profit & Loss:</Text>
            <View style={styles.commonCastContainer}>
              <Image
                source={require('../../Assets/Images/rupee.png')}
                style={styles.rupeeImage}
              />
              <Text style={styles.commonCostText}>
                {collapseValues.totalProfitAndLoss.toFixed(2)}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default StockHoldingScreen;
