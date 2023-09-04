import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { getJobs, deleteJob } from "../helper/helper";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/JobList.module.css";
import toast, { Toaster } from "react-hot-toast";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function BasicTable() {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const [open, setOpen] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [jobId, setJobId] = useState("");
    const handleOpen = (id) => {
        console.log("asdjflajdf :", id);
        setOpen(true);
        setJobId(id);
    };
    const handleClose = () => setOpen(false);

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleDeleteJob = () => {
        let deleteJobPromise = deleteJob({ id: jobId });

        toast.promise(deleteJobPromise, {
            loading: "Checking...",
            success: <b>Deleted Successfully...!</b>,
            error: () => <b>Error in deletion</b>,
        });
        setOpen(false);
    };

    const handleEditJob = (id) => {
        navigate(`/job/${id}`);
    };
    const handleViewJob = (id) => {
        navigate(`/view-job/${id}`);
    };

    const handleAddJob = () => {
        navigate("/add-job");
    };
    useEffect(() => {
        if (!open) {
            getJobs().then(({ data }) => {
                setJobs(data);
            });
        }
    }, [open]);

    useEffect(() => {
        getJobs().then(({ data }) => {
            console.log("burce : ", data);
            setJobs(data);
        });
    }, []);

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleChangeSearch = () => { };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function userLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }
    function handleJobPosting() {
        navigate("/job");
    }

    function handleApplicants() {
        navigate("/applicant");
    }
    function handleProfile() {
        navigate("/profile");
    }

    const handleCloseAppBar = () => {
        setAnchorEl(null);
    };

    const onSubmitResume = () => {
        console.log("GWAPO KO");
    };

    return (
        <>
            <div className="flex justify-center text-center items-center m-10">
                
                <input
                    className={`${styles.textbox}`}
                    type="text"
                    // value={region}
                    placeholder="Search.........."
                    onChange={handleChangeSearch}
                />
                
            </div>
            {jobs.map((item) => (
                <div className="flex justify-center text-center items-center m-10">
                    <Card className={styles.glass} w={50}>
                        <Grid container spacing={2} className="m-2">
                            <Grid item xs={8}>
                                <h4 className="text-3xl font-bold mb-4 ml-20 text-left">
                                    {" "}
                                    {item.title}
                                </h4>
                            </Grid>
                            <Grid item xs={4}>
                                <button
                                    className={styles.btn}
                                    ty
                                    pe="submit"
                                    onClick={onSubmitResume}
                                >
                                    Apply now
                                </button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} className="m-2 t-2">
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">COMPANY :</span>{" "}
                                    {item.companyName}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">JOBTYPE :</span> {item.jobType}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">LOCATION :</span> {item.city}{" "}
                                    {item.state} {item.zip} {item.region} {item.country}
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="m-2">
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">ENTRY LEVEL :</span>{" "}
                                    {item.entryLevel}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">EXPERIENCE :</span>{" "}
                                    {item.experience}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">INDUSTRY :</span> {item.industry}
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="m-2">
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">CONTACT PERSON :</span>{" "}
                                    {item.contactName}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">EMAIL :</span> {item.contactEmail}
                                </p>
                            </Grid>
                            <Grid item xs={4}>
                                <p>
                                    <span className="font-bold">PHONE :</span> {item.contactPhone}
                                </p>
                            </Grid>
                        </Grid>

                        <h5>
                            <span className="font-bold">DESCRIPTION</span>{" "}
                        </h5>
                        <Container maxWidth="md" className="m-3">
                            <p>{item.description}</p>
                        </Container>
                        <h5>
                            <span className="font-bold">REQUIREMENTS</span>{" "}
                        </h5>
                        <Container maxWidth="md" className="m-3">
                            <p>{item.requirements}</p>
                        </Container>
                        
                    </Card>
                </div>
            ))}
        </>
    );
}
