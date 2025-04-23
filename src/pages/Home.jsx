import React from 'react'
import Navbar from '../components/navbar/Navbar'
import DoctorsList from '../components/doctors/DoctorsList'


const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <DoctorsList />
    </div>
  )
}

export default Home