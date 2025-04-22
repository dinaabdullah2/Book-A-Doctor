import React from 'react'
import DoctorsList from '../components/Doctors/DoctorsList'
import Navbar from '../components/navbar/Navbar'


const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <DoctorsList />
    </div>
  )
}

export default Home