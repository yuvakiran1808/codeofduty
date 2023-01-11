import React,{ useRef } from "react";
import {Link} from "react-router-dom"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_68g4anq', 'template_tsqau7d', form.current, '2jLOq1RV3jy8gaOdF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          toast("Message Send",{
            type: "success",
            autoClose: 3000,
        });
      };
    return(
      <div className="container-fluid bg-dark main p-5" style={{height :"100vh"}}>
        <Link  to = "/" className="btn btn-warning">Back To Home</Link>
              <h1 className="text-center text-white py-2">Contact us</h1>
               <form ref={form}  onSubmit={sendEmail} className="col-md-8 mx-auto mt-4">
               <div className="mb-3">
                    <label className="text-white" htmlFor="name1">Enter your name : </label>
                   <input type="text" id="name1" className="form-control" name = "name" required/>
                </div>
               <div className="mb-3">
                    <label className="text-white" htmlFor="email1">Enter your email : </label>
                   <input id="email1" type="email"  className="form-control" name = "email" required/>
                </div>
               <div className="mb-3">
                    <label className="text-white" htmlFor="message1">Type your Issue : </label>
                   <textarea  id="message1" className="form-control" name = "message" required/>
                </div>
                <button type="submit"  className="btn btn-success">Submit</button>
               </form>
               <ToastContainer />
      </div>
    )
}



export default Contact;