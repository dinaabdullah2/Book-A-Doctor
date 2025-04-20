import React from 'react'
import Navbar from '../components/Navbar'
import DoctorsList from '../components/DoctorsList/DoctorsList'

const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <DoctorsList />
    </div>
  )
}

export default Home