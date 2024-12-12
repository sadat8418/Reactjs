import React, {useId} from 'react'
//useId for optimization //emni

function InputBox({
    label,  //from na to, user theke label nibo
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd", //by default usd
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId() //line 21,25 .. onek kom use .. unique Id generate, donot use it for loops 

    return (
        // backtiks a likhci, user jodi css dey ${className}
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
            {/* From To (label) */}
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block"> 
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                        //&& jodi na thake , events ajs string dibe tai number 
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //number a change kori ni ...
                    disabled={currencyDisable} //enabled or disabled check
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>//loop chalane key pass kortei hoy react a
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;