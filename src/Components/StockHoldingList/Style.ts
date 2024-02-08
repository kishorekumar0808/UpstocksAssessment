import {StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Style/Color';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primaryWhite,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTopMargin: {marginTop: 12},
  symbol: {
    color: Colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
  },
  ltp: {
    color: Colors.primaryBlack,
    fontWeight: '400',
    fontSize: 16,
  },
  ltpInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ltpInnerText: {
    color: Colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  rupeeImage: {
    width: 18,
    height: 18,
    marginTop: 1.8,
    marginRight: -4,
  },
  quantity: {
    color: Colors.primaryBlack,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  horizontalLine: {
    marginVertical: 4,
    height: 1.2,
    backgroundColor: Colors.customGrey,
    marginLeft: 16,
  },
});
