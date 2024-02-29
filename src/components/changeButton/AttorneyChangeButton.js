import React, { useState } from 'react'
import SliderArabic from '../Slider/home-one/indexArabic'
import Slider from '../Slider/home-one/index'
import About from '../About/home-one'
import AboutArabic from '../About/home-one/indexArabic'
import Services from '../Services'
import ServicesArabic from '../Services/indexArabic'
import TeamArabic from '../Team/home-one/indexArabic'
import Team from '../Team/home-one'
import BlogArabic from '../Blog/index.Arabic'
import Blog from '../Blog'
import AttorneysGroup from '../../templates/Team/AttorneysGroup'
import PageHeader from '../PageHeader'
import AttorneysGroupArabic from '../../templates/Team/AttorneysGroupArabic'

const AttorneyChangeButton = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <button style={{ color: " red", border: "2px solid black" }} onClick={handleToggle}>{toggle ? "Change to English" : "Change to Arabic"}</button>
      {toggle ? (<> <PageHeader
       
        bgImg={require("../../assets/img/page-header.jpg")}
      
      />
      {/* <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="<b>Businex</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            /> */}
      {/* <TeamMember/> */}
      <AttorneysGroupArabic /> </>) : (<> <PageHeader
       
       bgImg={require("../../assets/img/page-header.jpg")}
     
     />  <AttorneysGroup/></>)}


    </div>
  )
}

export default AttorneyChangeButton
