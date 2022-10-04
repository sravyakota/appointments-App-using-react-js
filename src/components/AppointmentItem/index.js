// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {title, id, date, toggleIsStared} = props
  const {isStarred} = toggleIsStared

  console.log(isStarred)
  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStared(id)
  }

  return (
    <li className="appointmentCards">
      <div className="appos">
        <p className="headingTitle">{title}</p>
        <button type="button" className="starButton" onClick={onClickStar}>
          <img src={star} alt="star" className="s" />
        </button>
      </div>
      <p className="date">Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
