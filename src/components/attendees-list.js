import "../css/attendees.css"

const Attendees = ({attendees}) => {
    return(
        <>
        <div className="background">
            <div className="info-event">
                <div>
                    <p><b>Start Date:</b> 2021-01-11 | 12:30pm GMT-3</p>
                    <p><b>Duration:</b> 2.5 Hours</p>
                    <p><b>Attendance Finalized:</b> Not Yet</p>
                </div>
                <h1>Attendees</h1>
            </div>


        <div className="attendees">
        {attendees.map(element => {
            return (
                <>
                <br></br>
            <div className="card">
                <div className="container">
                    <h3><b>{element.userName + " " + element.surName}</b></h3>
                    <p><b>Email: </b>{element.email}</p>
                    <p><b>Phone Number: </b>{element.phone}</p>
                    <p><b>Ocuppation: </b>{element.job}</p>
                    <p><b>Country: </b>{element.country}</p>
                </div>
           </div>
           <br></br>
           </>
            )
        })}  
        </div>   
        </div> 
        </>
    )
}

export default Attendees
