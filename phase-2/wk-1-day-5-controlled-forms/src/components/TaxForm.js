import { useState } from 'react'

function TaxForm(props) {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form is being submitted!')
  }

  return (

    <>

    <form onSubmit={handleSubmit}>

      <label name="income">How much did you make last year?</label>
      <input type="number" name="income" />

      <p>Based on your income, we'd suggest a tax bracket of <span>Service Drone</span></p>

      <label htmlFor="tax-bracket">What is your tax bracket?</label>

      <select name="tax-bracket">
        <option value="low">Service Drone</option>
        <option value="middle">Middle Class American</option>
        <option value="high">Been to Space</option>
      </select>

      <label htmlFor="comments">We value your feedback! Write a comment: </label>
      <textarea name="comments"/>

      <input type="submit" value="Submit Taxes" />

    </form>

    <button type="button">Reset Form</button>

    </>

  )

}

export default TaxForm
