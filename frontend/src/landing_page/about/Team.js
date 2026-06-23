import React from 'react';

function People(){
    return (
        <div className='cont' style={{marginTop:"100px", marginLeft:"250px", marginRight:"250px"}}>
            <div className="row text-muted">
              <div className="col p-2 m-3 text-center">
                 <img src="\media\images\Nikhil.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                 <h4 className='mt-4'>Nikhil Kamath</h4>
                 <h5>Co-founder & CFO</h5>
              </div>
              <div className="col p-2 m-3 text-center">
                 <img src="\media\images\Kailash.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                 <h4 className='mt-4'>Dr. Kailash Nadh</h4>
                 <h5>CTO</h5>
              </div>
              <div className="col p-2 m-3 text-center">
                 <img src="\media\images\Venu.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                 <h4 className='mt-4'>Venu Madhav</h4>
                 <h5>COO</h5>
              </div>
           </div>
           <div className="row mt-5 mb-5 text-muted">
              <div className="col p-3 m-3 text-center">
                <img src="\media\images\Seema.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                <h4 className='mt-4'>Seema Patil</h4>
                <h5>Director</h5>
              </div>
              <div className="col p-3 m-3 text-center">
                <img src="\media\images\karthik.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                <h4 className='mt-4'>Karthik Rangappa</h4>
                <h5>Chief of Education</h5>
              </div>
              <div className="col p-3 m-3 text-center">
                <img src="\media\images\Austin.jpg" style={{ borderRadius: "100%", width:"60%"}}/>
                <h4 className='mt-4'>Austin Prakesh</h4>
                <h5>Director Strategy</h5>
              </div>
           </div>
        </div>
    )
}
export default People;