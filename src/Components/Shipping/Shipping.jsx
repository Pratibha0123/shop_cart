import React from 'react'

function Shipping() {
  return (<>
  <h3>Shipping</h3>
  <div className="container">
    <h3 className="my-4">Shipping information</h3>
    <h4>Contact information</h4>
    <input type="number" placeholder='Enter Mobile Number'/>
    <h6>email me with news and offers</h6>
    <h6>Already have an account? <span>Login in</span></h6>
    </div>
     <div className="container my-4">
        <h2>Shipping Address</h2>
        <input type="text"  placeholder='counetry' />
        <div>
            <input type="text"  placeholder='First name'/>
            <input type="text" placeholder='last name' />

        </div>
        <input type="text" placeholder='Add apartment etc(optionl)'/>
        <div>
            <input type="text" placeholder='Add number' />
            <input type="text"  placeholder='poatel code'/>

        </div>
        <div>
            <input type="text" placeholder='City' />
            <input type="text"  placeholder='poatel code'/>
            
        </div>
     </div>
    
    
    </>
   
  )
}

export default Shipping
