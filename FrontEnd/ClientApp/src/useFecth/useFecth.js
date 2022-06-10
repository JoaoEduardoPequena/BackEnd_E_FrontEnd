import { useState, useEffect } from "react";
import axios from 'axios';
//import {api,baseURL } from "../BaseURL/api"


export const useFetch=(url)=> {

    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);    
     
  async function fetchUrl() {
    setLoading(true);
   
    let response = await axios.get(url);
   
        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
      fetchUrl();

    }, [url,loading]);

  console.log("valor",datas)

    return [datas, loading];
}