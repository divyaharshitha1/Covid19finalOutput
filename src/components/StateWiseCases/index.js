import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import StateCards from '../StateCards'
import TopDistricts from '../TopDistricts'
import Charts from '../Charts'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549516/Group_7362_mlynni.svg',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548571/Group_7354_zpu1pm.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545308/Group_7340_yzi2ym.svg',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548321/Group_7341_e8qmri.svg',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547664/Group_7335_sygtm8.svg',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544035/Group_7361_xnth2c.svg',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547965/Group_7353_cv86mk.svg',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549317/Group_7357_zil3r0.svg',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549226/Group_7358_eawfzn.svg',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545476/Group_7349_oa9gra.svg',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547143/Group_7337_bok5ju.svg',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544991/Group_7332_vqpl4w.svg',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544694/Group_7364_hx61n7.svg',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544577/Group_7328_u5ypuj.svg',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544826/Group_7342_pxdkti.svg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545553/Group_7339_y8era7.svg',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547488/Group_7355_i3wqob.svg',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549655/Group_7363_yunehm.svg',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549160/Group_7359_wpljt9.svg',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545095/Group_7350_idvvlm.svg',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547410/Group_7336_jrcbib.svg',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547317/Group_7346_olt0tk.svg',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547742/Group_7344_mthnuc.svg',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547002/Group_7347_dmjane.svg',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547563/Group_7345_deqke0.svg',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545875/Group_7348_ejavec.svg',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549083/Group_7360_xxirlm.svg',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546363/Group_7330_hmfcd0.svg',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545682/Group_7333_b89brc.svg',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546166/Group_7338_vckz4t.svg',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547204/Group_7356_ewf3hg.svg',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546720/Group_7351_poswvn.svg',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548201/Group_7352_srjdi9.svg',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547872/Group_7334_ofq71z.svg',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545405/Group_7331_rezscj.svg',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548089/Group_7343_ipysox.svg',
  },
]

class StateWiseCases extends Component {
  state = {
    isLoading: true,
    totalState: [],
    totalTested: 0,
    listStateName: '',
    stateCode: '',
    stateDate: '',
    localStoreData: [],
    id: '',
    isStateCard: true,
    category: 'Confirmed',
  }

  componentDidMount() {
    this.getStateDetails()
  }

  getStateDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data/'
    const options = {
      method: 'GET',
    }
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const stateTested = data[stateCode].total.tested
      const isStateCode = statesList.filter(
        eachItem => eachItem.state_code === stateCode,
      )
      const totalStateData = data[stateCode].total
      const stateName = isStateCode[0].state_name
      const newDate = new Date(data[stateCode].meta.last_updated)

      this.setState({
        isLoading: false,
        totalState: totalStateData,
        listStateName: stateName,
        stateDate: newDate,
        localStoreData: data,
        id: stateCode,
        stateCode,
        totalTested: stateTested,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  stateData = () => {
    const {id, localStoreData, category} = this.state
    const listOfDistrict = localStoreData[id].districts
    const listOfDistrictName = Object.keys(listOfDistrict)
    const lowerCaseDis = category.toLowerCase()
    const dataElement = listOfDistrictName.map(eachItem => ({
      districtNameList: eachItem,
      districtValue: listOfDistrict[eachItem].total[lowerCaseDis]
        ? listOfDistrict[eachItem].total[lowerCaseDis]
        : 0,
    }))
    dataElement.sort((a, b) => b.districtValue - a.districtValue)

    const stateActiveCase = listOfDistrictName.map(eachItem => ({
      districtNameList: eachItem,
      districtValue:
        listOfDistrict[eachItem].total.confirmed -
        (listOfDistrict[eachItem].total.recovered +
          listOfDistrict[eachItem].total.deceased)
          ? listOfDistrict[eachItem].total.confirmed -
            (listOfDistrict[eachItem].total.recovered +
              listOfDistrict[eachItem].total.deceased)
          : 0,
    }))
    if (lowerCaseDis === 'active') {
      return stateActiveCase
    }
    return dataElement
  }

  stateListCards = card => {
    this.setState({category: card, isStateCard: false})
  }

  districtName = () => {
    const {
      listStateName,
      totalTested,
      totalState,
      isStateCard,
      stateDate,
      category,
      stateCode,
    } = this.state
    const topDistricts = this.stateData()

    const months = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    return (
      <div className="state-details">
        <div className="state-name-row">
          <h1 className="state-name-container">{listStateName}</h1>
          <div className="test-num-container">
            <p className="test-title">Tested</p>
            <p className="test-num">{totalTested}</p>
          </div>
        </div>
        <p className="last-updated-date">
          {`Last update on ${
            months[stateDate.getMonth()]
          } ${stateDate.getDate()} ${stateDate.getFullYear()}`}
        </p>
        <div className="state-specific-card-list">
          <StateCards
            stateListCards={this.stateListCards}
            totalStateCards={totalState}
            isStateCard={isStateCard}
          />
        </div>

        <div className="districts-container">
          <h1 className={`districts-heading ${category}-color`}>
            Top Districts
          </h1>
          <div>
            <ul
              className="districts-list-container"
              /* testid="topDistrictsUnorderedList" */
            >
              {topDistricts.map(eachDistrict => (
                <TopDistricts
                  topDistrictsNumber={eachDistrict.districtValue}
                  topDistrictsName={eachDistrict.districtNameList}
                  key={eachDistrict.districtNameList}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="graphs-container">
          <Charts districtsChart={category} districtCode={stateCode} />
        </div>
      </div>
    )
  }

  renderLoaderContainer = () => (
    <div className="state-loader-container" /* testid="stateDetailsLoader" */>
      <Loader type="ThreeDots" color="#007BFF" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <Header />
        <div className="main-container">
          {isLoading ? this.renderLoaderContainer() : this.districtName()}

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default StateWiseCases
