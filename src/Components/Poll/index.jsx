import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import toast, { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive'


export default function PollIndexComponent() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 624px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
    })
    const [currentPosition, setCurrentPosition] = useState("President")
    const [currentPositionId, setCurrentPositionId] = useState("")
    const [generalPositionId, setGeneralPositionId] = useState("")
    const [positions, setPositions] = useState("")
    const [allVoteStatistics, setAllVoteStatistics] = useState("")
    const [loading, setLoading] = useState(false)
    const [currentPollSelected, setCurrentPollSelected] = useState("")
    const [selectedCandidate, setSelectedCandidate] = useState("")
    const handleChangeValue = () => {

    }
    const notify = () => toast('Vote Casted Successfully');
    const notify2 = () => toast('Vote already Casted Successfully');
    const notify3 = () => toast('Vote cast failed');
    const notify4 = () => toast('Please select a Candidate to cast your vote');

    const handleVotePosition = (event) => {
        // console.log(event.target.value)
        setCurrentPosition(event)
        axios.post('https://votingsystem.onrender.com/authentication/pollposition/votes/authentication/authorization', { position: event, },{headers:{"Access-Control-Allow-Origin": "*",}})
            .then((res) => {
                setLoading(false)
                setAllVoteStatistics(res.data.statusMessage)
            })
            .catch((err) => {

            })
    }

    useEffect(() => {
        axios.post('https://votingsystem.onrender.com/authentication/pollposition/votes/authentication/authorization', { position: currentPosition, },{headers: {"Access-Control-Allow-Origin": "*",}})
            .then((res) => {
                setLoading(false)
                setAllVoteStatistics(res.data.statusMessage)
            })
            .catch((err) => {

            })
    }, [])
    const allPosition = ["President", "Vice-President", "General Secretary", "Assistant General Secretary", "Publicity Secretary", "Treasurer", "Financial Secretary", "Social Secretary", "Ex-Officio Members", "Legal Adviser"]

    const handleVoteSelection = (event) => {
        if (currentPositionId !== "") {

            const accessToken = localStorage.getItem('userToken')

            setCurrentPollSelected(event)
            axios.post('https://votingsystem.onrender.com/authentication/poll/votes/authentication/authorization', { position: currentPositionId, generalContestantId: generalPositionId }, { headers: {"Access-Control-Allow-Origin": "*", Authorization: `Bearer ${accessToken}` } })
                .then((res) => {
                    // console.log("fmg")
                    res.status == 200 ? notify() : notify2()
                    // notify()
                    setLoading(false)
                    setCurrentPollSelected(res.data.statusMessage)
                })
                .catch((err) => {
                    notify3()
                })
        }
        else {
            notify4()
        }
    }

    const handleSelectedCandidate = (event) => {
        console.log(event)
        setSelectedCandidate(event.fullName)
        setCurrentPositionId(event.contestantId)
        setGeneralPositionId(event.generalContestantId)

    }

    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: 'green',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            {
                isBigScreen ?
                    <div className='w-scrren h-screen p-2 flex justify-center bg-gradient-to-r from-indigo-600  via-blue-500 to-indigo-500  antialiased'>
                        <div className='h-full w-full bg-white rounded p-2 '>
                            <div className='flex '>
                                <div className='w-48 bg-gray-200  h-full rounded '>
                                    <h3 className='flex-col text-center'>
                                        Positions
                                    </h3>
                                    <br />
                                    <div className='flex-col text-center h-full justify-around space-y-2 overflow-auto'>
                                        <button onClick={() => handleVotePosition("President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2 bg-gray-200' name="President">President</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Vice-President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Vice-President">Vice-President</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="General Secretary">General Secretary</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Assistant General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Assistant General Secretary">Assistant General Secretary</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Publicity Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Publicity Secretary">Publicity Secretary</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Treasurer")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Treasurer">Treasurer</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Financial Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Financial Secretary">Financial Secretary</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Social Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Social Secretary">Social Secretary</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Ex-Officio Members")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Ex-Officio Members (1)">Ex-Officio Members (1)</button><br />
                                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                                        <button onClick={() => handleVotePosition("Legal Adviser")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Legal Adviser(s)">Legal Adviser(s)</button><br />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col h-full px-8 font-bold' >
                                    <h3>Vote For Position: {currentPosition}</h3>
                                    {
                                        !!selectedCandidate && <h3>Selected Candidate: {selectedCandidate}</h3>
                                    }
                                    <br />
                                    <div className='overflow-auto '>
                                        {/* <div className='flex justify-around w-full p-2 bg-gray-200 rounded'>
                                <div className='w-1/3'>
                                    <CgProfile size={128} color='grey' />
                                </div>
                                <div className='w-1/3 flex-col bg-red-500 align-middle h-fit '>
                                    <h3 className='self-center'>Candidate Name:</h3>
                                    <h3>Candidate Post:</h3>
                                </div>
                            </div> */}
                                        {
                                            allVoteStatistics.length > 0 ?
                                                allVoteStatistics.map((xData, index) => {
                                                    return <div onClick={() => { handleSelectedCandidate(xData) }} key={index} className='flex m-2'>
                                                        <div key={index} className='flex justify-around w-full p-2 bg-gray-200 rounded'>
                                                            <div className='w-1/3'>
                                                                {
                                                                    xData.imageLink ?
                                                                        <div className="h-36 w-36  bg-slate-400 rounded">

                                                                            <img src={xData.imageLink} />
                                                                        </div>
                                                                        :
                                                                        <CgProfile size={128} color='grey' />
                                                                }
                                                            </div>
                                                            <div className='w-2/3 flex-col bg-gray-500 align-middle h-full rounded p-2 text-white font-bold '>
                                                                <h3 className='self-center'>Candidate Name: {xData.fullName}</h3>
                                                                <h3>Candidate Post:{xData.position}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                                :
                                                <div className='flex flex-col justify-center  m-2 bg-gray-200 rounded'>
                                                    <h3 className='text-center'>No Candidate</h3>
                                                </div>
                                        }
                                        <br />
                                        <div>
                                            <br />
                                            <div className='rounded w-1/2 m-auto text-center bg-indigo-700 text-white p-3 font-bold hover:border-green-700 focus:border-green-700 '>
                                                {
                                                    loading === false &&
                                                    <button onClick={() => handleVoteSelection()} placeholder='Reset' >
                                                        Vote Selected Candidate
                                                    </button>
                                                }
                                                {loading === true &&
                                                    <div className='flex flex-col  justify-center h-full '>
                                                        <div className='self-center'>
                                                            <ReactLoading className='self-center px-2' type={'cylon'} color={'white'} height={'auto'} width={48} />
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-scrren h-auto p-2 justify-center bg-gradient-to-r from-indigo-600  via-blue-500 to-indigo-500  antialiased'>
                        <div className='w-full bg-gray-200  h-full rounded '>
                            <div className='md:flex justify-around'>
                                <div className='md:w-1/3 text-center'>
                                    <br />
                                    <label className='font-bold'>Position</label>
                                    <br />
                                    <br />
                                    <p>Select Position</p>
                                    <div className='rounded bg-white py-2  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                                        <select name='position' onChange={
                                            // handleVotePosition
                                            (event) => {
                                                setCurrentPosition(event.target.value)
                                                axios.post('https://votingsystem.onrender.com/authentication/pollposition/votes/authentication/authorization', { position: event.target.value, },{headers: {"Access-Control-Allow-Origin": "*",}})
                                                    .then((res) => {
                                                        setLoading(false)
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
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-full  bg-white rounded p-2 '>
                            <div className='flex '>
                                {/* <div className='w-48 bg-gray-200  h-full rounded '>
                    <h3 className='flex-col text-center'>
                        Positions
                    </h3>
                    <br />
                    <div className='flex-col text-center h-full justify-around space-y-2 overflow-auto'>
                        <button onClick={() => handleVotePosition("President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2 bg-gray-200' name="President">President</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Vice-President")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Vice-President">Vice-President</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="General Secretary">General Secretary</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Assistant General Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Assistant General Secretary">Assistant General Secretary</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Publicity Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Publicity Secretary">Publicity Secretary</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Treasurer")} className='text-black hover:bg-indigo-700 hover:text-white rounded p-2' name="Treasurer">Treasurer</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Financial Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Financial Secretary">Financial Secretary</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Social Secretary")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Social Secretary">Social Secretary</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Ex-Officio Members")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Ex-Officio Members (1)">Ex-Officio Members (1)</button><br />
                        <div className='border-t-2 border-gray-400 p-0 m-0'></div>
                        <button onClick={() => handleVotePosition("Legal Adviser")} className='text-black hover:bg-indigo-700 hover:text-white rounded  p-2' name="Legal Adviser(s)">Legal Adviser(s)</button><br />
                    </div>
                </div> */}
                                <div className='w-full flex flex-col h-full  font-bold' >
                                    <h3>Vote For Position: {currentPosition}</h3>
                                    {
                                        !!selectedCandidate && <h3>Selected Candidate: {selectedCandidate}</h3>
                                    }
                                    <br />
                                    <div className='overflow-auto '>
                                        {/* <div className='flex justify-around w-full p-2 bg-gray-200 rounded'>
                            <div className='w-1/3'>
                                <CgProfile size={128} color='grey' />
                            </div>
                            <div className='w-1/3 flex-col bg-red-500 align-middle h-fit '>
                                <h3 className='self-center'>Candidate Name:</h3>
                                <h3>Candidate Post:</h3>
                            </div>
                        </div> */}
                                        {
                                            allVoteStatistics.length > 0 ?
                                                allVoteStatistics.map((xData, index) => {
                                                    return <div onClick={() => { handleSelectedCandidate(xData) }} key={index} className='flex'>
                                                        <div key={index} className='flex flex-col justify-around m-2 bg-gray-200 rounded'>
                                                            <div className=''>
                                                                {
                                                                    xData.imageLink ?
                                                                        <div className="h-36  bg-slate-400 rounded">

                                                                            <img src={xData.imageLink} />
                                                                        </div>
                                                                        :
                                                                        <CgProfile size={128} color='grey' />
                                                                }
                                                            </div>
                                                            <div className=' flex-col bg-gray-500 align-middle h-full rounded p-2 text-white font-bold '>
                                                                <h3 className='self-center'>Candidate Name: {xData.fullName}</h3>
                                                                <h3>Candidate Post:{xData.position}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                                :
                                                <div className='flex flex-col justify-center  m-2 bg-gray-200 rounded'>
                                                    <h3 className='text-center'>No Candidate</h3>
                                                </div>
                                        }
                                        <div>
                                            <br />
                                            <div className='rounded w-full  text-center bg-indigo-700 text-white p-3 font-bold hover:border-green-700 focus:border-green-700 '>
                                                {
                                                    loading === false &&
                                                    <button onClick={() => handleVoteSelection()} placeholder='Reset' >
                                                        Vote Selected Candidate
                                                    </button>
                                                }
                                                {loading === true &&
                                                    <div className='flex flex-col  justify-center h-full '>
                                                        <div className='self-center'>
                                                            <ReactLoading className='self-center px-2' type={'cylon'} color={'white'} height={'auto'} width={48} />
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
