import React from 'react';
import AccountStatus from './components/AccountStatus';
import Auth from './components/Auth';
import Balance from './components/Facilities';
import Banking from './components/Banking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';

const App = () => {
    return (
        <div>
            <div className="container">
            <Navbar/>
            {/* <Auth/> */}
            {/* <Balance/> */}
            <Banner/>
            <Banking/>
            {/* <AccountStatus/> */}
            <Contact/>
        </div>
            <Footer/>
            
        </div>
        
    );
};

export default App;