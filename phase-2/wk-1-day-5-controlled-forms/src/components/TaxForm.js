import { useState } from 'react'

function TaxForm(props) {

  const [income, setIncome] = useState(0)
  const [taxBracket, setTaxBracket] = useState("low")
  const [comments, setComments] = useState("THE IRS IS GREAT")

  // const [formState, setFormState] = useState({
  //   income: 0,
  //   "tax-bracket": 'low',
  //   comments: 'I REALLY REALLY REALLY **** the IRS'
  // })

  // const {income, taxBracket, comments} = formState

  function handleSubmit(e) {
    e.preventDefault()
    switch(taxBracket) {
      case "low": {
        alert(`You owe $${income * 0.5} this year! Thank you for paying your taxes!`)
        break;
      }
      case "middle": {
        alert(`You owe $${income * 0.2} this year! Thank you for paying your taxes!`)
        break;
      }
      case "high": {
        alert(`You owe $${income * 0.01} this year! Thank you for paying your taxes!`)
        break;
      }
      default: 
        alert('Something went wrong')
    }

    handleReset()
  }

  function handleIncomeChange(e) {
    if (e.target.value >= 0) {
      // setFormState({...formState, income: e.target.value})
      setIncome(e.target.value)
    } else {
      alert('You cant have negative income!!!')
    }
  }

  function handleReset() {
    setComments('THE IRS IS GREAT!')
    setIncome(0)
    setTaxBracket('low')
    // setFormState({
    //   income: 0,
    //   taxBracket: 'low',
    //   comment: 'I REALLY REALLY REALLY **** the IRS'
    // })
  }

  // function handleChangeBracket(e) {
  //   setFormState({...formState, taxBracket: e.target.value})
  // }

  // function handleChangeComment(e) {
  //   setFormState({...formState, comment: e.target.value})
  // }
 
  // function handleChange(e) {
  //   setFormState({...formState, [e.target.name]: e.target.value})
  // }
 
  return (

    <>

    <form onSubmit={handleSubmit}>

      <label name="income">How much did you make last year?</label>
      <input type="number" name="income" onChange={handleIncomeChange} value={income} />

      <p>Based on your income, we'd suggest a tax bracket of <span>Service Drone</span></p>

      <label htmlFor="tax-bracket">What is your tax bracket?</label>

      <select name="tax-bracket" onChange={e => setTaxBracket(e.target.value)} value={taxBracket}>
        <option value="low">Service Drone</option>
        <option value="middle">Middle Class American</option>
        <option value="high">Been to Space</option>
      </select>

      <label htmlFor="comments">We value your feedback! Write a comment: </label>
      <textarea name="comments" onChange={e => setComments(e.target.value)} value={comments} />

      <input type="submit" value="Submit Taxes" />

    </form>

    <button type="button" onClick={handleReset}>Reset Form</button>

    </>

  )

}

export default TaxForm
