// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {titleInput: '', dateInput: '', appointmentList: [], sA: false}

  starredAppointments = () => {
    this.setState(prevState => ({sA: !prevState.sA}))
  }

  addingAppointments = () => {
    const {titleInput, dateInput} = this.state
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const modifiedDate = new Date(dateInput)
    const day = days[modifiedDate.getDay()]
    const month = months[modifiedDate.getMonth()]
    const d = modifiedDate.getDate()
    const yr = modifiedDate.getFullYear()

    console.log(modifiedDate)

    const newList = {
      id: v4(),
      title: titleInput,
      date: `${d} ${month} ${yr}, ${day}`,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newList],
      titleInput: '',
      dateInput: '',
    }))
  }

  titleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  dateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleIsStared = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {appointmentList, sA} = this.state
    console.log(sA)

    if (sA === true) {
      appointmentList.filter(each => each.isStarred === true)
    }

    return (
      <div className="bg">
        <div className="bg2">
          <div className="container">
            <div className="appointmentsContainer">
              <h1>Add Appointment</h1>
              <form>
                <div className="inputs">
                  <label htmlFor="Title" className="inputNames">
                    TITLE:
                  </label>
                  <input
                    id="Title"
                    type="text"
                    placeholder="text here"
                    className="inputBox"
                    onChange={this.titleChange}
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="Date" className="inputNames">
                    DATE:
                  </label>
                  <input
                    id="Date"
                    type="date"
                    placeholder="dd/mm/yy"
                    className="inputBox"
                    onChange={this.dateChange}
                  />
                </div>
                <button
                  type="button"
                  className="button"
                  onClick={this.addingAppointments}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="hLine" />

          <div className="listOfAppointments">
            <h1 className="h">Appointments</h1>
            <button
              type="button"
              className="starredButton"
              onClick={this.starredAppointments}
            >
              Starred
            </button>
          </div>
          <ul className="list">
            {appointmentList.map(each => (
              <AppointmentItem
                title={each.title}
                date={each.date}
                key={each.id}
                toggleIsStared={this.toggleIsStared}
                id={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
