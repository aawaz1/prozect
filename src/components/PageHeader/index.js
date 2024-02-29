import React, { useState } from 'react';
import Input from '../../pages/Input';
import InputAra from '../../pages/InputAra';


const PageHeader = ({bgImg}) => {
    const [isArabic, setIsArabic] = useState(false);
    const changeLanguage = () => {
        setIsArabic(prevState => !prevState);
      };
    return (
        <div className="page-header-area bg-img coming-soon-container " style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-8 m-auto text-center">
                        <div className="page-header-content-inner">
                            <div className="page-header-content">
                              {isArabic ? <InputAra/> : <Input/>}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={changeLanguage}>change</button>
        </div>
    );
};

export default PageHeader;