 import React from 'react'
 import Img from '../Images/Photo.jpg';
 
 function ImagesDemo() {
   return (
     <>
        <div className="container">
            <h5>Images Demo</h5>
            <img className='mx-5' src={Img} width='100' height='100' />

            {/* 2nd Way to dispaly images */}  

            <img className='mx-5' src={require('../Images/RRB.jpg')} alt="" width='100' height='100'  style={{ border: "2px solid black" }} />
            {/* 3rd Way */}
            <img src="Images/selfie.jpg" alt="" width='100' height='100' />
        </div>
     </>
   )
 }
 
 export default ImagesDemo