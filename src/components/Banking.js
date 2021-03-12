import { Tab } from 'bootstrap';
import React, { useState } from 'react';
import { Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AccountStatus from './AccountStatus';
import BalanceEnquiry from './BalanceEnquiry/BalanceEnquiry';
import Facilities from './Facilities';

const Banking = () => {
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const handleDeposit = () => {
        dispatch({ type: 'DEPOSIT', amount: parseInt(amount) })
    }
    const handleWithDraw = () => {
        dispatch({ type: 'WITHDRAW', amount: parseInt(amount) })
    }
    const handleColInterest = () => {
        dispatch({ type: 'COLLECT_INTEREST' })
    }
    const handleDeleteAccount = () => {
        dispatch({ type: 'DELETE_ACCOUNT' })
    }
    const handleChangeAccountStatus = () => {

    }
    return (
        <div className="mt-5">
        <Tabs justify  defaultActiveKey="balance" id="uncontrolled-tab-example">
            <Tab eventKey="balance" title="Balance Enquiry">
               <BalanceEnquiry setAmount={setAmount} amount={amount}
               handleWithDraw={handleWithDraw} handleDeposit={handleDeposit}/>
            </Tab>
            <Tab eventKey="facilities" title="Bank Facilities">
                <Facilities handleColInterest={handleColInterest}></Facilities>
            </Tab>
            <Tab eventKey="account" title="Account Information">
               <AccountStatus handleDeleteAccount={handleDeleteAccount} handleChangeAccountStatus={handleChangeAccountStatus}></AccountStatus>
            </Tab> 
        </Tabs>
        {/* <div className="form-group">
            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control"/>
            <button onClick={handleDeposit}   className="btn btn-success">Desposit</button>
            <button onClick={handleWithDraw} className="btn btn-primary">WithDraw</button>
            <button onClick={handleColInterest} className="btn btn-danger">Collect Interest</button>
            <button onClick={handleDeleteAccount} className="btn btn-warning">Delete Account</button>
            <button onClick={handleChangeAccountStatus} className="btn btn-secondary">Change Account Status</button>
        </div> */}
    </div>
    );
};

export default Banking;