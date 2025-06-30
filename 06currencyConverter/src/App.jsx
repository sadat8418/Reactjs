import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'   //custom hooks

//import './App.css'

function App() {
 // const [count, setCount] = useState(0) 
  const [amount, setAmount]  = useState(0) //hooks are function , count variable, setCount func  reference
  const [from, setFrom] = useState("usd") //from
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  //using hook
const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo) //sob keys (in object) nilam api theke, usd, inr,bdt 

const swap = ()=>{ //onclick swap "method" call
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount) //inr to usd korbe , dekhte sudor ar ki 
  setAmount(convertedAmount)  // 
}
const convert = () => { //onSubmit button a press
  setConvertedAmount(amount * currencyInfo[to])
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault(); //form submit hobe na. convert hobe
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)} //setAmount(amount)
                          selectCurrency={from}
                          //amount ja user dise, setAmount a dibo ...
                          onAmountChange={(amount) => setAmount(amount)}

                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          amountDisable //user jeno amount na change korte pare //amountDisable=true 
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
