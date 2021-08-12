import { useState,useEffect } from "react";
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Home';
import '../css/index.css';
import Loading from './Loading';
import Header from './Header';
import Masjid from './Masjid'
import Account from './Account';
import AccountDetails from './AccountDetails';
import AccountIncome from './AccountIncome';
import MasjidExpense from './MasjidExpense';
import MasjidDetail from './MasjidDetail';
import {MASAJID} from '../masjids';
import {ACCOUNT} from '../accounts';
import {TRANSACTION} from '../transactions'

function App() {
  const [toggle, setToggle] = useState(false)
  const [masjids,setMasjids] = useState(MASAJID)
  const [accounts,setAccounts] = useState(ACCOUNT)
  const [transactions,setTransactions] = useState(TRANSACTION)


  const MasjidWithId = ({match}) => {
    return(
      <MasjidDetail masjid={masjids.filter((masjid) => masjid.id === parseInt(match.params.id,10))[0]}/>
    );
  };
  const AccountWithId = ({match}) => {
    return(
      <AccountDetails 
      account={accounts.filter((account) => account.id === parseInt(match.params.id,10))[0]}
      transaction={transactions.filter((transaction)=> transaction.accountId === parseInt(match.params.id,10))}
      />
    );
  };


  useEffect(() => {
    const intervalID = setTimeout(() =>  {
        setToggle((toggle) => !toggle)
    }, 3000);

    return () => clearInterval(intervalID);
}, []);
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/masjid" component={Masjid} />
    <Route exact path="/account" component={Account} />
    <Route path="/accountDetails" component={AccountDetails} />
    <Route path="/MasjidExpense" component={MasjidExpense} />
    <Route path='/masjid/:id' component={MasjidWithId} />
    <Route exact path='/account/:id' component={AccountWithId} />
    <Route path='/account/:id/accountIncome' component={AccountIncome} />

    <div className="App">
      {toggle
        ?
        <>
        <Home />
        </>
        :
        <Loading />
      }
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;