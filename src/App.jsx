import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [amount,setAmount]=useState(1)
  const [fromAmount,setfromAmountt]=useState('USD')
  const [toAmount,settoAmountt]=useState('INR')
  const [rate,setRate]=useState(0)
 
const AmtChange=(e)=>{
  if(e.target.value<=0){
    setAmount(1)
  }else
  setAmount(e.target.value)

}
useEffect(()=>{
  const Exchange=async()=>{
    try{
      const host = 'api.frankfurter.app';
      const res= await await fetch(`https://${host}/latest?amount=${amount}&from=${fromAmount}&to=${toAmount}`)
      const r=await res.json()
     const some= Object.values(r)[3]
     const result=Object.values(some)
     setRate(result)
      
    }catch(error){
      console.log(error)
    }
  }
  Exchange()
},[fromAmount,toAmount,amount])
const Changefrmcurr=(e)=>{
  setfromAmountt(e.target.value)
}
const Changetocurr=(e)=>{
  settoAmountt(e.target.value)
}

  return (
    <>
      <div className='container'>
      <div className="box"></div>
      <div className="converter">
        <div className="heading">
          <h3>currency converter</h3>
        </div>
        <div className="input-container">
          <label htmlFor="amt">Amount :</label>
          <input type="number" value={amount} id='amt' onChange={AmtChange} />
        </div>
        <div className="input-container">
          <label htmlFor="frmCurrency">From Currency</label>
         <select  id="frmCurrency" value={fromAmount} onChange={Changefrmcurr}>
          <option value="USD">USD - United States Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterling</option>
          <option value="JPY">JPY - Japnese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - Chinese Yuvan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR -South African RAND</option>
         </select>
        </div>
        <div className="input-container">
        <label htmlFor="toCurrency">To Currency</label>
         <select  id="toCurrency"  value={toAmount} onChange={Changetocurr}>
         <option value="USD">USD - United States Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterling</option>
          <option value="JPY">JPY - Japnese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - Chinese Yuvan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR -South African RAND</option>
         </select>
        </div>
        <div className="result">
          <p id="showAmt">{amount} {fromAmount} is equal to {rate} {toAmount}</p>
        </div>
      </div>
      </div>
  
    </>
  )
}

export default App
