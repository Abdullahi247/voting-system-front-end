import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginIndex from './Pages/Login'
import AddCandidateIndex from './Components/AddCandidtate'
import MonitorIndex from './Pages/Monitor'
import PollIndex from './Pages/Poll'
import Auth from './Auth/Authentication'
import 'react-notifications/lib/notifications.css';
import NotFound from './Pages/404'
// import {NotificationContainer, NotificationManager} from 'react-notifications';
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginIndex />} />
          <Route path='/candidate' element={Auth(AddCandidateIndex)} />
          <Route path='/monitor' element={Auth(MonitorIndex)} />
          <Route path='/poll' element={Auth(PollIndex)} />
          <Route path="/*" element={<NotFound />} />
        {/* <NotificationContainer/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
