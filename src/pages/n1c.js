import { useEffect } from "react";

const baseURL =
  "https://ws-na1.spexlive.net/service/rest/catalog?appId=231051&catalog=na&method=getProduct&locale=en_us&productId=11988996&descriptionTypes=none&categories=default&manufacturer=none&displayTemplate=1&categorizeAccessories=false&skuType=all&format=json";
async function fetchAPI() {
  const httpResponse = await fetch("api/n1c", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log(httpResponse);

  console.log(JSON.stringify(httpResponse, null, 2));
}

export default function NOneC() {
  useEffect(() => {
    fetchAPI();
    // axios
    //   .get(baseURL, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(JSON.stringify(response));
    //   });
  }, []);
  return <div>n1c</div>;
}
