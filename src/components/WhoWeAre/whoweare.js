// import React, { useState } from 'react';
// import AboutUs from './aboutus';
// import AboutUsarabic from './AboutUsarabic';

// const WhoWeAreSection = () => {
//   const [text , setText] = useState(AboutUs())
//   const changeLanguage = () => {
//     // Toggle between the slider data sets
//     setText(prevData => prevData === AboutUs() ? AboutUsarabic() : AboutUs());
//     console.log(setText)
//   };

//   return (
//     <div className="who-we-are-section" >
//       {text}
//       <button onClick={changeLanguage}>Click here</button>

//     </div>
//   );
// };


// export default WhoWeAreSection;

import React, { useState } from 'react';
import AboutUs from './aboutus';


const WhoWeAreSection = () => {
  const [isArabic, setIsArabic] = useState(false);

  const changeLanguage = () => {
    setIsArabic(prevState => !prevState);
  };

  return (
    <div className="who-we-are-section">
       <AboutUs />
     
    </div>
  );
};

export default WhoWeAreSection;
