import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BiChevronRightSquare} from 'react-icons/bi'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const appConstants = {
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    searchInput: '',
    searchList: [],
    appStatus: appConstants.initial,
    countryWideList: [],
  }

  componentDidMount() {
    this.startFetching()
  }

  startFetching = () => {
    this.setState(
      {appStatus: appConstants.progress},
      this.getCountryWideDetails,
    )
  }

  getCountryWideDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok) {
      const newData = statesList.map(eachValue => {
        if (data[eachValue.state_code]) {
          return {
            confirmed: data[`${eachValue.state_code}`].total.confirmed,
            recovered: data[`${eachValue.state_code}`].total.recovered,
            deceased: data[`${eachValue.state_code}`].total.deceased,
            population: data[`${eachValue.state_code}`].meta.population,
            active:
              data[`${eachValue.state_code}`].total.confirmed -
              (data[`${eachValue.state_code}`].total.recovered +
                data[`${eachValue.state_code}`].total.deceased),
            stateCode: eachValue.state_code,
            stateName: eachValue.state_name,
          }
        }
        return {
          confirmed: 0,
          recovered: 0,
          deceased: 0,
          population: 0,
          active: 0,
          stateCode: eachValue.state_code,
          stateName: eachValue.state_name,
        }
      })
      this.setState({countryWideList: newData, appStatus: appConstants.success})
    }
  }

  onClickAscendingSortBtn = () => {
    const {countryWideList} = this.state
    const sortedList = countryWideList.sort((x, y) => {
      const a = x.stateName.toLowerCase()
      const b = y.stateName.toLowerCase()
      return a > b ? 1 : -1
    })
    this.setState({countryWideList: sortedList})
  }

  onClickDescendingSortBtn = () => {
    const {countryWideList} = this.state
    const sortedList = countryWideList.sort((x, y) => {
      const a = x.stateName.toLowerCase()
      const b = y.stateName.toLowerCase()
      return a < b ? 1 : -1
    })
    this.setState({countryWideList: sortedList})
  }

  onSearch = event => {
    const searchItem = event.target.value
    const searchResultList = statesList.filter(data =>
      data.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    this.setState({
      searchInput: event.target.value,
      searchList: searchResultList,
    })
  }

  renderTotalNationalData = () => {
    const {searchInput, countryWideList, searchList} = this.state
    const confirmedArray = countryWideList.map(eachValue => eachValue.confirmed)
    const activeArray = countryWideList.map(eachValue => eachValue.active)
    const recoveredArray = countryWideList.map(eachValue => eachValue.recovered)
    const deceasedArray = countryWideList.map(eachValue => eachValue.deceased)
    const totalConfirmedCases = confirmedArray.reduce((a, b) => a + b, 0)
    const totalActiveCases = activeArray.reduce((a, b) => a + b, 0)
    const totalRecoveredCases = recoveredArray.reduce((a, b) => a + b, 0)
    const totalDeceasedCases = deceasedArray.reduce((a, b) => a + b, 0)

    return (
      <>
        <div className="search-input-container">
          <BsSearch size={25} color="#94A3B8" />
          <input
            className="search-input"
            type="search"
            placeholder="Enter the State"
            onChange={this.onSearch}
            value={searchInput}
          />
        </div>
        {searchList.length !== 0 && searchInput !== '' && (
          <ul
            className="search-result-list"
            /* testid="searchResultsUnorderedList" */
          >
            {searchList.map(eachValue => (
              <Link
                to={`/state/${eachValue.state_code}`}
                className="search-link"
              >
                <li className="search-list-item" key={eachValue.state_code}>
                  <p className="search-result-title">{eachValue.state_name}</p>
                  <button className="search-button" type="button">
                    {eachValue.state_code}
                    <BiChevronRightSquare className="arrow-right" />
                  </button>
                </li>
                <hr className="search-line" />
              </Link>
            ))}
          </ul>
        )}
        <div className="container">
          <div className="stats-container">
            <div
              className="confirmed card" /* testid="countryWideConfirmedCases" */
            >
              <p className="stats-type confirmed-cases">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915497/check-mark_1_dsxjxe.png"
                alt="country wide confirmed cases pic"
              />
              <p className="confirmed-cases cases">{totalConfirmedCases}</p>
            </div>
            <div className="active card" /* testid="countryWideActiveCases" */>
              <p className="stats-type active-cases">Active</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915864/protection_1_t3hwm5.png"
                alt="country wide active cases pic"
              />
              <p className="active-cases cases">{totalActiveCases}</p>
            </div>
            <div
              className="recovered card" /* testid="countryWideRecoveredCases" */
            >
              <p className="stats-type recovered-cases">Recovered</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665916014/recovered_1_mpmmwf.png"
                alt="country wide recovered cases pic"
              />
              <p className="active-cases cases">{totalRecoveredCases}</p>
            </div>
            <div
              className="deceased card" /* testid="countryWideDeceasedCases" */
            >
              <p className="stats-type deceased-cases">Deceased</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665914808/breathing_1_ovl7ma.png"
                alt="country wide deceased cases pic"
              />
              <p className="active-cases cases">{totalDeceasedCases}</p>
            </div>
          </div>
        </div>
        <div className="stats-table" /* testid="stateWiseCovidDataTable" */>
          <div className="table-header">
            <div className="states-name-column">
              <p className="table-header-title">States/UT</p>
              <div className="icons-container">
                <button
                  type="button"
                  className="sorting-icon"
                  onClick={this.onClickAscendingSortBtn}
                >
                  <FcGenericSortingAsc size="20" />
                </button>
                <button
                  type="button"
                  className="sorting-icon"
                  onClick={this.onClickDescendingSortBtn}
                >
                  <FcGenericSortingDesc size="20" />
                </button>
              </div>
            </div>
            <div className="table-column">
              <p className="table-header-title">Confirmed</p>
            </div>
            <div className="table-column">
              <p className="table-header-title">Active</p>
            </div>
            <div className="table-column">
              <p className="table-header-title">Recovered</p>
            </div>
            <div className="table-column">
              <p className="table-header-title">Deceased</p>
            </div>
            <div className="table-column">
              <p className="table-header-title">Population</p>
            </div>
          </div>
          <hr className="line" />
          <ul className="state-stats-container">
            {countryWideList.map(eachValue => (
              <li className="state-list" key={eachValue.stateCode}>
                <div className="states-container">
                  <Link
                    to={`/state/${eachValue.stateCode}`}
                    className="state-name-link"
                  >
                    <p className="state-name-text">{eachValue.stateName}</p>
                  </Link>
                </div>
                <div className="table-column">
                  <p className="confirmed-case case">{eachValue.confirmed}</p>
                </div>
                <div className="table-column">
                  <p className="active-case case">{eachValue.active}</p>
                </div>
                <div className="table-column">
                  <p className="recovered-case case">{eachValue.recovered}</p>
                </div>
                <div className="table-column">
                  <p className="deceased-case case">{eachValue.deceased}</p>
                </div>
                <div className="table-column">
                  <p className="population case">{eachValue.population}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="home-loading-view" /* testid="homeRouteLoader" */>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderHomeData = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appConstants.success:
        return this.renderTotalNationalData()
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        {this.renderHomeData()}
        <Footer />
      </div>
    )
  }
}

export default Home
