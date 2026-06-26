import React from 'react';

function People(){
    return (
        <div className="container about-leadership">
            <div className="row text-muted">
              <div className="col-6 col-md-4 p-2 m-0 m-md-3 text-center">
                 <img src="\media\images\Nikhil.jpg" alt="Nikhil Kamath" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                 <h4 className='mt-4'>Nikhil Kamath</h4>
                 <h5>Co-founder & CFO</h5>
              </div>
              <div className="col-6 col-md-4 p-2 m-0 m-md-3 text-center">
                 <img src="\media\images\Kailash.jpg" alt="Dr. Kailash Nadh" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                 <h4 className='mt-4'>Dr. Kailash Nadh</h4>
                 <h5>CTO</h5>
              </div>
              <div className="col-6 col-md-4 p-2 m-0 m-md-3 text-center">
                 <img src="\media\images\Venu.jpg" alt="Venu Madhav" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                 <h4 className='mt-4'>Venu Madhav</h4>
                 <h5>COO</h5>
              </div>
           </div>
           <div className="row mt-3 mt-md-5 mb-5 text-muted">
              <div className="col-6 col-md-4 p-2 p-md-3 m-0 m-md-3 text-center">
                <img src="\media\images\Seema.jpg" alt="Seema Patil" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                <h4 className='mt-4'>Seema Patil</h4>
                <h5>Director</h5>
              </div>
              <div className="col-6 col-md-4 p-2 p-md-3 m-0 m-md-3 text-center">
                <img src="\media\images\karthik.jpg" alt="Karthik Rangappa" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                <h4 className='mt-4'>Karthik Rangappa</h4>
                <h5>Chief of Education</h5>
              </div>
              <div className="col-6 col-md-4 p-2 p-md-3 m-0 m-md-3 text-center">
                <img src="\media\images\Austin.jpg" alt="Austin Prakesh" className="img-fluid" style={{ borderRadius: "100%", maxWidth: "180px", width: "60%"}}/>
                <h4 className='mt-4'>Austin Prakesh</h4>
                <h5>Director Strategy</h5>
              </div>
           </div>
        </div>
    )
}
export default People;
