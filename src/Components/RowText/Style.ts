import {StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Style/Color';

export const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTopMargin: {marginTop: 12},
  startingText: {
    color: Colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
  },
  prefixText: {
    color: Colors.primaryBlack,
    fontWeight: '400',
    fontSize: 16,
  },
  prefixTextInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  endNumberBold: {
    color: Colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  endNumberNormal: {
    color: Colors.primaryBlack,
    fontSize: 16,
    textAlign: 'center',
  },
  rupeeImage: {
    width: 18,
    height: 18,
    marginTop: 3,
  },
  quantity: {
    color: Colors.primaryBlack,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  customLogoSpace: {
    width: 18,
    height: 18,
    marginTop: 3,
    marginRight: -3,
  },
});
