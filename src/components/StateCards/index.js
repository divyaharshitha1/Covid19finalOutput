import {Component} from 'react'
import './index.css'

class StateCards extends Component {
  state = {
    confirmedCard: {},
    recoveredCard: {},
    deceasedCard: {},
    activeCard: {},
  }

  componentDidMount() {
    this.totalDistrict()
  }

  totalDistrict = async () => {
    const {totalStateCards} = this.props
    const districtConfirmed = totalStateCards.confirmed
    const districtRecovered = totalStateCards.recovered
    const districtDeceased = totalStateCards.deceased
    const districtActive =
      districtConfirmed - (districtRecovered + districtDeceased)

    const confirmedCard = {
      name: 'Confirmed',
      logo:
        'https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915497/check-mark_1_dsxjxe.png',
      value: districtConfirmed,
    }

    const activeCard = {
      name: 'Active',
      logo:
        'https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915864/protection_1_t3hwm5.png',
      value: districtActive,
    }

    const recoveredCard = {
      name: 'Recovered',
      logo:
        'https://res.cloudinary.com/dmmum4bbq/image/upload/v1665916014/recovered_1_mpmmwf.png',
      value: districtRecovered,
    }

    const deceasedCard = {
      name: 'Deceased',
      logo:
        'https://res.cloudinary.com/dmmum4bbq/image/upload/v1665914808/breathing_1_ovl7ma.png',
      value: districtDeceased,
    }

    this.setState({confirmedCard, activeCard, recoveredCard, deceasedCard})
  }

  cardClick = value => {
    const {stateListCards} = this.props
    stateListCards(value)
  }

  render() {
    const {confirmedCard, activeCard, recoveredCard, deceasedCard} = this.state
    const {isStateCard} = this.props
    const isDistrictCard = isStateCard ? 'background-color' : ''

    return (
      <>
        <ul className="stateCards-container">
          <li
            className={`StateCard-background ${confirmedCard.name} ${isDistrictCard}`}
            tabIndex="-1"
            key={confirmedCard.name}
            value={confirmedCard.name}
            onClick={() => this.cardClick(confirmedCard.name)}
          >
            <div /* testid="stateSpecificConfirmedCasesContainer" */>
              <p className={`${confirmedCard.name}`}>{confirmedCard.name}</p>
              <img
                src={confirmedCard.logo}
                alt="state specific confirmed cases pic"
                className="card-logo"
              />
              <p className="card-value">{confirmedCard.value}</p>
            </div>
          </li>
          <li
            className={`StateCard-background ${activeCard.name}`}
            tabIndex="-1"
            key={activeCard.name}
            value={activeCard.name}
            onClick={() => this.cardClick(activeCard.name)}
          >
            <div /* testid="stateSpecificActiveCasesContainer" */>
              <p className={`${activeCard.name}`}>{activeCard.name}</p>
              <img
                src={activeCard.logo}
                alt="state specific active cases pic"
                className="card-logo"
              />
              <p className="card-value">{activeCard.value}</p>
            </div>
          </li>
          <li
            className={`StateCard-background ${recoveredCard.name}`}
            tabIndex="-1"
            key={recoveredCard.name}
            value={recoveredCard.value}
            onClick={() => this.cardClick(recoveredCard.name)}
          >
            <div /* testid="stateSpecificRecoveredCasesContainer" */>
              <p className={`${recoveredCard.name}`}>{recoveredCard.name}</p>
              <img
                src={recoveredCard.logo}
                alt="state specific recovered cases pic"
                className="card-logo"
              />
              <p className="card-value">{recoveredCard.value}</p>
            </div>
          </li>
          <li
            className={`StateCard-background ${deceasedCard.name}`}
            tabIndex="-1"
            key={deceasedCard.name}
            value={deceasedCard.value}
            onClick={() => this.cardClick(deceasedCard.name)}
          >
            <div /* testid="stateSpecificDeceasedCasesContainer" */>
              <p className={`${deceasedCard.name}`}>{deceasedCard.name}</p>
              <img
                src={deceasedCard.logo}
                alt="state specific deceased cases pic"
                className="card-logo"
              />
              <p className="card-value">{deceasedCard.value}</p>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default StateCards
