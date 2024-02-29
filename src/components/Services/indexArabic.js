import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import ServiceItem from  './ServiceItem';
import ServiceData1 from '../../data/Services/services.json';
import ServiceData2 from "../../data/Services/services-arabic.json"

import serviceTopBg from '../../assets/img/service/service-bg.jpg'

function ServicesArabic({classes , full}) {
    const [service] = useState(ServiceData2)
    // const handleToggleSliderData = () => {
    //     // Toggle between the slider data sets
    //     setService(prevData => prevData === ServiceData1 ? ServiceData2 : ServiceData1);
    //   };
    return (
        <div className={`service-area-wrapper ${classes}`}>
            <div className="service-area-top" style={{backgroundImage: `url("${serviceTopBg}")`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" title="Culpa officia deserunt mollit animd laborum" heading="Legal Practice Areas" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container">
                    <div className="row mtn-30">
                         {   full == true ? 
                          service.map(service=>(
                                <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb}/>
                            ))  : 

                             service.slice(0, 3).map(service=>(
                                <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb}/>
                            )) 
                        } 
                    </div>
                </div>
            </div>
            {/* <button onClick={handleToggleSliderData}>chnage</button> */}
        </div>
    );
}


export default ServicesArabic;