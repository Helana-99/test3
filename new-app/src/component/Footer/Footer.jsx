import React from 'react'

export default function Footer() {
  return <>
    <footer className=' text-white text-center py-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className='fw-bold'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>

          </div>
          <div className="col-md-4">
            <h2 className='fw-bold'> AROUND THE WEB</h2>
            <i className="fa-brands fa-facebook fw-bold p-2 fa-xl"></i>
            <i className="fa-brands fa-twitter fw-bold p-2 fa-xl"></i>
            <i className="fa-brands fa-linkedin fw-bold p-2 fa-xl"></i>
            <i className="fa-solid fa-globe fw-bold p-2 fa-xl"></i>
 
          </div> 
          
          <div className="col-md-4">
          <h2 className='fw-bold '> ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
          </div>
        </div>
      </div>

      <div className="end text-white py-2">
        <p>
        Copyright © Your Website 2021
        </p>
      </div>


     
    </footer>


  </>
}
