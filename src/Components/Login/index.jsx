import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { CgCopyright } from 'react-icons/cg';
import { GrUserAdmin } from 'react-icons/gr';
const baseURL = "http://localhost:7777"
import { useNavigate } from 'react-router-dom'
export default function LoginComponentIndex() {
    const navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [loading, setLoading] = useState(false)
    const [otp, setOTP] = useState("")
    const [loadingOTP, setLoadingOTP] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [loginType, setLoginType] = useState("normal")
    const handleChangeValue = (event) => {
        setUserName(event.target.value)
    }
    const handleResendOTP = () => {

    }

    const handleLoginParticipantEmail = () => {
        setLoading(true)
        setErrMsg("")

        if (username !== "") {

            setLoading(true)
            axios.post(
                `https://votingsystem.onrender.com/authentication/username`,
                { username: username },
                { headers:{"Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }}
            )
                .then((res) => {
                    setTimeout(() => {
                        setLoading(false)
                        setLoadingOTP(true)
                        console.log(res)
                    }, 2000);
                })
                .catch((err) => {
                    // setErrMsg("Please")
                    setTimeout(() => {
                        setErrMsg("Please login with correct credentials")
                        setLoading(false)
                        setLoadingOTP(false)
                        console.log(err)
                    }, 2000);
                })
        }
        else {
            setTimeout(() => {
                setErrMsg("Please fill the required field")
                setLoading(false)
            }, 2000);
        }
    }



    const hadleLoginAdminEmail = () => {

    }

    useEffect(() => {
        setErrMsg("")
        if (otp.length === 6) {
            axios.post(
                `https://votingsystem.onrender.com/authentication/otp`,
                { username: username, otp: otp },
                { headers:{"Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }}
            )
                .then((res) => {
                    const userToken = res.data.statusMessage
                    localStorage.setItem('userToken', userToken)
                    navigate('/poll')
                })
                .catch((err) => {
                    setTimeout(() => {
                        setErrMsg("Please Input Correct OTP")
                    }, 1500);
                })
        }
    }, [otp])


    return (
        <div className='w-full h-screen bg-gradient-to-r from-indigo-600 flex justify-center antialiased'>
            <div className='grid p-8 w-full m-4 text-sm rounded h-2/3 self-center bg-white md:w-1/3 md:m-8'>
                <div>
                    <h3 className='text-center'>Your Vote Counts</h3>
                    <br />
                    <div>
                        <div>
                            <label className='text-gray-700'>Phone / Email</label>
                            <div className='rounded bg-white p-2  border-2 border-gray-300 hover:border-indigo-700 focus:border-green-700 ' >
                                <input name='username' onChange={handleChangeValue} value={username} className='w-full' type='email' placeholder='Username' />
                            </div>
                        </div>
                        {
                            loginType === "admin" &&
                            <div>
                                <label className='text-gray-700'>Password</label>
                                <div className='rounded bg-white p-2  border-2 border-gray-300 hover:border-indigo-700 focus:border-green-700 ' >
                                    <input name='username' onChange={handleChangeValue} value={username} className='w-full' type='email' placeholder='Username' />
                                </div>
                            </div>
                        }
                        {!!errMsg && <p className='text-red-600 text-center'>{errMsg}</p>}
                        <div>
                            {
                                loadingOTP === true &&
                                <div>
                                    <br />
                                    <OtpInput
                                        value={otp}
                                        onChange={(event) => { setOTP(event) }}
                                        name='otp'
                                        numInputs={6}
                                        containerStyle={{ display: 'flex', justifyContent: 'center' }}
                                        inputStyle={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', padding: 0, borderRadius: 4, width: '36px', height: '48px' }}
                                        separator={<span>-</span>}
                                    />
                                    <br />
                                    <h3 className='text-center text-indigo-700'>Enter OTP</h3>
                                </div>
                            }
                        </div>
                        <br />
                        {
                            loading === false ?

                                loadingOTP === false &&
                                <div className='rounded-full w-100 bg-indigo-700 text-white p-2 font-bold hover:border-indigo-500 focus:border-indigo-500 flex justify-center  '>
                                    <button onClick={handleLoginParticipantEmail} className='text-center'>Login</button>
                                </div>

                                :
                                <div className='rounded-full w-100 bg-indigo-700 text-white p-2 font-bold hover:border-indigo-500 focus:border-indigo-500 flex justify-center  '>
                                    <ReactLoading className='self-center px-2' type={'cylon'} color={'white'} height={'auto'} width={32} />
                                </div>
                        }
                        <br />
                        <div>
                            <h3 className='text-center'>Or Sign In with</h3>
                            <div className='text-center flex justify-center'>
                                <button onClick={() => { setLoginType("admin") }}>
                                    <GrUserAdmin size={32} color={'blue'} className='text-indigo-700' />
                                </button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-sm text-grey-500  h-full  justify-self-end text-center py-12'>
                        <span className='flex justify-center m-2 text-gray-400'><CgCopyright /> 2023 Voting Set</span>
                    </h3>
                </div>
            </div>


        </div>
    )
}
