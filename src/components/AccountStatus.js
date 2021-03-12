import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const AccountStatus = ({ handleDeleteAccount, handleChangeAccountStatus }) => {
    return (

        <div>
            <Jumbotron>
                <h1 className="mb-5">Account Information</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div class="card">
                            <h5 class="card-header">Update Account</h5>
                            <div class="card-body">                     
                                <div className="mt-3">
                                    <button onClick={handleDeleteAccount} className="btn btn-warning mr-2">Delete Account</button>
                                    <button onClick={handleChangeAccountStatus} className="btn btn-secondary">Change Account Status</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Jumbotron>
        </div>
    );
};

export default AccountStatus;