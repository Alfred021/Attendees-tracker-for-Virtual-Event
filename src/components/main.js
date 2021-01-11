import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import MainPage from './mainpage.js';
import Attendees from './attendees-list.js';
import Modal from './modal.js';
import "../css/main.css"

const Main = () => {
    const initialState = {
        userName: "",
        surName: "",
        email: "",
        country: "",
        phone: "",
        job: "",
    };
    const [attendeeData, setAttendeeData] = useState(initialState);
    const [savedAttendeesData, setSavedAttendeesData] = useState([])
    const modal = useRef(null)

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

    useEffect(() => {
        const data = localStorage.getItem("data")
        if (data) {
            setSavedAttendeesData(JSON.parse(data))
        }   
    }, [])

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(savedAttendeesData));
    })
    
    const handleSubmit = (e) => {
        setSavedAttendeesData(oldArray => [...oldArray, attendeeData])
        setAttendeeData(initialState)
        modal.current.open()
        e.preventDefault()
    }

    return (
    <Router>
            <div className="header">
                <h2>Bitcoin, the monetary revolution</h2>
                <h3>How the currency became the hot item that it is right now</h3>
                <h4>Monday, January 11, 2021 | 12:30pm Time in Buenos Aires </h4>
                <NavLink className="home-link" to="/">Home</NavLink>
                <NavLink className="home-link" to="/attendees">Attendance Report</NavLink>
            </div>
            <Switch>
                <Route path="/" exact>
                    <MainPage attendee={attendeeData} handleData={handleInput} submit={handleSubmit}/>
                </Route>
                <Route path="/attendees">
                    <Attendees attendees={savedAttendeesData}/>
                </Route>
            </Switch>
            <Modal fade ref={modal}>
            <p>Success! We'll be in touch with you through the email that you provided us.</p>
            </Modal>
    </Router>
    )
}

export default Main
