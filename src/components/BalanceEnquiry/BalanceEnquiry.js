import { Button } from 'bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

const BalanceEnquiry = ({ handleDeposit, setAmount, amount, handleWithDraw }) => {
    const store = useSelector((state) => state)

    return (
        <Jumbotron>
            <h1 className="mb-5">Current Balance:  {store} $</h1>
            <div className="row">
                <div className="col-md-12">
                    <div class="card">
                        <h5 class="card-header">Deposit / WithDrawal</h5>
                        <div class="card-body">
                            <h6 class="card-title text-secondary">Add some amount for yourself</h6>
                            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" />
                            <div className="mt-3">
                                <button onClick={handleDeposit} className="btn btn-success mr-2">Deposit</button>
                                <button onClick={handleWithDraw} className="btn btn-primary ">WithDraw</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Jumbotron>
    );
};

export default BalanceEnquiry;