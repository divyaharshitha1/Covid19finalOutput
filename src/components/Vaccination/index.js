import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const appConstants = {
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
}

class Vaccination extends Component {
  state = {
    vaccinationDetails: {},
    trendValue: 'dose',
    appStatus: appConstants.inProgress,
  }

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-vaccination-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok) {
      const vaccinationDetails = {
        site: data.topBlock.sites.total,
        govt: data.topBlock.sites.govt,
        pvt: data.topBlock.sites.pvt,
        totalDoses: data.topBlock.vaccination.total,
        dose1: data.topBlock.vaccination.tot_dose_1,
        dose2: data.topBlock.vaccination.tot_dose_2,
        doseChart: data.vaccinationDoneByTime.map(eachValue => ({
          total: eachValue.count,
          doseOne: eachValue.dose_one,
          doseTwo: eachValue.dose_two,
          label: eachValue.label,
        })),
        ageChart: data.vaccinationDoneByTimeAgeWise.map(eachValue => ({
          label: eachValue.label,
          Between15To17: eachValue.vac_15_17,
          Between18To45: eachValue.vac_18_45,
          Between45To60: eachValue.vac_45_60,
          greaterThan60: eachValue.vac_60_above,
        })),
        byGender: [
          {
            count: data.topBlock.vaccination.male,
            category: 'male',
          },
          {
            count: data.topBlock.vaccination.female,
            category: 'female',
          },
          {
            count: data.topBlock.vaccination.others,
            category: 'others',
          },
        ],
        byVaccine: [
          {
            count: data.topBlock.vaccination.covishield,
            category: 'covishield',
          },
          {
            count: data.topBlock.vaccination.covaxin,
            category: 'covaxin',
          },
          {
            count: data.topBlock.vaccination.sputnik,
            category: 'sputnik',
          },
        ],
        byAge: [
          {
            count: data.vaccinationByAge.vac_18_45,
            category: '18_45',
          },
          {
            count: data.vaccinationByAge.vac_45_60,
            category: '45_60',
          },
          {
            count: data.vaccinationByAge.above_60,
            category: 'above 60',
          },
        ],
      }
      this.setState({vaccinationDetails, appStatus: appConstants.success})
    }
  }

  changeTrend = value => {
    this.setState({trendValue: value})
  }

  renderVaccinationSuccessContainer = () => {
    const {vaccinationDetails, trendValue} = this.state
    let data = []
    if (trendValue === 'dose') {
      data = vaccinationDetails.doseChart
    } else {
      data = vaccinationDetails.ageChart
    }

    return (
      <>
        <div className="vaccination-container">
          <p className="country-state">
            <AiFillHome className="home-icon" />
            India
          </p>
          <div className="vaccination-content-container">
            <div className="top-site-total-container">
              <div className="site-container">
                <div className="site-content">
                  <img
                    src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1666594846/Group_7476_k6ltqn.svg"
                    className="site-image"
                    alt="site"
                  />
                  <div className="site-main-content">
                    <p className="site-heading">Site Conducting Vaccination</p>
                    <p className="vaccination-count">
                      {vaccinationDetails.site}
                    </p>
                    <div className="bottom-site-content">
                      <div className="bottom-site-sub">
                        <p className="sub-name">Government</p>
                        <p className="sub-count">{vaccinationDetails.govt}</p>
                      </div>
                      <div className="bottom-site-sub">
                        <p className="sub-name">Private</p>
                        <p className="sub-count">{vaccinationDetails.pvt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-container">
              <div className="site-content">
                <img
                  src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1666595622/Group_7475_drt1n0.svg"
                  className="site-image"
                  alt="site"
                />
                <div className="site-main-content">
                  <p className="site-heading">Total Vaccination Doses</p>
                  <p className="vaccination-count">
                    {vaccinationDetails.totalDoses}
                  </p>
                  <div className="bottom-site-content">
                    <div className="bottom-site-sub">
                      <p className="sub-name">Dose 1</p>
                      <p className="sub-count">{vaccinationDetails.dose1}</p>
                    </div>
                    <div className="bottom-site-sub">
                      <p className="sub-name">Dose 2</p>
                      <p className="sub-count">{vaccinationDetails.dose2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vaccination-trends">
            <h1 className="trends-heading">Vaccination Trends</h1>
            <div className="button-holder">
              <button
                type="button"
                className={
                  trendValue === 'dose'
                    ? 'vaccine-button highlight-button'
                    : 'vaccine-button'
                }
                onClick={() => this.changeTrend('dose')}
              >
                By Doses
              </button>
              <button
                type="button"
                className={
                  trendValue === 'age'
                    ? 'vaccine-button highlight-button'
                    : 'vaccine-button'
                }
                onClick={() => this.changeTrend('age')}
              >
                By Age
              </button>
            </div>
            <div className="line-chart-desktop">
              <ResponsiveContainer width={900} height={300}>
                <BarChart width={500} height={300} data={data} barSize={50}>
                  <XAxis dataKey="label" fontSize="12" />
                  <YAxis fontSize="12px" />
                  <Tooltip cursor={{fill: '#FFEBE5'}} />
                  <Legend iconSize="10px" fontSize="12" />
                  {trendValue === 'dose' && (
                    <>
                      <Bar dataKey="total" fill="#A226D0" />
                      <Bar dataKey="doseOne" fill="#FCEA4E" />
                      <Bar dataKey="doseTwo" fill="#37C62B" />
                    </>
                  )}
                  {trendValue === 'age' && (
                    <>
                      <Bar dataKey="Between15To17" fill="#A226D0" />
                      <Bar dataKey="Between18To45" fill="#FCEA4E" />
                      <Bar dataKey="Between45To65" fill="#37C62B" />
                      <Bar dataKey="greaterThan60" fill="#F54394" />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="line-chart-mobile">
              <ResponsiveContainer width={280} height={400}>
                <BarChart width={266} height={446} data={data.slice(4)}>
                  <XAxis dataKey="label" fontSize="6" />
                  <YAxis fontSize="10" />
                  <Tooltip cursor={{fill: '#FFEBE5'}} />
                  <Legend iconSize="10" fontSize="6" />
                  {trendValue === 'dose' && (
                    <>
                      <Bar dataKey="total" fill="#A226D0" />
                      <Bar dataKey="doseOne" fill="#FCEA4E" />
                      <Bar dataKey="doseTwo" fill="#37C62B" />
                    </>
                  )}
                  {trendValue === 'age' && (
                    <>
                      <Bar dataKey="Between15To17" fill="#A226D0" />
                      <Bar dataKey="Between18To45" fill="#FCEA4E" />
                      <Bar dataKey="Between45To65" fill="#37C62B" />
                      <Bar dataKey="greaterThan60" fill="#F54394" />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bottom-container">
            <div className="vaccination-category">
              <h1 className="trends-heading">Vaccination Category</h1>
              <div className="left-pie-charts">
                <ResponsiveContainer width={280} height={300}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="40%"
                      data={vaccinationDetails.byGender}
                      startAngle={180}
                      endAngle={0}
                      innerRadius="60%"
                      outerRadius=""
                      dataKey="count"
                      fontSize="12px"
                    >
                      <Cell name="male" fill="#F54394" />
                      <Cell name="female" fill="#5A8DEE" />
                      <Cell name="others" fill="#FF9800" />
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize="8px"
                      layout="horizontal"
                      verticalAlign="middle"
                      align="center"
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="left-pie-charts">
                  <ResponsiveContainer width={280} height={300}>
                    <PieChart>
                      <Pie
                        cx="50%"
                        cy="40%"
                        data={vaccinationDetails.byVaccine}
                        startAngle={180}
                        endAngle={0}
                        innerRadius="60%"
                        outerRadius=""
                        dataKey="count"
                        fontSize="12px"
                      >
                        <Cell name="Covishield" fill="#007CC3" />
                        <Cell name="Covaxin" fill="#7AC142" />
                        <Cell name="Sputnik V" fill="#FF9800" />
                      </Pie>
                      <Legend
                        iconType="circle"
                        iconSize="8px"
                        layout="horizontal"
                        verticalAlign="middle"
                        align="center"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="vaccination-by-age">
              <h1 className="trends-heading">Vaccination By Age</h1>
              <div className="right-pieChart">
                <ResponsiveContainer width={800} height={320}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="50%"
                      data={vaccinationDetails.byAge}
                      startAngle={360}
                      endAngle={0}
                      innerRadius="0%"
                      outerRadius="95%"
                      dataKey="count"
                      fontSize="12px"
                    >
                      <Cell name="18-45" fill="#007CC3" />
                      <Cell name="45-60" fill="#7AC142" />
                      <Cell name="Above 60" fill="#FF9800" />
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize="8px"
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      fontSize="8px"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  renderLoaderContainer = () => (
    <div className="vaccination-loader-container">
      <Loader type="ThreeDots" color="#007BFF" width="50" height="50" />
    </div>
  )

  checkCondition = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appConstants.success:
        return this.renderVaccinationSuccessContainer()
      default:
        return this.renderLoaderContainer()
    }
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        {this.checkCondition()}
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Vaccination
