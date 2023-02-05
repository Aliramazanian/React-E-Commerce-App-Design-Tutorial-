import { Slider } from '@mui/material'
import React from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
     <Announcement />
      <NavBar />
      <Slider />
    </div>
  )
}

export default Home
