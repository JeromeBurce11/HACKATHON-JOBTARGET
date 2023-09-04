import React, { useState } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../hooks/fetch.hook";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { addApplicant } from "../helper/helper";
import { useFormik } from 'formik';
import Select from "@mui/material/Select";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";




export default function Profile() {
  const navigate = useNavigate();

  const [status, setStatus] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');


  const formik = useFormik({
    initialValues : {
        firstname:'Jerome',
        lastname:'Burce',
      email: 'jeromeburce666@gmail.com',
      mobile: '09567060151',
      address : 'Arado, Palo, Leyte'
    }, 
   
  })

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeFirstname = (event) =>{
    setFirstname(event.target.value);
    console.log("burce: ", firstname);
  }
  const handleChangeLastname = (event) =>{
    setLastname(event.target.value);
  }
  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }
  const handleChangeMobile = (event) =>{
    setMobile(event.target.value);
  }
  const handleChangeAddress = (event) =>{
    setAddress(event.target.value);
  }
  function onUpload(e){
    console.log("filee  :",e.target.files[0]);
  }
  const onAddApplicant = () =>{
    const applicantData ={firstname, lastname,email,address,mobile,status };
    console.log("burce:  ", applicantData);
    let addApplicantPromise =  addApplicant(applicantData);
    toast.promise(addApplicantPromise, {
        loading: 'Checking...',
        success : <b>Add Successfully...!</b>,
        error :() => <b>Applicant not add</b>
      });
    navigate('/applicant');
 
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div
          className={`${styles.glass} ${extend.glass}`}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Applicant</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Add new Applicant.
            </span>
          </div>

          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                {...formik.getFieldProps('firstname')}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="FirstName"
                  required
                  onChange={handleChangeFirstname}
                />
                <input
                {...formik.getFieldProps('lastname')}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="LastName"
                  required
                  onChange={handleChangeLastname}
                />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                    {...formik.getFieldProps('mobile')}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Mobile No."
                  required
                  onChange={handleChangeMobile}

                />
                <input
                {...formik.getFieldProps('email')}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Email*"
                  required
                  onChange={handleChangeEmail}

                />
              </div>

              <input
              {...formik.getFieldProps('address')}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Address"
                required
                onChange={handleChangeAddress}

              />       
             
              <button className={styles.btn} type="submit" onClick={onAddApplicant}>
              <input onChange={onUpload} type="file" id='profile' name='profile' />
                
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
