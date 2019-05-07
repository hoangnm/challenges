import { summaryDonations } from './helpers';

export const initialData = {
  charities: [],
  donate: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      // eslint-disable-next-line
      const amount = summaryDonations(
        action.payload.map(item => item.amount || 0)
      );
      return Object.assign({}, state, {
        donate: state.donate + amount,
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
