import React from 'react'
import './Home.css'
import Section from './Section'


function Home() {
  return (
   <div className='Home'>
       <Section
            title="Model S"
            description="Order Online For Touchless Delivery"
            leftBtnDes="custom order"
            rightBtnDes="existing inventory"
            classname="Section1"
       />
       <Section 
            title="Model Y"
            description="Order Online For Touchless Delivery"
            leftBtnDes="custom order"
            rightBtnDes="existing inventory"
            classname="Section2"
       />
       <Section 
            title="Model 3"
            description="Order Online For Touchless Delivery"
            leftBtnDes="custom order"
            rightBtnDes="existing inventory"
            classname="Section3"
       />
       <Section 
            title="Model X"
            description="Order Online For Touchless Delivery"
            leftBtnDes="custom order"
            rightBtnDes="existing inventory"
            classname="Section4"
       />
       <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            leftBtnDes="order now"
            rightBtnDes="learn more"
            classname="Section5"
       />
       <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Then a New Roof"
            leftBtnDes="order now"
            rightBtnDes="learn more"
            classname="Section6"
       />
       <Section 
            title="Accessories"
            description=""
            leftBtnDes="shop now"
            classname="Section7"
       />
       

   </div>
  )
}

export default Home

