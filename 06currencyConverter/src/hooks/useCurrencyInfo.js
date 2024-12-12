//custom hooks
//jsx return korle only  file er naam .jsx rakhbo

import { useEffect, useState } from "react";
//useState , use this state .. length 8 something 
//useEffect  ..main effect fele ...

function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //empty object {} dilam, fetch na asle crash jeno na kore 
    useEffect(() => {
        // currency api 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //fetch er por then res.json
        .then((res) => setData(res[currency])) //json theke curreny ... .usd .inr na [currency]
        console.log(data); //emni
    }, [currency]) //depency array, dependency array change hoile call
    console.log(data);
    return data  //data er access peye jabo
}

export default useCurrencyInfo;