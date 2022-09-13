import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './userCard'

// type Props = {}

export default function Main() {

  const [getdata, setGetData] = useState([])

  useEffect(() => {
    const res = axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res.data)
        setGetData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <>
      <section className='bg-gray-200 min-h-screen p-8'>
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {
            getdata ?
              getdata.map((res) => {
                return (
                  <div key={res.score}>
                    <UserCard res={res} />
                  </div>
                )
              })
              : "Data Not Found"
          }
        </div>
      </section>
    </>
  )
}