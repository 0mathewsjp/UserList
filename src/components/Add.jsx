import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>UserName</b></label>
                    <input type="text" className="form-control" placeholder='Enter Username' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Email Id</b></label>
                    <input type="text" className="form-control" placeholder='Enter Email' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Phone No</b></label>
                    <input type="text" className="form-control" placeholder='Enter Phone No' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Website</b></label>
                    <input type="text" className="form-control" placeholder='Enter Website' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success"><b>Submit</b></button>
                                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
