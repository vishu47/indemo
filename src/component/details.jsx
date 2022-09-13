import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


export default function Details() {
  const { id } = useParams()

  const [getdata, setGetData] = useState([])
  const [det, setDet] = useState([])
  const [model, setModel] = useState("hidden")
  const [name, setName] = useState("")
  const [lang, setLang] = useState("")
  const [runtime, setRuntime] = useState("")
  const [mssg, setMssg] = useState("")

  const SubmitData = (e) => {
    e.preventDefault()
    const arr = [];
    // localStorage.removeItem("booked")
    const obj = { name: e.target.name.value, lang: e.target.lang.value, runtime: e.target.runtime.value }
    const getbooking = localStorage.getItem("booked")
    const org = getbooking ? JSON.parse(getbooking) : arr;
    localStorage.setItem("booked", JSON.stringify([...org, obj]))
    setMssg("Data has been saved in Local Storage.")
  }

  const openModel = () => {
    setModel("block")
    setMssg("")
  }


  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        const filterData = res.data.filter((data) => data.show.id === parseInt(id))
        setGetData(filterData)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <section className='bg-gray-200 p-8 min-h-screen'>
        {
          getdata.length > 0 ?
            <>
              <div className="rounded-lg shadow-lg p-8 bg-white">
                <div className="flex justify-between">
                  <div className="w-2/3">
                    <p className='my-2 font-semibold text-4xl text-rose-700'><span className=''>{getdata[0].show.name}</span></p>
                    <p className='my-2 text-xl'>Status: <span className='font-bold'>{getdata[0].show.status}</span></p>
                    <p className='text-2xl py-2'>Summary in details</p>
                    <div className="Container" dangerouslySetInnerHTML={{ __html: getdata[0].show.summary }}></div>
                  </div>
                  <div className="w-1/3">
                    <img className="object-cover m-auto w-full rounded-lg md:w-48 md:rounded-lg hover:scale-110 duration-1000 cursor-pointer ease-in-out" style={{ "height": "inherit" }} src={getdata[0].show.image.original} alt="" />
                  </div>
                </div>
                <Link to="/" className="mr-4 mt-8 hover:shadow-lg duration-500 ease-in-out w-fit inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg aria-hidden="true" className="mr-2 -ml-1 w-4 h-4 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  Back
                </Link>
                <button onClick={(e) => { setDet(getdata[0].show); openModel() }} className="mt-8 hover:shadow-lg duration-500 ease-in-out w-fit inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                  Book Ticket
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </>

            : "Loading Data..."
        }
      </section>

      {/* model start here */}

      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${model} bg-gray-800/75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
          <form onSubmit={SubmitData}>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Book a Movie Ticket
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                  <svg onClick={(e) => { setModel("hidden") }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="relative z-0 mb-6 w-full group">
                  <input onChange={(e) => setName(e.target.value)} value={name ? name : det.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Movie Name..." required />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Movie Name</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input onChange={(e) => { setRuntime(e.target.value) }} value={runtime ? runtime : det.runtime} type="number" name="runtime" id="runtime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="runtime" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Duration</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input onChange={(e) => { setLang(e.target.value) }} value={lang ? lang : det.language} type="text" name="lang" id="lang" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="lang" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Language</label>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button type="submit" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Book</button>
              </div>
              <p className='text-blue-800 text-small px-6 pb-4'>{mssg}</p>
            </div>
          </form>
        </div>
      </div>

      {/* model end here */}
    </>
  )
}