import './index.css'

const FaqsList = props => {
  const {answer, question} = props
  return (
    <li className="faq-item">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </li>
  )
}

export default FaqsList
