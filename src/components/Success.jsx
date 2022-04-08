import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
  

    return (
        <>

            {/* <div className='container mt-3' style={{ height: "100vh" }}>
                <h4>Order placed succesfully ({cntxData.state})</h4>
            </div> */}

            <div className="container"  style={{ height: "80vh" }}>


                <div class="card border-success my-3" >
                    {/* <div class="card-header">Order placed succesfully</div> */}
                    <div class="card-body text-success">
                        <h5 class="card-title">Order placed succesfully</h5>
                        <p class="card-text">Thankyou for shopping with us</p>
                    </div>
                </div>
                <Link to="/" className="btn btn-lg btn-primary w-25">Go Home</Link>
            </div>

        </>

    )
}