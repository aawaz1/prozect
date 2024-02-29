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
import About2Arabic from '../About/home-two/index.arabic'
import About2 from '../About/home-two'
import WhoWeAreSectionArab from '../WhoWeAre/whoweareArabic'
import WhoWeAreSection from '../WhoWeAre/whoweare'

const HomeTwochangeButton = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <button style={{ color: " red", border: "2px solid black" }} onClick={handleToggle}>{toggle ? "Change to English" : "Change to Arabic"}</button>
      {toggle ? (<>  <About2Arabic/>, <WhoWeAreSectionArab/>   </>) : (<> <About2/>, <WhoWeAreSection/> </>)}


    </div>
  )
}

export default HomeTwochangeButton
