// import React, { useState } from 'react';
// import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
// import "../css/Account.css";
// import "../css/masjid.css";
// import { useLocation } from 'react-router-dom'
// import { Link } from "react-router-dom";
// import { fetchTransactions, postIncome } from '../redux/ActionCreators';
// import { useDispatch  } from 'react-redux'
// import EditIcon from '@material-ui/icons/Edit';


// const initialState = {
//   date:"",
//   place:"",
//   detail:"",
//   amount:null
// }


// const Accountinfo = (props) => {
// const dispatch = useDispatch() 
// const [modal,setModal]=useState(false);
// const [form,setForm]=useState(initialState);



// const toggleModal=() => {
//   setModal(!modal)
// }


// const handleChange = ({ target: { name, value } }) => {
//   setForm((prev) => ({
//     ...prev,
//     [name]: value
//   }));
// };

// const handleSubmit=(event)=>{
//   event.preventDefault();
//   dispatch(postIncome(parseInt(props.data.id),null,"income",form.date,"", "", "", form.detail, "",parseInt(form.amount)))
//   dispatch(fetchTransactions())
//   setForm(initialState)
//   toggleModal();
// }
// // console.log(props.data);

//     return (

//       <>
//         <div className="account">
//           <div className="account_name">
//             <h1>{props.data?.name}</h1>
//           </div>
//           <div className="account_ledger">
//           {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
//           <Link to={`/account/${props.data?.id}/LoanDetail`} style={{textDecoration:"none"}}>
//           <div className="button accoutDetail" style={{ color: "black"}}>قرض کی تفصیل</div>
//           </Link>
//           </div>}
//           {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
//           <Link to={`/account/${props.data?.id}/accountIncome`} style={{textDecoration:"none"}}>
//           <div className="button accoutDetail" style={{ color: "black"}}>آمدن کی تفصیل</div>
//           </Link>
//           </div>}
//           {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
//           <div className="button" onClick={toggleModal}>آمدن اندراج کریں</div>
//           </div>}
//           {useLocation().pathname===`/account/${props.data?.id}/accountIncome` && <div className="form">
//           <div className="button" onClick={toggleModal}>آمدن اندراج کریں</div>
//           </div>}
//           {useLocation().pathname===`/account` && <div className="edit">
//           <Link to={'/account'}>
//           <EditIcon className='editIcon' onClick={props.edit} style={{color:"#4CAF50", cursor:"pointer"}}/>
//           </Link>
//           </div>}
//             <div className="balance">
//               <span id="balance">{props.income-props.expense-props.loan}</span>
//               <label htmlFor="balance">: بقیہ</label>
//             </div>
//             <div className="expense">
//               <span id="loan">{props.loan}</span>
//               <label htmlFor="loan">: قرضہ</label>
//             </div>
//             <div className="expense">
//               <span id="expense">{props.expense}</span>
//               <label htmlFor="expense">: خرچہ</label>
//             </div>
//             <div className="income">
//               <span id="income">{props.income}</span>
//               <label htmlFor="income">: آمدن</label>
//             </div> 
//           </div>
//         </div>
//         <Modal isOpen={modal} toggle={toggleModal}>
//         <ModalHeader>آمدن</ModalHeader>
//         <ModalBody>
//         <Form style={{textAlign:'right'}} onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label style={{fontSize:"4vh"}} htmlFor="date">تاریخ</Label>
//             <Input type="date" id="date" name="date" onChange={handleChange} value={form.date}/>
//           </FormGroup>
//           <FormGroup>
//             <Label style={{fontSize:"4vh"}} htmlFor="purpose">مد</Label>
//             <Input style={{textAlign:'right'}} type="text" id="purpose" name="purpose" onChange={handleChange} value={form.purpose} />
//           </FormGroup>
//           <FormGroup>
//             <Label style={{fontSize:"4vh"}} htmlFor="detail">تفصیل</Label>
//             <Input style={{textAlign:'right'}} type="text" id="detail" name="detail" onChange={handleChange} value={form.detail}/>
//           </FormGroup>
//           <FormGroup>
//             <Label style={{fontSize:"4vh"}} htmlFor="amount">رقم</Label>
//             <Input type="number" id="amount" name="amount"  onChange={handleChange} value={form.amount} />
//           </FormGroup>
//           <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}>اندراج کریں</Button>
//         </Form>
//         </ModalBody>
//       </Modal>
//         </>
//     )
// }

// export default Accountinfo

import React, { useState } from 'react';
import "../css/Account.css";
import "../css/masjid.css";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';


const Accountinfo = (props) => {


    return (

      <>
        <div className="account">
          <div className="account_name">
            <h1>{props.data?.name}</h1>
          </div>
          <div className="account_ledger">
          {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
          <Link to={`/account/${props.data?.id}/LoanDetail`} style={{textDecoration:"none"}}>
          <div className="button accoutDetail" style={{ color: "black"}}>قرض کی تفصیل</div>
          </Link>
          </div>}
          {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
          <Link to={`/account/${props.data?.id}/accountIncome`} style={{textDecoration:"none"}}>
          <div className="button accoutDetail" style={{ color: "black"}}>آمدن کی تفصیل</div>
          </Link>
          </div>}
          {useLocation().pathname===`/account` && <div className="edit">
          <Link to={'/account'}>
          <EditIcon className='editIcon' onClick={props.edit} style={{color:"#4CAF50", cursor:"pointer"}}/>
          </Link>
          </div>}
            <div className="balance">
              <span id="balance">{props.income-props.expense-props.loan}</span>
              <label htmlFor="balance">: بقیہ</label>
            </div>
            <div className="expense">
              <span id="loan">{props.loan}</span>
              <label htmlFor="loan">: قرضہ</label>
            </div>
            <div className="expense">
              <span id="expense">{props.expense}</span>
              <label htmlFor="expense">: خرچہ</label>
            </div>
            <div className="income">
              <span id="income">{props.income}</span>
              <label htmlFor="income">: آمدن</label>
            </div> 
          </div>
        </div>
      
        </>
    )
}

export default Accountinfo