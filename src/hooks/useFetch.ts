import { useEffect, useState } from "react"
import axios from 'axios'

type Hook = (
  url: String
) => [{ isLoading: boolean, response: any, error: any }, Function]

 const useFetch: Hook = (url) => {

    const baseUrl = 'https://conduit.productionready.io/api'

    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
      setOptions(options)
      setIsLoading(true)
    }

    useEffect(() => {
        if(!isLoading) return
        console.log('start use effect');
        axios(`${baseUrl}${url}`, options).then((res) => {
          setResponse(res.data)
          setIsLoading(false)
        }).catch((err) => {
          setResponse(err.response.data)
          setIsLoading(false)
        })
    }, [isLoading])

    return [
      {
        response,
        isLoading,
        error
      },
      doFetch
    ]
}
export default useFetch
