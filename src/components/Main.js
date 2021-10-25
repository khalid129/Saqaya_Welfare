import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import "../css/index.css";
import Loading from "./Loading";
import Masjid from "./Masjid";
import Account from "./Account";
import Loan from "./Loan";
import AccountDetails from "./AccountDetails";
import AccountIncome from "./AccountIncome";
import MasjidExpense from "./MasjidExpense";
import MasjidDetail from "./MasjidDetail";
import LoanDetail from "./LoanDetail";
import {
  fetchMasjids,
  fetchAccounts,
  fetchTransactions,
  postMasjid,
  postExpense,
  postAccount,
  postIncome,
  deleteTrans
} from "../redux/ActionCreators";

//   function mapStateToProps(state) {
//     return {
//         allMasjids: state.masjids,
//         allAccounts: state.accounts,
//         allTransactions: state.transactions
//     };
//   }

//   function mapDispatchToProps(dispatch) {
//     return {
//         fetchMasjids: () => { dispatch(fetchMasjids())},
//     };
//   }

function Main() {
  const allMasjids = useSelector((state) => state.masjids);
  const allAccounts = useSelector((state) => state.accounts);
  const allTransactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [masjids, setMasjids] = useState(allMasjids);
  const [accounts, setAccounts] = useState(allAccounts);
  const [transactions, setTransactions] = useState(allTransactions);

  // console.log(masjids);

  useEffect(() => {
    dispatch(fetchMasjids());
    setMasjids(allMasjids);
    // console.log(allMasjids);
  }, []);

  useEffect(() => {
    dispatch(fetchAccounts());
    setAccounts(allAccounts);
  }, []);

  useEffect(() => {
    dispatch(fetchTransactions());
    setTransactions(allTransactions);
  }, []);

  const masjidPage = () => {
    return (
      <Masjid
        masjids={allMasjids.masjids}
        accounts={allAccounts.accounts}
        masjidLoading={allMasjids.isLoading}
        masjidErrMess={allMasjids.errMess}
        transactions={allTransactions.transactions}
        transactionLoading={allTransactions.isLoading}
        transactionErrMess={allTransactions.errMess}
        postMasjid={postMasjid}
        fetchMasjids={fetchMasjids}
        fetchTransactions={fetchTransactions}
        postExpense={postExpense}
      />
    );
  };

  const MasjidWithId = ({ match }) => {
    return (
      <MasjidDetail
        masjid={
          allMasjids.masjids.filter(
            (masjid) => masjid.id === parseInt(match.params.id, 10)
          )[0]
        }
        transactionLoading={allTransactions.isLoading}
        transactionErrMess={allTransactions.errMess}
        expenses={allTransactions.transactions.filter(
          (transaction) =>
            transaction.masjidId === parseInt(match.params.id, 10) &&
            transaction.transType === "expense"
        )}
        accounts={allAccounts.accounts}
        fetchTransactions={fetchTransactions}
        fetchAccounts={fetchAccounts}
        postExpense={postExpense}
        deleteTrans={deleteTrans}
      />
    );
  };

  const MasjidWithAccountId = ({ match }) => {
    return (
      <MasjidDetail
        masjid={
          allMasjids.masjids.filter(
            (masjid) => masjid.id === parseInt(match.params.id, 10)
          )[0]
        }
        transactionLoading={allTransactions.isLoading}
        transactionErrMess={allTransactions.errMess}
        expenses={allTransactions.transactions.filter(
          (transaction) =>
            transaction.masjidId === parseInt(match.params.id, 10) &&
            transaction.accountId === parseInt(match.params.accountId, 10) &&
            transaction.transType === "expense"
        )}
        accounts={allAccounts.accounts}
        fetchTransactions={fetchTransactions}
        fetchAccounts={fetchAccounts}
        postExpense={postExpense}
      />
    );
  };

  const accountPage = () => {
    return (
      <Account
        accounts={allAccounts.accounts}
        accountLoading={allAccounts.isLoading}
        accountErrMess={allAccounts.errMess}
        transactions={allTransactions.transactions}
        postAccount={postAccount}
        fetchAccounts={fetchAccounts}
        postIncome={postIncome}
      />
    );
  };
  const AccountWithId = ({ match }) => {
    return (
      <AccountDetails
        account={
          allAccounts.accounts.filter(
            (account) => account.id === parseInt(match.params.id, 10)
          )[0]
        }
        transactionLoading={allTransactions.isLoading}
        transactionErrMess={allTransactions.errMess}
        transaction={allTransactions.transactions.filter(
          (transaction) =>
            transaction.accountId === parseInt(match.params.id, 10)
        )}
      />
    );
  };

  const AccountIncomeWithId = ({ match }) => {
    return (
      <AccountIncome
        account={
          allAccounts.accounts.filter(
            (account) => account.id === parseInt(match.params.id, 10)
          )[0]
        }
        incomes={allTransactions.transactions.filter(
          (transaction) =>
            transaction.accountId === parseInt(match.params.id, 10) &&
            transaction.transType === "income"
        )}
        income={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.transType === "income"
          )
            acc += list.amount;
          return acc;
        }, 0)}
        expense={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.transType === "expense" && !list.loan
          )
            acc += list.amount;
          return acc;
        }, 0)}
        loan={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.loan
          )
            acc += list.amount;
          return acc;
        }, 0)}
      />
    );
  };
/////////////////
  const MasjidExpenseWithId = ({ match }) => {
    return (
      <MasjidExpense
        account={
          allAccounts.accounts.filter(
            (account) => account.id === parseInt(match.params.id, 10)
          )[0]
        }
        expenses={allTransactions.transactions.filter(
          (transaction) =>
            transaction.accountId === parseInt(match.params.id, 10) &&
            transaction.transType === "expense" && transaction.purpose === "مسجد"
        )}
        income={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.transType === "income"
          )
            acc += list.amount;
          return acc;
        }, 0)}
        expense={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.transType === "expense" && !list.loan
          )
            acc += list.amount;
          return acc;
        }, 0)}
        loan={allTransactions.transactions.reduce((acc, list) => {
          if (
            list.accountId === parseInt(match.params.id, 10) &&
            list.loan
          )
            acc += list.amount;
          return acc;
        }, 0)}
        masjids={allMasjids.masjids}
      />
    );
  };

  const loanPage = () => {
    return(
      <Loan 
        accounts={allAccounts.accounts}
        accountLoading={allAccounts.isLoading}
        accountErrMess={allAccounts.errMess}
        transaction={allTransactions.transactions.filter(
          (transaction) =>
            transaction.loan
        )}
      />
    )
  }
  const loanWithId = ({match}) => {
    return(
      <LoanDetail 
      expenses={allTransactions.transactions.filter(
        (transaction) =>
          transaction.accountId === parseInt(match.params.id, 10) &&
          transaction.transType === "expense" && transaction.loan
      )}
      />
    )
  }

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/masjid" component={masjidPage} />
        <Route exact path="/loan" component={loanPage} />
        <Route exact path="/account" component={accountPage} />
        <Route path="/accountDetails" component={AccountDetails} />
        <Route exact path="/masjid/:id" component={MasjidWithId} />
        <Route path="/masjid/:id/:accountId" component={MasjidWithAccountId} />
        <Route exact path="/account/:id" component={AccountWithId} />
        <Route
          exact
          path="/account/:id/accountIncome"
          component={AccountIncomeWithId}
        />
        <Route
          path="/account/:id/masjidExpense"
          component={MasjidExpenseWithId}
        />
        <Route exact path="/account/:id/LoanDetail" component={loanWithId} />

        <div className="App">
          {toggle ? (
            <>
              <Home transactions={allTransactions.transactions} />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </Switch>
    </div>
  );
}

export default Main;