import './index.css'

const FactsList = props => {
  const {banner} = props
  return (
    <li className="fact-list-item">
      <p className="fact-text">{banner}</p>
    </li>
  )
}

export default FactsList
