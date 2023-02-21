import './index.css'

const NotFound = props => {
  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1666272619/Group_7484_cd1yd7.png"
        alt="not-found-pic"
        className="notfound-img"
      />
      <h1 className="not-found-title">PAGE NOT FOUND</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found
      </p>
      <p className="not-found-text">Please go back to the homepage</p>
      <button className="home-btn" type="button" onClick={goToHome}>
        Home
      </button>
    </div>
  )
}

export default NotFound
