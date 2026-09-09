import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
const [data, setData] = useState({})
useEffect(()=>{

  if(!currency) return;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
  .then((res)=>{
    console.log("Full API response:", res.status);
    return res.json();
})
  .then((res)=>{
    setData(res.rates);
    console.log("Fetched rate: " ,res.rates);
    console.log(data);
  })
  .catch((err)=>{
    console.error("Fetch error: ",err);
  })
},[currency])

return data;
}

export default useCurrencyInfo;