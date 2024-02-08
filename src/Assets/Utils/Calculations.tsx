import {UserHoldingType} from '../../Screens/StockHoldingScreen/Type';

let currentTotal: number;
let InvestmentTotal: number;
let totalPNL: number;
let todayPNL: number;

function calculateIndividualValue(num1: number, num2: number): number {
  return num1 * num2;
}

// Current Value
export function getTotalCurrentValue(items: UserHoldingType[]): number {
  currentTotal = 0;
  for (const item of items) {
    if (item.ltp !== undefined && item.quantity !== undefined) {
      currentTotal += calculateIndividualValue(item.ltp, item.quantity);
    }
  }
  return currentTotal;
}

// Investment Value
export function getTotalIndividualValue(items: UserHoldingType[]): number {
  InvestmentTotal = 0;
  for (const item of items) {
    if (item.avgPrice !== undefined && item.quantity !== undefined) {
      InvestmentTotal += calculateIndividualValue(item.avgPrice, item.quantity);
    }
  }
  return InvestmentTotal;
}

//Total PNL
export function getTotalPNL(
  totalCurrentValue: number,
  totalInvestment: number,
) {
  totalPNL = totalCurrentValue - totalInvestment;
  return totalPNL;
}

//Todays PNL
export function getTodayPNL(items: UserHoldingType[]): number {
  todayPNL = 0;
  for (const item of items) {
    if (
      item.close !== undefined &&
      item.ltp !== undefined &&
      item.quantity !== undefined
    ) {
      let val = item.close - item.ltp;
      todayPNL += calculateIndividualValue(val, item.quantity);
    }
  }
  return todayPNL;
}
