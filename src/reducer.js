import { summaryDonations } from './helpers';

export const initialData = {
  charities: [],
  selectedAmount: 10,
  donate: 0,
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      const amount = summaryDonations(
        action.payload.map(item => item.amount || 0)
      );
      return Object.assign({}, state, {
        donate: state.donate + amount,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        message: action.message,
      });
    case 'SET_CHARITIES':
      return Object.assign({}, state, {
        charities: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
