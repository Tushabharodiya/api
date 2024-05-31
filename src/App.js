import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import Contact from './user/pages/Contact'
import Mange from './admin/pages/Mange'
import { Headnavbar } from './atoms/Atoms'
import Dashbord from './admin/pages/Dashbord'

const App = () => {

    let role = "admin"
    if (role == "user") {
        return (
            <>
                <Headnavbar element={role} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </>
        )
    }else if(role=="admin"){
        return(
            <>
            <Headnavbar element={role}/>
            <Routes>
                <Route path='/' element={<Dashbord/>} />
                <Route path='/manage' element={<Mange/>} />
            </Routes>
            </>
        )
    }

}

export default App
