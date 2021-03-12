import React from 'react';


const Navbar = () => {
    const logoStyle = {
        width: '150px',
        height: '47px',
    }

    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="#"><img style={logoStyle} src="" alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#contact">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        {/* {
                            loggedInUser.name ?
                                <button className="btn btn-dark my-2 my-sm-0">{loggedInUser.name}</button>
                                : <Link className="nav-link" to="/login"><button className="btn btn-dark my-2 my-sm-0">Login</button></Link>
                        } */}
                        <a href="#" assName="nav-link" to="/login"><button className="btn btn-dark my-2 my-sm-0">Login</button></a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;

