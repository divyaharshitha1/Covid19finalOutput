import './index.css'

const TopDistricts = props => {
  const {topDistrictsNumber, topDistrictsName} = props
  return (
    <li className="top-dist-list-item">
      <p className="top-dist-num">{topDistrictsNumber}</p>
      <p className="top-dist-name">{topDistrictsName}</p>
    </li>
  )
}

export default TopDistricts
