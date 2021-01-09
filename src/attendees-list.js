
const Attendees = ({attendees}) => {
    return(
        <>
        <h1>Attendees</h1>

        <div>
            <p><b>Start Date:</b> 2021-01-11 | 12:30pm GMT-3</p>
            <p><b>Duration:</b> 2.5 Hours</p>
            <p><b>Attendance Finalized:</b> Not Yet</p>
        </div>

        <br></br>

        {attendees.map(element => {
            return (
            <div className="card">
                <h3><b>{element.userName + " " + element.surName}</b></h3>
                <p>{element.email}</p>
                <p>{element.phone}</p>
                <p>{element.job}</p>
                <p>{element.country}</p>
           </div>
            )
        })}      
        </>
    )
}

export default Attendees
