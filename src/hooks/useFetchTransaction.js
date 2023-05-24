import { useState, useEffect } from 'react'

const useFetchTransaction = (url) => {
  const [isLoading, setLoading] = useState(true)
  const [rawData, setRawData] = useState(null)

  useEffect(() => {
    const getTransaction = async () => {
      try {
        setLoading(true)

        const res = await fetch(url)
        const tranactionData = await res.json()

        if (tranactionData) {
          //simulate loading time from API
          setTimeout(() => {
            setRawData(tranactionData)
            setLoading(false)
          }, 1000)

        }
        //add error

        
        //if API returns error catch it here
      } catch (error) {

      }
    }

    getTransaction();

    // clean up useEffect when we unmount
    return () => { }
  }, [url])

  return { isLoading, rawData }
}

export default useFetchTransaction;
