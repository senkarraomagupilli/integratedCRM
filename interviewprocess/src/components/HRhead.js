import React, { useState } from 'react'
import Header from './Header'

function HRhead() {
    const [form, setForm] = useState([]);

    const handleChange = (e) => {
        const myForm = { ...form };
        myForm[e.target.name] = e.target.value;
        setForm(myForm)
    }

    return (
        <div className='container'>
            <Header />
            <div className='row  my-2'>
                <div className='col-md-5'>
                    <input type='search' className='form-control rounded-pill' placeholder='Search...' />
                </div>

                <div className='col-md-3 offset-4'>
                    <select className='form-select rounded-pill'>
                        <option value="">Position Applied</option>
                        <option value="Full">Full Stack</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Nodejs">Nodejs</option>
                        <option value="Azure">Azure</option>
                    </select>
                </div>
            </div>
            <div className='card my-2'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-1'>
                            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' className='rounded-circle w-100' />
                        </div>
                        <div className='col-md-3'>
                            <div>
                                <h6><b>Senkar rao</b></h6>
                                <h6>senkarrao@gmail.com</h6>
                                <h6>79834987</h6>
                            </div>
                        </div>
                        <div className='col-md-3 text-center'>
                            <div>
                                <h6><b>Position Applied </b></h6>
                                <h6>Reactjs</h6>
                            </div>
                        </div>
                        <div className='col-md-3 text-center'>
                            <div>
                                <h6><b>Resume</b></h6>
                                <a target='blank' href='https://shrifiles.b-cdn.net/samples-doc/sample-corporate-resume.pdf' >
                                    <img style={{ width: "50px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png' /><br />
                                    <span>corporate-resume.pdf</span>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-2 text-center'>
                            <div>
                                <h6><b>Action</b></h6>
                                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal4" className='btn btn-outline-warning btn-sm mt-3'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                User Details
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                            <div className='row'>
                                        <div className='col-md-1'>
                                            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' className='rounded-circle w-100' />
                                        </div>
                                        <div className='col-md-3'>
                                            <div>
                                                <h2><b>Senkar rao</b></h2>
                                               <small>Full Stack Developer</small>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <h5>Basic Information</h5>
                                <div className='col-md-3 mb-3'>
                                    <label>First Name</label><br/>
                                    <b>Thad</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Last Name</label><br/>
                                    <b>Tillman</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Email</label><br/>
                                    <b>thadtillman@gmail.com</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Phone Number</label><br/>
                                    <b>79989879767</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>DOB</label><br/>
                                    <b>12/04/2000</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Gender</label><br/>
                                    <b>Male</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Position Applied for</label><br/>
                                    <b>Full Stack Developer</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Years of experience</label><br/>
                                    <b>5 years</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Candidate Expectation</label><br/>
                                    <b>12 LPA </b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Notice period duration</label><br/>
                                    <b>30 Days</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Date of Application received</label><br/>
                                    <b>08/05/2024</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Name of the Recruiter</label><br/>
                                    <b>Jhon</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Shortlisted by recruiter</label><br/>
                                    <b>Yes</b>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Candidate acceptance for  Interview</label><br/>
                                    <b>Yes</b>
                                </div>
<div>
<h5 style={{borderBottom:"2px solid"}}>
    Interview Status
</h5>

</div>

                                <div className='col-md-3 mb-3'>
                                    <label>First</label><br/>
                                    <b>Jhon</b>
                                </div>
                               

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default HRhead