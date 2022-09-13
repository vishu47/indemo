import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    return (
        <>
            <div className="flex h-full flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="relative overflow-hidden h-full p-4">
                    <img className="object-cover w-full rounded-lg md:w-48 md:rounded-lg hover:scale-150 duration-1000 cursor-pointer ease-in-out" style={{ "height": "inherit" }} src={props.res.show.image.original} alt="" />
                </div>
                <div className='h-full'>
                    <div className="flex h-full xl:w-[230px] lg:w-[200px] md:w-[150px] flex-col p-4 leading-normal justify-between">
                        <div className="flex flex-col justify-between leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.res.show.name}1</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status : <span className='font-bold '>{props.res.show.status}</span></p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Language : <span className='font-bold '>{props.res.show.language}</span></p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Runtime : <span className='font-bold '>{props.res.show.runtime ? props.res.show.runtime :"NA"}</span></p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating : <span className='font-bold '>{props.res.show.rating.average ? props.res.show.rating.average : "NA"}</span></p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <div className="flex">
                                    {
                                        props.res.show.genres ?
                                            props.res.show.genres.map((gen) => {
                                                return (
                                                    <>
                                                        <span className=' py-0 px-2 text-[12px] rounded-md mr-1 bg-rose-700 text-white'>{gen}</span>
                                                    </>
                                                )
                                            })
                                            : <span className='py-0 px-2 text-[12px] rounded-md mr-1 bg-rose-700 text-white'>Not Available</span>
                                    }
                                </div>
                            </p>
                        </div>
                        <Link to={`/details/${props.res.show.id}`} className="hover:shadow-lg duration-500 ease-in-out w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
