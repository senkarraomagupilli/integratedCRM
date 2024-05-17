import React, { useState } from 'react'
import Header from './Header'

function HRteam() {
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
                
                    <div  className='col-md-3 offset-4'>
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
                                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal3" className='btn btn-outline-warning btn-sm'>Scdule Interview</button>
                                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" className='btn btn-outline-success btn-sm mt-2'>Update Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         



            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Send Mail
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className='row'>
                                    <div className='col-md-6 pb-3'>
                                        <label>Stage</label>
                                        <select name='stage' onChange={(e) => { handleChange(e) }} className='form-select'>

                                            <option value="Technical">Technical</option>
                                            <option value="HR">HR</option>
                                        </select>
                                    </div>
                                    {form.stage == "HR" ? (
                                        <>
                                            <div className='col-md-6 pb-3'>
                                                <label>HR Interviewer Date</label>
                                                <input className='form-control' type='date' placeholder='HR Interviewer Date' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>HR Interviewer Name</label>
                                                <input className='form-control' type='text' placeholder='HR Interviewer Name' />
                                            </div>
                                            
                                        </>
                                    ) : (
                                        <>
                                            <div className='col-md-6 pb-3'>
                                                <label>Technical Interviewer Date</label>
                                                <input className='form-control' type='date' placeholder='Technical Interviewer Date' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>Technical Interviewer Name</label>
                                                <input className='form-control' type='text' placeholder='Technical Interviewer Name' />
                                            </div>
                                           
                                        </>
                                    )}





                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send Mail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Update Details
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className='row'>
                                    <div className='col-md-6 pb-3'>
                                        <label>Stage</label>
                                        <select name='stage' onChange={(e) => { handleChange(e) }} className='form-select'>

                                            <option value="Technical">Technical</option>
                                            <option value="HR">HR</option>
                                        </select>
                                    </div>
                                    {form.stage == "HR" ? (
                                        <>
                                            <div className='col-md-6 pb-3'>
                                                <label>HR Interviewer Date</label>
                                                <input className='form-control' type='date' placeholder='HR Interviewer Date' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>HR Interviewer Name</label>
                                                <input className='form-control' type='text' placeholder='HR Interviewer Name' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>Status</label>
                                                <select className='form-select'>
                                                    <option value="">Select</option>
                                                    <option value="Shortlisted">Shortlisted</option>
                                                    <option value="rejected">rejected</option>
                                                </select>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='col-md-6 pb-3'>
                                                <label>Technical Interviewer Date</label>
                                                <input className='form-control' type='date' placeholder='Technical Interviewer Date' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>Technical Interviewer Name</label>
                                                <input className='form-control' type='text' placeholder='Technical Interviewer Name' />
                                            </div>
                                            <div className='col-md-6 pb-3'>
                                                <label>Status</label>
                                                <select className='form-select'>
                                                    <option value="">Select</option>
                                                    <option value="Shortlisted">Shortlisted</option>
                                                    <option value="rejected">rejected</option>
                                                </select>
                                            </div>
                                        </>
                                    )}





                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HRteam