import React, { useState } from 'react'
import Header from './Header'

const TA = () =>{

  const [show, setShow]=useState(false)
  return (

    <div className='container'>
      <Header />
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-12'>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ float: "right" }} className='btn btn-outline-primary'>
              <i class="bi bi-plus-circle"></i>  New User
              </button>
            </div>
          </div>
          <div class="table-responsive mt-3">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sno</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Position Applied for</th>
                  <th scope="col">Years of experience</th>
                  <th scope="col">Candidate Expectation</th>
                  <th scope="col">Notice period duration</th>
                  <th scope="col">Date of Application received</th>
                  <th scope="col">Name of the Recruiter</th>
                  <th scope="col">Shortlisted by recruiter(Yes/No)</th>
                  <th scope="col">Candidate acceptance for  Interview(Yes/No)</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>
                    <button style={{width:"60px"}} type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setShow(true)}} className='btn btn-outline-success btn-sm'>
                    <i class="bi bi-pencil-square"></i>  Edit
                    </button>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>



      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {show?"Edit User":"Add User"}
                </h1>
              <button onClick={()=>{setShow(false)}} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div className='row'>
                  <div className='col-md-4 pb-3'>
                    <label>First Name</label>
                    <input className='form-control' type='text' placeholder='First Name' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Last Name</label>
                    <input className='form-control' type='text' placeholder='Last Name' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Email</label>
                    <input className='form-control' type='email' placeholder='Email' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Phone Number</label>
                    <input className='form-control' type='number' placeholder='Phone Number' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>DOB</label>
                    <input className='form-control' type='date' placeholder='DOB' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Gender</label>
                    <select className='form-select'>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Resume</label>
                    <input className='form-control' type='file'/>
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Position Applied for</label>
                    <input className='form-control' type='text' placeholder='Position Applied for' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Years of experience</label>
                    <input className='form-control' type='number' placeholder='Years of experience' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Candidate Expectation</label>
                    <input className='form-control' type='text' placeholder='Candidate Expectation' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Notice period duration</label>
                    <input className='form-control' type='number' placeholder='Notice period duration' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Date of Application received</label>
                    <input className='form-control' type='date' placeholder='Date of Application received' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Name of the Recruiter</label>
                    <input className='form-control' type='text' placeholder='Name of the Recruiter' />
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Shortlisted by recruiter(Yes/No)</label>
                    <select className='form-select'>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className='col-md-4 pb-3'>
                    <label>Candidate acceptance for  Interview(Yes/No)</label>
                    <select className='form-select'>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button onClick={()=>{setShow(false)}} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={()=>{setShow(false)}} type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TA