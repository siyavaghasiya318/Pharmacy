import React from 'react'
import Categories from '../Components/Home/Categories'
import PharmacyHome from '../Components/Home/PharmacyHome'
import Prescription from '../Components/Home/Prescription'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import TrendingProduct from '../Components/Home/TrendingProduct'
import HowItWorks from '../Components/Home/HowItWorks'
import SubscribeSection from '../Components/Home/SubscribeSection'

function Home() {
  return (
    <div className='bg-[#F0F4F5]'>
      <PharmacyHome/>
      <div className='px-4 bg-[#F6F7F9] sm:px-6 lg:px-10'>
        <WhyChooseUs/>
        <Categories/>
        <TrendingProduct/>
        <HowItWorks/>
        
      </div>
      <Prescription/>
      <SubscribeSection/>
    </div>
  )
}

export default Home