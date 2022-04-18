import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer >
                         
                <div className="row mt-3 bg-black text-color2 footer-responsive">
                    
                <div className="col-6 "><h4>দৃশ্যায়ন - Drrissayon</h4></div>
                <div className="col-6">
                    <h5>Barisal office</h5>
                    <p>Address: Barisal BM College</p>
                    <p>Phone Number: +8801303-145381</p>
                    
                    
                    
                    </div>
                    <hr />
                    <p className='text-center'>Copyright © 2022. All right reserved https://drrissayon-2e22d.firebaseapp.com/</p>
                </div>
                
                         
            </footer>
        </div>
    );
};

export default Footer;