import {useState, useEffect} from "react";
import axios from "axios";


const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({...state, day});
  
  useEffect(()=> {
    const base = `http://localhost:8001/api`
    
    Promise.all([
      axios.get(`${base}/days`), 
      axios.get(`${base}/appointments`),
      axios.get(`${base}/interviewers`)
    ]).then((all)=> {
      setState(prev => ({...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }))
    })
  }, []);

  const cancelInterview = (id) => {

    const appointment = {
      ...state.appointments[id],
      interview: null 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
    .then(()=> {
      setState({...state, appointments});
    })
  }

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {...appointment})
    .then(() => {
      setState({...state, appointments});
    })
  }



  return {state, setDay, bookInterview, cancelInterview}
};

export default useApplicationData;