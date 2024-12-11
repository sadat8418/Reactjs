//custom hooks
//jsx return korle only  file er naam .jsx rakhbo

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //empty object {} dilam, crash jeno na kore 
    useEffect(() => {
        // currency api 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data  //data er access peye jabo
}

export default useCurrencyInfo;