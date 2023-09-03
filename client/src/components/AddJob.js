import React, { useState } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../hooks/fetch.hook";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { addApplicant, addJob } from "../helper/helper";

import Select from "@mui/material/Select";
import styles from "../styles/Job.module.css";
import extend from "../styles/Profile.module.css";

const options = [
  { value: "Inprogress", label: "In Progress" },
  { value: "Passed", label: "Passed" },
  { value: "Failed", label: "Failed" },
];

export default function Profile() {
  const navigate = useNavigate();

    const [requisitionName, setRequisitionName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [applyUrl, setApplyUrl] = useState('');
    const [experience, setExperience] = useState('');
    const [jobFunction, setJobFunction] = useState('');
    const [industry, setIndustry] = useState('');
    const [jobType, setJobType] = useState('');
    const [requirements, setRequirements] = useState('');
    const [duration, setDuration] = useState('');
    const [education, setEducation] = useState('');
    const [salaryLow, setSalaryLow] = useState('');
    const [salaryHigh, setSalaryHigh] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [entryLevel, setEntryLevel] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [postalCode, setPostalCode] = useState('');


  const handleChangeRequisitionName = (event) =>{
    setRequisitionName(event.target.value);
  }
  const handleChangeTitle = (event) =>{
    setTitle(event.target.value);
  }

  const handleChangeDescription = (event) =>{
    setDescription(event.target.value);
  }
  const handleChangeCompanyName = (event) =>{
    setCompanyName(event.target.value);
  }
  const handleChangeApplyUrl = (event) =>{
    setApplyUrl(event.target.value);
  }
  const handleChangeExperience = (event) =>{
    setExperience(event.target.value);
  }
  const handleChangeJobFunction = (event) =>{
    setJobFunction(event.target.value);
  }
  const handleChangeIndustry = (event) =>{
    setIndustry(event.target.value);
  }
  const handleChangeJobType = (event) =>{
    setJobType(event.target.value);
  }
  const handleChangeRequirements = (event) =>{
    setRequirements(event.target.value);
  }
  const handleChangeDuration = (event) =>{
    setDuration(event.target.value);
  }
  const handleChangeSalaryLow = (event) =>{
    setSalaryLow(event.target.value);
  }
  const handleChangeSalaryHigh = (event) =>{
    setSalaryHigh(event.target.value);
  }
  const handleChangeEducation = (event) =>{
    setEducation(event.target.value);
  }
  const handleChangeSalaryType = (event) =>{
    setSalaryType(event.target.value);
  }
  const handleChangeContactName = (event) =>{
    setContactName(event.target.value);
  }
  const handleChangeContactPhone = (event) =>{
    setContactPhone(event.target.value);
  }
  const handleChangeEntryLevel = (event) =>{
    setEntryLevel(event.target.value);
  }
  const handleChangeCity = (event) =>{
    setCity(event.target.value);
  }
  const handleChangeState = (event) =>{
    setState(event.target.value);
  }
  const handleChangeRegion = (event) =>{
    setRegion(event.target.value);
  }
  const handleChangeCountry = (event) =>{
    setCountry(event.target.value);
  }
  const handleChangeZip = (event) =>{
    setZip(event.target.value);
  }
  const handleChangePostalCode = (event) =>{
    setPostalCode(event.target.value);
  }
  const handleChangesContactEmail = (event) =>{
    setContactEmail(event.target.value);
  }
 
  
  const onAddJob = () =>{
    const jobData ={ 
        requisitionName,
        title,
        description,
        companyName,
        applyUrl,
        experience,
        jobFunction,
        industry,
        jobType,
        requirements,
        duration,
        education,
        salaryLow,
        salaryHigh,
        salaryType,
        contactName,
        contactEmail,
        contactPhone,
        entryLevel,
        city,
        state,
        region,
        country,
        zip,
        postalCode };
    console.log("burce:  ", jobData);
    let addJobPromise =  addJob(jobData);
    toast.promise(addJobPromise, {
        loading: 'Checking...',
        success : <b> Successfully...!</b>,
        error :() => <b>Job not added</b>
      });
    navigate('/job');
 
  }

  return (
    <div className="container mx-auto mt-200">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen mt-96">
        <div
          className={`${styles.glass}`}
          style={{ width: "75%"}}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold mt-3">Job</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Add new Job.
            </span>
          </div>

          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              

              <input
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Title"
                required
                onChange={handleChangeTitle}

              />              <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              placeholder="Description "
              onChange={handleChangeDescription}

            />
              <input
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="CompanyName"
                required
                onChange={handleChangeCompanyName}

              />              <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              placeholder="ApplyUrl "
              onChange={handleChangeApplyUrl}

            />
            <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Experience"
                  required
                  onChange={handleChangeExperience}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="JobFunction"
                  required
                  onChange={handleChangeJobFunction}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Industry"
                  required
                  onChange={handleChangeIndustry}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="JobType"
                  required
                  onChange={handleChangeJobType}
                />
              </div>
              <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              placeholder="Requirements "
              onChange={handleChangeRequirements}

            />
            <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Duration"
                  required
                  onChange={handleChangeDuration}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="SalaryLow"
                  required
                  onChange={handleChangeSalaryLow}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Duration"
                  required
                  onChange={handleChangeDuration}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="SalaryLow"
                  required
                  onChange={handleChangeSalaryLow}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Salary High"
                  required
                  onChange={handleChangeSalaryHigh}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Education"
                  required
                  onChange={handleChangeEducation}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  placeholder="SalaryType"
                  required
                  onChange={handleChangeSalaryType}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="ContactName"
                  required
                  onChange={handleChangeContactName}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  placeholder="Entry Level"
                  required
                  onChange={handleChangeEntryLevel}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Contact Phone"
                  required
                  onChange={handleChangeContactPhone}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  placeholder="City"
                  required
                  onChange={handleChangeCity}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="State"
                  required
                  onChange={handleChangeState}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  placeholder="Region"
                  required
                  onChange={handleChangeRegion}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Country"
                  required
                  onChange={handleChangeCountry}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  placeholder="Zip"
                  required
                  onChange={handleChangeZip}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Postal Code"
                  required
                  onChange={handleChangePostalCode}
                />
              </div>
              <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Contact Email"
                  required
                  onChange={handleChangesContactEmail}
                />
              
              
             
              <button className={styles.btn} type="submit" onClick={onAddJob}>
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
