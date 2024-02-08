import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Style/Color';

const {width, height} = Dimensions.get('window');
const arrowSize = 20;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryWhite,
  },
  loaderStyle: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  flatListContainer: {
    height: height * 0.4,
  },
  greyContainer: {
    backgroundColor: Colors.customGrey,
    height: 0.4 * height,
  },
  collapseGreyContainer: {
    backgroundColor: Colors.customGrey,
    height: 0.2 * height,
  },
  upArrow: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: height * 0.4 - arrowSize * 0.16,
    left: width / 2 - arrowSize / 2,
  },
  downArrow: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: height * 0.2 - arrowSize * 0.16,
    left: width / 2 - arrowSize / 2,
  },
  rupeeImage: {
    height: 19,
    width: 19,
    marginTop: 2,
    marginRight: -3,
  },

  customCollapseContainer: {
    paddingHorizontal: 16,
    display: 'flex',
    justifyContent: 'space-around',
    height: height * 0.15,
  },

  bottomProfitLossContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 16,
  },
  commonText: {fontWeight: 'bold', color: Colors.primaryBlack},
  commonCastContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonCostText: {
    fontWeight: '400',
    color: Colors.primaryBlack,
  },
});
