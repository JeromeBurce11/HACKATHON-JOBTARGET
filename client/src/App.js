import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Applicant  from './components/Applicant';
import AddApplicant from  './components/AddApplicant';
import EditApplicant from './components/EditApplicant';
import JobPosting from './components/JobPosting';
import AddJob from './components/AddJob';
import EditJob from './components/EditJob';
import ViewDetails from './components/ViewDetails';
import ApplicantDashboard from './components/ApplicantDashboard';
import ParserPage from './components/ParserPage';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <ApplicantDashboard></ApplicantDashboard>
    },
    {
        path : '/login',
        element : <Username></Username>
    },
    {
        path : '/parser-page/:id',
        element : <ParserPage></ParserPage>
    },
    {
        path : '/applicant',
        element : <Applicant></Applicant>
    },
    {
        path : '/job',
        element : <JobPosting></JobPosting>
    },
    {
        path : '/add-job',
        element : <AddJob></AddJob>
    },
    {
        path : '/job/:id',
        element : <EditJob></EditJob>
    },
    {
        path : '/add-applicant',
        element : <AddApplicant></AddApplicant>
    },
    {
        path : '/applicant/:id',
        element : <EditApplicant></EditApplicant>
    },
    {
        path : '/view-job/:id',
        element : <ViewDetails></ViewDetails>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    }
   
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
