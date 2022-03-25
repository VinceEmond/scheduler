import React, { useState , useEffect} from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "./Appointment";
import axios from "axios";
import {getAppointmentsForDay} from "helpers/selectors";


const Application = (props) => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const setDay = (day) => setState({...state, day});

  useEffect(()=> {
    const base = `http://localhost:8001/api`

    Promise.all([
      axios.get(`${base}/days`), 
      axios.get(`${base}/appointments`)
    ]).then((all)=> {
      setState(prev => ({...prev,
        days: all[0].data,
        appointments: all[1].data
      }))
    })
  }, []);

  const appointmentsArr = dailyAppointments.map((appointment) => {
    if (appointment.interview){
      return (<Appointment key={appointment.id} {...appointment}/>)
    };
    return (<Appointment key={appointment.id} id={appointment.id} time={appointment.time}/>);
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
          />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentsArr}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


export default Application;