import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <h1 className="footer-logo">
      COVID19<span className="span-ele">INDIA</span>
    </h1>
    <p className="footer-text">
      we stand with everyone fighting on the front lines
    </p>
    <div className="icons-container">
      <VscGithubAlt className="footer-icon" />
      <FiInstagram className="footer-icon" />
      <FaTwitter className="footer-icon" />
    </div>
  </>
)

export default Footer
