import { useState,useEffect } from "react";
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import '../css/index.css';
import '../css/index.css';
import Home from './Home';
import Loading from './Loading';
import Header from './Header';
import Masjid from './Masjid'
import Account from './Account';
import AccountDetails from './AccountDetails';
import AccountIncome from './AccountIncome';
import MasjidExpense from './MasjidExpense';


const App = ()=>{
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const intervalID = setTimeout(() =>  {
        setToggle((toggle) => !toggle)
    }, 3000);

    return () => clearInterval(intervalID);
}, []);
  return(<>
   <BrowserRouter>
    <Switch>
    <Route path="/masjid" component={Masjid} />
    <Route path="/account" component={Account} />
    <Route path="/accountDetails" component={AccountDetails} />
    <Route path="/accountIncome" component={AccountIncome} />
    <Route path="/MasjidExpense" component={MasjidExpense} />
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
  </>);
}

export default App;