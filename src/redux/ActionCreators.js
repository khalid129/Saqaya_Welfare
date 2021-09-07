import * as ActionTypes from "./ActionTypes";
import { MASAJID } from "../masjids";
import { ACCOUNT } from "../accounts";
import { TRANSACTION } from "../transactions";

export const fetchMasjids = () => (dispatch) => {
  dispatch(masjidsLoading(true));

  // return fetch(MASAJID)
  // .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //   })
  // .then(response => response.json())
  // .then(masjids => dispatch(addMasjids(masjids)))
  // .catch(error => dispatch(masjidsFailed(error.message)));
  dispatch(addMasjids(MASAJID));
};

export const postMasjid = (id, name, province, area, manager) => (dispatch) => {
  const newMasjid = {
    id,
    name,
    province,
    area,
    manager,
  };

  //   return fetch(baseUrl + "comments", {
  //     method: "POST",
  //     body: JSON.stringify(newComment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //     .then(
  //       (response) => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error(
  //             "Error " + response.status + ": " + response.statusText
  //           );
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       (error) => {
  //         throw error;
  //       }
  //     )
  //     .then((response) => response.json())
  //     .then((response) => dispatch(addComment(response)))
  //     .catch((error) => {
  //       console.log("post comments", error.message);
  //       alert("Your comment could not be posted\nError: " + error.message);
  //     });

  // dispatch(addMasjids(newMasjid));
  MASAJID.push(newMasjid)
  console.log(newMasjid);
};

export const masjidsLoading = () => ({
  type: ActionTypes.MASJIDS_LOADING,
});

export const masjidsFailed = (errmess) => ({
  type: ActionTypes.MASJIDS_FAILED,
  payload: errmess,
});

export const addMasjids = (masjids) => ({
  type: ActionTypes.ADD_MASJIDS,
  payload: masjids,
});

export const fetchAccounts = () => (dispatch) => {
  dispatch(accountsLoading(true));

  // return fetch(MASAJID)
  // .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //   })
  // .then(response => response.json())
  // .then(masjids => dispatch(addMasjids(masjids)))
  // .catch(error => dispatch(masjidsFailed(error.message)));
  dispatch(addAccounts(ACCOUNT));
};

export const postAccount = (id, name) => (dispatch) => {
  const newAccount = {
    id,
    name
  };

  //   return fetch(baseUrl + "comments", {
  //     method: "POST",
  //     body: JSON.stringify(newComment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //     .then(
  //       (response) => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error(
  //             "Error " + response.status + ": " + response.statusText
  //           );
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       (error) => {
  //         throw error;
  //       }
  //     )
  //     .then((response) => response.json())
  //     .then((response) => dispatch(addComment(response)))
  //     .catch((error) => {
  //       console.log("post comments", error.message);
  //       alert("Your comment could not be posted\nError: " + error.message);
  //     });

  // dispatch(addMasjids(newMasjid));
  ACCOUNT.push(newAccount)
  console.log(newAccount);
};

export const accountsLoading = () => ({
  type: ActionTypes.ACCOUNTS_LOADING,
});

export const accountsFailed = (errmess) => ({
  type: ActionTypes.ACCOUNTS_FAILED,
  payload: errmess,
});

export const addAccounts = (accounts) => ({
  type: ActionTypes.ADD_ACCOUNTS,
  payload: accounts,
});

export const fetchTransactions = () => (dispatch) => {
  dispatch(transactionsLoading(true));

  // return fetch(MASAJID)
  // .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //   })
  // .then(response => response.json())
  // .then(masjids => dispatch(addMasjids(masjids)))
  // .catch(error => dispatch(masjidsFailed(error.message)));
  dispatch(addTransactions(TRANSACTION));
};

export const postExpense = (accountId,masjidId,transType,date,voucher, bank, reciever, detail, voucherNo,amount) => (dispatch) => {
  const newTransaction = {
    
    accountId,
    masjidId,
    transType,
    date,
    voucher,
    bank, 
    reciever, 
    detail, 
    voucherNo,
    amount
  };

  //   return fetch(baseUrl + "comments", {
  //     method: "POST",
  //     body: JSON.stringify(newComment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //     .then(
  //       (response) => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error(
  //             "Error " + response.status + ": " + response.statusText
  //           );
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       (error) => {
  //         throw error;
  //       }
  //     )
  //     .then((response) => response.json())
  //     .then((response) => dispatch(addComment(response)))
  //     .catch((error) => {
  //       console.log("post comments", error.message);
  //       alert("Your comment could not be posted\nError: " + error.message);
  //     });

  // dispatch(addMasjids(newMasjid));
  TRANSACTION.push(newTransaction)
  console.log(newTransaction);
};

export const postIncome = (accountId,masjidId,transType,date,voucher, bank, reciever, detail, voucherNo,amount) => (dispatch) => {
  const newTransaction = {
    
    accountId,
    masjidId,
    transType,
    date,
    voucher,
    bank, 
    reciever, 
    detail, 
    voucherNo,
    amount
  };

  //   return fetch(baseUrl + "comments", {
  //     method: "POST",
  //     body: JSON.stringify(newComment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //     .then(
  //       (response) => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error(
  //             "Error " + response.status + ": " + response.statusText
  //           );
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       (error) => {
  //         throw error;
  //       }
  //     )
  //     .then((response) => response.json())
  //     .then((response) => dispatch(addComment(response)))
  //     .catch((error) => {
  //       console.log("post comments", error.message);
  //       alert("Your comment could not be posted\nError: " + error.message);
  //     });

  // dispatch(addMasjids(newMasjid));
  TRANSACTION.push(newTransaction)
  console.log(newTransaction);
};


export const transactionsLoading = () => ({
  type: ActionTypes.TRANSACTIONS_LOADING,
});

export const transactionsFailed = (errmess) => ({
  type: ActionTypes.TRANSACTIONS_FAILED,
  payload: errmess,
});

export const addTransactions = (transactions) => ({
  type: ActionTypes.ADD_TRANSACTIONS,
  payload: transactions,
});
