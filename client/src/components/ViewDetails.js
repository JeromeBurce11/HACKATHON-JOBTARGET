import React, { useState,useEffect } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../hooks/fetch.hook";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { getJobDetailsById } from "../helper/helper";

import Select from "@mui/material/Select";
import styles from "../styles/Job.module.css";
import extend from "../styles/Profile.module.css";

export default function Profile() {
  const id = useParams();

  const navigate = useNavigate();
  const [jobData, setJobData] = useState()
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

    useEffect(() => {
        console.log("APPLICANT ID :  ", id);
        getJobDetailsById(id).then(({ data }) => {
        setRequisitionName(data.requisitionName);
        console.log("dataaa :",data);
        setTitle(data.title);
        setDescription(data.description);
        setCompanyName(data.companyName);
        setApplyUrl(data.applyUrl);
        setExperience(data.experience);
        setJobFunction(data.jobFunction);
        setIndustry(data.industry);
        setJobType(data.jobType);
        setRequirements(data.requirements);
        setDuration(data.duration);
        setEducation(data.education);
        setSalaryLow(data.salaryLow);
        setSalaryHigh(data.salaryHigh);
        setSalaryType(data.salaryType);
        setContactName(data.contactName);
        setContactEmail(data.contactEmail);
        setContactPhone(data.contactPhone);
        setEntryLevel(data.entryLevel);
        setCity(data.city);
        setState(data.state);
        setRegion(data.region);
        setCountry(data.country);
        setZip(data.zip);
        setPostalCode(data.postalCode);
        setJobData(data);
        });
      }, []);

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
 
  
  const onBack = () =>{
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
            <h4 className="text-5xl font-bold mt-3">Job Details</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Add new Job.
            </span>
          </div>

          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              
              <input
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                value={`Title :  `+title}
                placeholder="Title"
                disabled
                required
                onChange={handleChangeTitle}

              />             <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              value={`Description :  `+description}
              disabled
              placeholder="Description "
              onChange={handleChangeDescription}

            />
             
              <input
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                value={`Company Name :  `+companyName}
                placeholder="CompanyName"
                disabled
                required
                onChange={handleChangeCompanyName}

              />       
                  <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              value={`ApplyUrl :  `+applyUrl}
              placeholder="ApplyUrl "
              disabled
              onChange={handleChangeApplyUrl}

            />
            <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Experience :  `+experience}
                  placeholder="Experience"
                  disabled
                  required
                  onChange={handleChangeExperience}
                />
              
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`JobFunction :  `+jobFunction}
                  placeholder="JobFunction"
                  disabled
                  required
                  onChange={handleChangeJobFunction}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
            
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Industry :  `+industry}
                  disabled
                  placeholder="Industry"
                  required
                  onChange={handleChangeIndustry}
                />
                
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`JobType :  `+jobType}
                  placeholder="JobType"
                  disabled
                  required
                  onChange={handleChangeJobType}
                />
              </div>
              
              <input
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              value={`Requirments :  `+requirements}
              disabled
              placeholder="Requirements "
              onChange={handleChangeRequirements}

            />
            <div className="name flex w-3/4 gap-10">
            
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  disabled
                  value={`Duration :  `+duration}
                  placeholder="Duration"
                  required
                  onChange={handleChangeDuration}
                />
                
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Salary Low :  `+salaryLow}
                  placeholder="SalaryLow"
                  disabled
                  required
                  onChange={handleChangeSalaryLow}
                />
              </div>
              
              <div className="name flex w-3/4 gap-10">
              
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Salary High :  `+salaryHigh}
                  disabled
                  placeholder="Salary High"
                  required
                  onChange={handleChangeSalaryHigh}
                />
             
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Education :  `+education}
                  disabled
                  placeholder="Education"
                  required
                  onChange={handleChangeEducation}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
              
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  value={`Salary Type :  `+salaryType}
                  disabled
                  placeholder="SalaryType"
                  required
                  onChange={handleChangeSalaryType}
                />
                
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Contact Name :  `+contactName}
                  placeholder="ContactName"
                  disabled
                  required
                  onChange={handleChangeContactName}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
            
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  value={`Entry Level :  `+entryLevel}
                  placeholder="Entry Level"
                  required
                  onChange={handleChangeEntryLevel}
                  disabled
                />
              
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Contact Phone :  `+contactPhone}
                  placeholder="Contact Phone"
                  required
                  disabled
                  onChange={handleChangeContactPhone}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
            
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  value={`City :  `+city}
                  placeholder="City"
                  required
                  disabled
                  onChange={handleChangeCity}
                />
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`State :  `+state}
                  placeholder="State"
                  disabled
                  required
                  onChange={handleChangeState}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
             
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  disabled
                  value={`Region :  `+region}
                  placeholder="Region"
                  required
                  onChange={handleChangeRegion}
                />
                
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  disabled
                  value={`Country :  `+country}
                  placeholder="Country"
                  required
                  onChange={handleChangeCountry}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
             
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text" 
                  value={`Zip :  `+zip}
                  disabled
                  placeholder="Zip"
                  required
                  onChange={handleChangeZip}
                />
               
                <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Postal Code :  `+postalCode}
                  placeholder="Postal Code"
                  disabled
                  required
                  onChange={handleChangePostalCode}
                />
              </div>
            
              <input
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  value={`Contact Email :  `+contactEmail}
                  placeholder="Contact Email"
                  required
                  disabled
                  onChange={handleChangesContactEmail}
                />
             
              <button className={styles.btn} type="submit" onClick={onBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
