import Loader from 'react-loader-spinner'
import './index.css'

const LoaderSpinner = () => (
  <div className="loader-container">
    <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
  </div>
)

export default LoaderSpinner
