import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Facilities = ({ handleColInterest }) => {
    const store = useSelector((state) => state)
    return (
        <Jumbotron>
            <h1 className="mb-5">Banking Facilities</h1>
            <div className="row">
                <div className="col-md-12">
                    <div class="card">
                        <h5 class="card-header">Take Interest</h5>
                        <div class="card-body">
                            <h6 class="card-title text-secondary">Take interest and pay later. The interest amount will be deducted gradually.</h6>
                            <div className="mt-3">
                                <button onClick={handleColInterest} className="btn btn-danger">Collect Interest</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Jumbotron>
    );
};

export default Facilities;