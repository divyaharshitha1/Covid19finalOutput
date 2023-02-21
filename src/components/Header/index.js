import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {RiCloseCircleFill} from 'react-icons/ri'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  onToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  onCloseMenu = () => {
    this.setState({isToggleActive: false})
  }

  render() {
    const {isToggleActive} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'
    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'
    const vaccinationClassName =
      path === '/vaccination' ? 'link-name highlight' : 'link-name'
    return (
      <>
        <nav className="header-large-container">
          <Link to="/" className="link">
            <h1 className="header-logo">
              COVID19<span className="span-ele">INDIA</span>
            </h1>
          </Link>
          <ul className="menu-list-lg">
            <Link to="/" className="link">
              <li key="1">
                <button className={homeClassName} type="button">
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="link">
              <li key="2">
                <button className={vaccinationClassName} type="button">
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="link">
              <li key="3">
                <button className={aboutClassName} type="button">
                  About
                </button>
              </li>
            </Link>
          </ul>
          <button
            className="toggle-button"
            type="button"
            onClick={this.onToggleButtonClick}
          >
            <img
              src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665916180/add-to-queue_1_v6aocf.png"
              className="toggle-img"
              alt="menu"
            />
          </button>
        </nav>
        {isToggleActive ? (
          <ul className="menu-list">
            <Link to="/" className="link">
              <li key="1">
                <button className={homeClassName} type="button">
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="link">
              <li key="2">
                <button className={vaccinationClassName} type="button">
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="link">
              <li key="3">
                <button className={aboutClassName} type="button">
                  About
                </button>
              </li>
            </Link>
            <li className="close-item" key="3">
              <button
                className="close-button"
                type="button"
                onClick={this.onCloseMenu}
              >
                <RiCloseCircleFill size={20} color="#FFFFFF" />
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
