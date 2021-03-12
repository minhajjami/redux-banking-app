import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
            <section class="contact" id="contact">
                <div class="container">
                    <h5 class="text-center pb-5">CONTACT US</h5>
                    <form class="row g-3 p-3">
                        <div class="col-md-6">
                            <label for="fname" class="form-label">FIRST NAME</label>
                            <input type="text" class="form-control" id="fname" placeholder="FIRST NAME" />
                        </div>
                        <div class="col-md-6">
                            <label for="lname" class="form-label">LAST NAME</label>
                            <input type="text" class="form-control" id="lname" placeholder="LAST NAME" />
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">EMAIL</label>
                            <input type="text" class="form-control" id="email" placeholder="EMAIL ADDRESS" />
                        </div>
                        <div class="col-md-6">
                            <label for="phone" class="form-label">PHONE NUMBER</label>
                            <input type="text" class="form-control" id="phone" placeholder="PHONE NUMBER" />
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating">
                                <label for="phone" class="form-label">YOUR MESSAGE</label>
                                <textarea class="form-control pb-5" placeholder="WRITE YOUR COMMENT" id="floatingTextarea2"
                                    ></textarea>
                            </div>
                            <div class="col-12 d-flex justify-content-center pt-5">
                                <button type="submit" class="btn btn-dark">SUBMIT NOW</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </section>
          
    );
};

export default Contact;