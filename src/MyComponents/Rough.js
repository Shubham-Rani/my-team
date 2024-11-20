import React, { useState } from 'react';

export default function Footer() {
  const [isLightOn, setIsLightOn] = useState(false);
  const turnOnLight = () => setIsLightOn(true);
  const turnOffLight = () => setIsLightOn(false);

  return (
    <div>
      <button onClick={turnOnLight}>Turn on the light</button>
      <img id="myImage" src={isLightOn ? 'pic_bulbon.gif' : 'pic_bulboff.gif'} alt="Light Bulb" style={{ width: '100px' }} />
      <button onClick={turnOffLight}>Turn off the light</button>
    </div>
  );
}

<div className="my-5 text-center container-fluid">
    <div className="row d-flex align-items-center">
        <div className="col-1 d-flex align-items-center justify-content-center">
            <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                <div className="carousel-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
                </svg>
                </div>
            </a>
        </div>
        <div className="col-10">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">  
                            <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block ml-3 mt-4 pt-4 befor_blue">
                                <h1 className="onlineC">Accept <br> Paymen </h1>
                                <h6 className="para_pink mt-2">Integrating various features to securely</h6>
                                <button type="button" className="btn btn1 mt-3" style="color: #ec5b7a;">Learn more <i className="bi bi-arrow-right"></i> </button>
                            </div>
                            <div className="col-md-7 blue pt-5">
                                <h1 className="d-inline onlineC">Online <br> Checkout </h1>
                                <img src="Image/blue_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                                <br><br><br>  <br><br><br>
                                <p className="d-block para_blue">Allows customers to complete their purchase without creating an account. This reduces friction for first-time buyers or those who prefer not to register. </p>
                                <button type="button" className="btn btn1">Learn more <i className="bi bi-arrow-right"></i> </button>     
                            </div>
                            <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block mr-3 mt-4 pt-4 after_blue">
                                <img src="Image/yellow_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                                <h6 className="para_yellow mt-5">Options for customers to create accounts to manage orders, </h6>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block ml-3 mt-4 pt-4 befor_blue">
                                <h1 className="onlineC">Accept <br> Paymen </h1>
                                <h6 className="para_pink mt-2">Integrating various features to securely</h6>
                                <button type="button" className="btn btn1 mt-3" style="color: #ec5b7a;">Learn more <i className="bi bi-arrow-right"></i> </button>
                            </div>

                            <div className="col-md-7 blue pt-5" style="background-color: #fbc70a;">
                                <h1 className="d-inline onlineC">Store</h1>
                                <img src="Image/yellow_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                                <br><br><br>  <br>              
                                <p className="d-block para_blue">Options for customers to create <br> accounts to manage orders, track shipments, <br> and save preferences.</p>
                                <button type="button" className="btn btn1 mt-5" style="color: #fbc70a;">Learn more <i className="bi bi-arrow-right"></i> </button>
                            </div>
                            <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block mr-3 mt-4 pt-4 after_blue" style="background-color: #007dfb;">
                                <img src="Image/blue_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                                <h6 className="para_yellow mt-5">Allows customers to complete their without creating an account. </h6>
                            </div>
                        </div>
                    </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block ml-3 mt-4 pt-4 befor_blue" style="background-color: #007dfb">
                            <h1 className="onlineC">Online <br> Checkout</h1>
                            <h6 className="para_pink mt-2">Allows customers to complete their purchase without</h6>
                            <button type="button" className="btn btn1 mt-3" style="color:  #007dfb">Learn more <i className="bi bi-arrow-right"></i> </button>
                        </div>
                        <div className="col-md-7 blue pt-5" style="background-color: #ec5b7a;">
                            <h1 className="d-inline onlineC">Accept <br> payment</h1>
                            <img src="Image/pink_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                            <br><br><br>  <br><br><br>
                            <p className="d-block para_blue">Integrating various features and technologies  <br> to securely process transactions from customers.</p>
                            <button type="button" className="btn btn1" style="color: #ec5b7a;;">Learn more <i className="bi bi-arrow-right"></i> </button>       
                        </div>
                        <div className="col-md-2 d-sm-none d-md-block d-none d-sm-block mr-3 mt-4 pt-4 after_blue">
                            <img src="Image/yellow_icon.png" alt="icon" className="d-inline" style="height: 110px; float: right;">
                            <h6 className="para_yellow mt-5">Options for customers to create <br> accounts to manage orders, </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
            <a  href="#carouselExampleIndicators" data-slide="next">
                <div className="carousel-nav-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                    </svg>
                </div>
            </a>
       </div>
    </div>
</div>


