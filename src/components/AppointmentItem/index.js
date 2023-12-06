// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const url = !isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onClickStarred = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="list-container">
      <div className="item-container">
        <p className="apptmnt-title">{title}</p>
        <button
          type="button"
          data-testid="star"
          onClick={onClickStarred}
          className="starred-button"
        >
          <img src={url} alt="star" className="star" />
        </button>
      </div>
      <p className="apptmnt-date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
