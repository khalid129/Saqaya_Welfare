import { createStore, combineReducers, applyMiddleware } from "redux";
import { Masjids } from "./masjids";
import { Accounts } from "./accounts";
import { Transactions } from "./transactions";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      masjids: Masjids,
      accounts: Accounts,
      transactions: Transactions,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
