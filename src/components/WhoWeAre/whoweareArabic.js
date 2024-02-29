import React, { useState } from 'react';
import AboutUs from './aboutus';
import AboutUsarabic from './AboutUsarabic';


const WhoWeAreSection = () => {
//   const [isArabic, setIsArabic] = useState(false);

//   const changeLanguage = () => {
//     setIsArabic(prevState => !prevState);
//   };

  return (
    <div className="who-we-are-section">
       <AboutUsarabic />
     
    </div>
  );
};

export default WhoWeAreSection;
