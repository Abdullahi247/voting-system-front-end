import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function MonitorIndexComponent() {
    const [loading, setLoading] = useState(true)
    const [allVoteStats, setAllVoteStats] = useState([])
    const [allVoteStatistics, setAllVoteStatistics] = useState([])
    const [currentPosition, setCurrentPosition] = useState("")
    const isBigScreen = useMediaQuery({ query: '(min-width: 624px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    useEffect(() => {
        axios.get('https://votingsystem.onrender.com/authentication/votes/authentication/authorization', {headers : {"Access-Control-Allow-Origin": "*",}})
            .then((res) => {
                // console.log("fjfgjkfg")
                setLoading(false)
                // console.log(res.data.statusMessage)
                setAllVoteStats([res.data.statusMessage])
            })
            .catch((err) => {

            })
    }, [])

    const handleSetPosition = (event) => {

        setCurrentPosition(event)
        axios.post('https://votingsystem.onrender.com/authentication/monitor/votes/authentication/authorization', { position: event }, {headers:{"Access-Control-Allow-Origin": "*",}})
            .then((res) => {
                // console.log("fjfgjkfg")
                setLoading(false)
                // console.log(res.data.statusMessage)
                setAllVoteStatistics(res.data.statusMessage)
            })
            .catch((err) => {

            })
    }
    const allPosition = ["President", "Vice-President", "General Secretary", "Assistant General Secretary", "Publicity Secretary", "Treasurer", "Financial Secretary", "Social Secretary", "Ex-Officio Members", "Legal Adviser"]

    return (
        <div>
            {
                isBigScreen ?

                    <div className='w-full h-auto md:h-screen bg-gradient-to-r from-indigo-600  via-blue-500 to-indigo-500 p-2'>
                        <div className='py-8'>
                            <div className='overflow-auto'>
                                <div className='text-center text-white'>
                                    <h1 className='font-bold'>Vote Statistics {`for ${currentPosition}`}</h1>
                                </div>
                                {loading === true &&
                                    <div>
                                        <div className='py-16 w-2/3 m-auto md:flex'>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='py-16 w-2/3 m-auto md:flex'>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    loading === false &&
                                        allVoteStats.length > 0 ?
                                        <div className='flex h-full'>
                                            <div className='w-48 bg-white text-black  h-fit rounded'>

                                                <br />
                                                <div className='flex-col text-center h-full justify-around space-y-2 overflow-auto'>
                                                    <button onClick={() => handleSetPosition("President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2 bg-gray-200' name="President">President</button><br />
                                                    <button onClick={() => handleSetPosition("Vice-President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Vice-President">Vice-President</button><br />
                                                    <button onClick={() => handleSetPosition("General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="General Secretary">General Secretary</button><br />
                                                    <button onClick={() => handleSetPosition("Assistant General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Assistant General Secretary">Assistant General Secretary</button><br />
                                                    <button onClick={() => handleSetPosition("Publicity Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Publicity Secretary">Publicity Secretary</button><br />
                                                    <button onClick={() => handleSetPosition("Treasurer")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Treasurer">Treasurer</button><br />
                                                    <button onClick={() => handleSetPosition("Financial Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Financial Secretary">Financial Secretary</button><br />
                                                    <button onClick={() => handleSetPosition("Social Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Social Secretary">Social Secretary</button><br />
                                                    <button onClick={() => handleSetPosition("Ex-Officio Members")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Ex-Officio Members (1)">Ex-Officio Members (1)</button><br />
                                                    <button onClick={() => handleSetPosition("Legal Adviser")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Legal Adviser(s)">Legal Adviser(s)</button><br />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 w-full  m-auto'>
                                                {allVoteStatistics.length > 0 ?
                                                    allVoteStatistics.map((eachVote, index) => {
                                                        return <div key={index} className=' px-0 justify-between m-8'>
                                                            <div className="justify-start ">
                                                                <div className="h-36 w-36  bg-slate-400 rounded">

                                                                    <img src={eachVote.imageLink} />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="text-white">
                                                                <h3>Name : {eachVote.fullName}</h3><br />
                                                                <h3>Votes Count:{eachVote.counts}</h3>
                                                            </div>
                                                        </div>
                                                    })
                                                    :
                                                    <div className='h-1/3 w-2/3 m-auto flex justify-center text-center text-white'>
                                                        <h3>No Open Slot Yet</h3>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        : null

                                }


                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-full h-auto md:h-screen bg-gradient-to-r from-indigo-600  via-blue-500 to-indigo-500 p-2'>
                        <div className='py-8 w-full'>
                            <div className='overflow-auto w-full'>
                                <div className='text-center text-white'>
                                    <h1 className='font-bold'>Vote Statistics {`for ${currentPosition}`}</h1>
                                    <p>Select Position</p>
                                    <div className='rounded bg-white py-2 text-black border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                                        <select name='position' onChange={
                                            // handleVotePosition
                                            (event) => {
                                                axios.post('https://votingsystem.onrender.com/authentication/monitor/votes/authentication/authorization', { position: event.target.value }, {headers:{"Access-Control-Allow-Origin": "*",}})
                                                .then((res) => {
                                                    // console.log("fjfgjkfg")
                                                    setLoading(false)
                                                    // console.log(res.data.statusMessage)
                                                    setAllVoteStatistics(res.data.statusMessage)
                                                })
                                                .catch((err) => {
                                    
                                                })
                                            }
                                        }


                                            id="cars">
                                            {allPosition.map((x) => <option value={x}>{x}</option>)}
                                        </select>
                                    </div>
                                </div>
                                {loading === true &&
                                    <div>
                                        <div className='py-16 w-2/3 m-auto md:flex'>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='py-16 w-2/3 m-auto md:flex'>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='m-4 animate-pulse px-2 rounded my-2 bg-slate-200 hover:bg-green-700 hover:text-white flex flex-col w-full border-t-2 drop-shadow-2xl py-2'>
                                                <div className='w-full px-0 flex justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-16 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 flex justify-end">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className='w-full p-6 py-2 px-0 flex flex-col justify-between '>
                                                    <div className="flex-1 justify-start ">
                                                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                                                    </div>
                                                    <br />
                                                    <div className="flex-1 flex justify-start">
                                                        <div className="h-2 w-6 bg-slate-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    loading === false &&
                                        allVoteStats.length > 0 ?
                                        <div className=' justify-center h-auto w-full'>

                                            <div className=' w-full  justify-center m-auto'>
                                                {allVoteStatistics.length > 0 ?
                                                    allVoteStatistics.map((eachVote, index) => {
                                                        return <div key={index} className=' px-0 justify-between m-8'>
                                                            <div className="justify-start ">
                                                                <div className="h-36 w-36  bg-slate-400 rounded">
                                                                    <img src={eachVote.imageLink} />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="text-white">
                                                                <h3>Name : {eachVote.fullName}</h3><br />
                                                                <h3>Votes Count:{eachVote.counts}</h3>
                                                            </div>
                                                        </div>
                                                    })
                                                    :
                                                    <div className='h-auto w-full  bg-red-500 m-auto flex justify-center text-center text-white'>
                                                        <h3>No Open Slot Yet</h3>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        : null

                                }


                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
