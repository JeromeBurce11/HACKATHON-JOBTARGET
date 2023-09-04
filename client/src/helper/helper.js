import axios from 'axios';
import jwt_decode from 'jwt-decode';

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
axios.defaults.baseURL = "http://localhost:8080"; 


/** Make API Requests */


/** To get username from Token */
export async function getUsername(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token)
    return decode;
}

/** authenticate function */
export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate', { username })
    } catch (error) {
        return { error : "Username doesn't exist...!"}
    }
}

/** get User details */
export async function getUser({ username }){
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

/** register user function */
export async function registerUser(credentials){
    try {
        const { data : { msg }, status } = await axios.post(`/api/register`, credentials);
        console.log("MESSAGE : ", msg);
        return Promise.resolve(msg)
    } catch (error) {
        console.log("MESSAGE error : ", error);

        return Promise.reject({ error_message : error.response.data.error})
    }
}

/** login function */
export async function verifyPassword({ username, password }){
    try {
        if(username){
            const { data } = await axios.post('/api/login', { username, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't Match...!"})
    }
}

/** update user profile function */
export async function updateUser(response){
    try {
        
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

/** generate OTP */
export async function generateOTP(username){
    try {
        const {data : { code }, status } = await axios.get('/api/generateOTP', { params : { username }});

        // send mail with the OTP
        if(status === 201){
            let { data : { email }} = await getUser({ username });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { username, userEmail: email, text, subject : "Password Recovery OTP"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP({ username, code }){
    try {
       const { data, status } = await axios.get('/api/verifyOTP', { params : { username, code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ username, password }){
    try {
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}


export async function getAllApplicant(){
    try {
        const { data, status } = await axios.get('/api/all-applicants' );

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function addApplicant(details){
    try {

        const { data, status } = await axios.post('/api/applicant', details );

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}
export async function resumeParser(jobId,file){
    try {
    //    const filename = file.name;
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("jobId",jobId)

        const { data, status } = await axios.post('/api/resume-parser',formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          } );
        //   console.log("data: ",data)

          

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}


export async function getApplicantDetailsById({ id }){
    try {
        const { data } = await axios.get(`/api/applicant/${id}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}


export async function updateApplicant(details){
    try {

        const { data, status } = await axios.put('/api/update/applicant', details );
        console.log("HELPPERRR Data getapplicant id :", data);

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}


export async function deleteApplicant({id}){
    try {
        console.log("ID : ",id);
        const { data, status } = await axios.delete(`/api/delete/applicant/${id}`);
        console.log("DATA DELETE :", data);

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function addJob(details){
    try {

        const { data, status } = await axios.post('/api/job', details );

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function getJobs(){
    try {
        const { data, status } = await axios.get('/api/jobs' );

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function getJobDetailsById({ id }){
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

export async function updateJob(details){
    try {

        const { data, status } = await axios.put('/api/update/job', details );
        console.log("HELPPERRR Data get job id :", data);

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function deleteJob({id}){
    try {
        console.log("ID : ",id);
        const { data, status } = await axios.delete(`/api/delete/applicant/${id}`);
        console.log("DATA DELETE :", data);

        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}
