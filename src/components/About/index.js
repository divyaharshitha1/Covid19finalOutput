import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FaqsList from '../FaqsList'
import FactsList from '../FactsList'
import './index.css'

class About extends Component {
  state = {
    faqsList: {},
    factsData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTotalAboutData()
  }

  getTotalAboutData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()

      const updatedFactsData = data.factoids.map(each => ({
        banner: each.banner,
        id: each.id,
      }))

      const updatedFaqsData = data.faq.map(eachFaq => ({
        answer: eachFaq.answer,
        qno: eachFaq.qno,
        category: eachFaq.category,
        question: eachFaq.question,
      }))

      this.setState({
        faqsList: updatedFaqsData,
        factsData: updatedFactsData,
        isLoading: false,
      })
    }
  }

  renderFaqsFactsList = () => {
    const {faqsList, factsData} = this.state
    return (
      <>
        <ul className="faqs-list" /* testid="faqsUnorderedList" */>
          {faqsList.map(eachFaq => (
            <FaqsList
              key={eachFaq.qno}
              answer={eachFaq.answer}
              question={eachFaq.question}
            />
          ))}
        </ul>

        <h1 className="about-vaccine-title">Facts</h1>
        <ul className="facts-list">
          {factsData.map(eachFact => (
            <FactsList key={eachFact.id} banner={eachFact.banner} />
          ))}
        </ul>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" /* testid="aboutRouteLoader" */>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="about-container">
        <Header />
        <div className="about-content">
          <h1 className="about-title">About</h1>
          <p className="last-updated">Last update on march 28th 2021.</p>
          <p className="about-text">
            COVID-19 vaccines be ready for distribution
          </p>
          {isLoading ? this.renderLoadingView() : this.renderFaqsFactsList()}
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default About
