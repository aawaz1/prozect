import React from 'react';
import SectionTitle from "../../UI/SectionTitle";

import teamBg from '../../../assets/img/team/team-bg-2.jpg'
import teamData from '../../../data/Team/home-two'
import TeamMember from "./member";

const Team = () => {
    return (
        <div className="team-area bg-brand">
            <div className="row no-gutters align-items-center">
                <div className="col-xl-4">
                    <div className="team-area-left text-center text-md-left">
                        <SectionTitle
                            variant="light"
                            title="Meet Our Lawyers"
                            heading="We have great <br />creative Lawyers"
                            text="<strong>Proident</strong>  sunt culpa officia deserunt mollit animd laborum perspicial"
                        />
                    </div>
                </div>

                <div className="col-xl-8">
                    <div className="team-area-right team-area-right--2 bg-img" style={{backgroundImage:`url(${teamBg})`}}>
                        <div className="row no-gutters align-items-end mtn-40">
                            {
                                teamData.map(member => (
                                    <TeamMember key={member.id} id={member.id} profilePic={member.profilePic} name={member.name} designation={member.designation} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;