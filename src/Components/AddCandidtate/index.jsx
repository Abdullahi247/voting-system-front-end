import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import 'react-notifications/lib/notifications.css';

// import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function AddCandidateIndex() {

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    position: "",
    imageURL: ""

  })

  const [errMsg , setErrMsg] = useState("")

  const allPosition = ["President", "Vice-President", "General Secretary", "Assistant General Secretary", "Publicity Secretary", "Treasurer", "Financial Secretary", "Social Secretary", "Ex-Officio Members", "Legal Adviser"]

  const [loading, setLoading] = useState(false)

  const handleChangeValue = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleAddNewContestant = () => {
    setErrMsg("")
    setLoading(true)
    if(credentials.firstName !== "" && credentials.lastName !== "" && credentials.contact !== "" && credentials.email !== "" && credentials.position !== "" && credentials.imageURL !== ""){
      axios.post(
        `https://votingsystem.onrender.com/authentication/add/votes/authentication/authorization`,
        {
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          contact: credentials.contact,
          email: credentials.email,
          position: credentials.position,
          imageURL: credentials.imageURL
        },
        { headers:{"Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }}
      )
        .then((res) => {
          setTimeout(() => {
        setErrMsg("Successfully Added")

            // NotificationManager.success('Success message', 'Successfully Added');
            setLoading(false)
            console.log(res)
          }, 2000);
        })
        .catch((err) => {
          // setErrMsg("Please")
          setTimeout(() => {
            setLoading(false)
            console.log(err)
          }, 2000);
        })
    }
    else{
      setTimeout(() => {
      setLoading(false)
        setErrMsg("Please fill the required details")
      }, 1500);
    }
  }

  return (
    <div className='w-scrren h-screen flex justify-center bg-gradient-to-r from-indigo-600  via-blue-500 to-indigo-500 antialiased'>


      <div className='md:w-2/3 m-4 overflow-auto text-sm md:h-2/3 md:m-auto bg-white rounded p-8'>
        <h3>Add New Contenstants</h3>
        <a href='/monitor' className='text-indigo-700'>View All Contestants</a>
        <br />
        <div className='overflow-x-none'>
          <div className='md:flex justify-around w-full'>
            <div className='md:w-1/3'>
              <label>FirstName</label>
              <div className='rounded bg-white p-3  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <input name='firstName' onChange={handleChangeValue} value={credentials.firstName} className='w-full' type='email' placeholder='Firstnane' />

              </div>
            </div>
            <div className='md:w-1/3'>
              <label>LastName</label>
              <div className='rounded bg-white p-3  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <input name='lastName' onChange={handleChangeValue} value={credentials.lastName} className='w-full' type='email' placeholder='Lastname' />

              </div>
            </div>
          </div>
          <div className='md:flex justify-around w-full'>
            <div className='md:w-1/3'>
              <label>Phone</label>
              <div className='rounded bg-white p-3  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <input name='contact' onChange={handleChangeValue} value={credentials.contact} className='w-full' type='email' placeholder='Phone' />

              </div>
            </div>
            <div className='md:w-1/3'>
              <label>Email(optional)</label>
              <div className='rounded bg-white p-3  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <input name='email' onChange={handleChangeValue} value={credentials.email} className='w-full' type='email' placeholder='Email' />

              </div>
            </div>
          </div>
          <div className='md:flex justify-around'>
            <div className='md:w-1/3'>
              <label>Position</label>
              <div className='rounded bg-white py-2  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <select name='position' onChange={handleChangeValue} id="cars">
                  {allPosition.map((x) => <option value={x}>{x}</option>)}
                </select>
              </div>
            </div>
            <div className='md:w-1/3'>
              <label>Image Link</label>
              <div className='Frounded bg-white p-3  border-2 border-gray-300 hover:border-green-700 focus:border-green-700 ' >
                <input name='imageURL' onChange={handleChangeValue} value={credentials.imageURL} className='w-full' type='email' placeholder='Image Link' />
              </div>
            </div>
          </div>
          <div>
            <br />
            {
              !!errMsg && <h3 className='text-center text-red-700'>{errMsg}</h3>
            }
            <div className='rounded md:w-1/2 m-auto text-center bg-indigo-700 text-white p-3 font-bold hover:border-green-700 focus:border-green-700 '>
              {
                loading === false &&
                <button onClick={() => handleAddNewContestant()} placeholder='Reset' >
                  Add Contestants
                </button>
              }
              {loading === true &&
                <div className='flex flex-col  justify-center h-full '>
                  <div className='self-center'>
                    <ReactLoading className='self-center px-2' type={'cylon'} color={'white'} height={'auto'} width={48} />
                  </div>
                </div>
              }

        {/* <NotificationContainer/> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
