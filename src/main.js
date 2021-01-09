import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import MainPage from './mainpage.js';
import Attendees from './attendees-list.js';

const Main = () => {
    const [attendeeData, setAttendeeData] = useState({
        userName: "",
        surName: "",
        email: "",
        country: "",
        phone: "",
        job: "",
    })
    const [savedAttendeesData, setSavedAttendeesData] = useState([])

    const handleInput = (e) => {

        switch (e.target.name) {
            case "userName":
                setAttendeeData({
                    userName: "" + e.target.value,
                    surName: attendeeData.surName,
                    email: attendeeData.email,
                    country: attendeeData.country,
                    phone: attendeeData.phone,
                    job: attendeeData.job,
                })
            break;
            case "surName":
                setAttendeeData({
                    userName: attendeeData.userName,
                    surName: "" + e.target.value,
                    email: attendeeData.email,
                    country: attendeeData.country,
                    phone: attendeeData.phone,
                    job: attendeeData.job,
                    })
            break;
            case "email":
                setAttendeeData({
                    userName: attendeeData.userName,
                    surName: attendeeData.surName,
                    email: "" + e.target.value,
                    country: attendeeData.country,
                    phone: attendeeData.phone,
                    job: attendeeData.job,
                })
            break;
            case "country":
                setAttendeeData({
                    userName: attendeeData.userName,
                    surName: attendeeData.surName,
                    email: attendeeData.email,
                    country: "" + e.target.value,
                    phone: attendeeData.phone,
                    job: attendeeData.job,
                })
            break;
            case "phone":
                setAttendeeData({
                    userName: attendeeData.userName,
                    surName: attendeeData.surName,
                    email: attendeeData.email,
                    country: attendeeData.country,
                    phone: "" + e.target.value,
                    job: attendeeData.job,
                })
            break;
            case "job":
                setAttendeeData({
                    userName: attendeeData.userName,
                    surName: attendeeData.surName,
                    email: attendeeData.email,
                    country: attendeeData.country,
                    phone: attendeeData.phone,
                    job: "" + e.target.value,
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        setSavedAttendeesData(oldArray => [...oldArray, attendeeData]);
        setAttendeeData({
            userName: "",
            surName: "",
            email: "",
            country: "",
            phone: "",
            job: "",
        })
        e.preventDefault()
    }

    return(
    <Router>
            <div>
                <h1>Bitcoin, the monetary revolution</h1>
                <h2>How the currency became the hot item that it is right now</h2>
                <h3>Monday, January 11, 2021 | 12:30pm Time in Buenos Aires </h3>
                <NavLink to="/">Home</NavLink>
            </div>
            <Switch>
                <Route path="/" exact>
                    <MainPage attendee={attendeeData} handleData={handleInput} submit={handleSubmit}/>
                </Route>
                <Route path="/attendees">
                    <Attendees attendees={savedAttendeesData}/>
                </Route>
            </Switch>      
    </Router>
    )
}

export default Main
