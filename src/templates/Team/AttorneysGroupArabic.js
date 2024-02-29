import React, { useState } from "react";
import team1 from "../../data/Team/AttorneysMember.json";
import team2 from '../../data/Team/AttorneysMemberArab.json'

import AttorneysMember from "../../components/Team/home-one/AttorneysMember";

const AttorneysGroupArabic = () => {
  const [team] = useState(team2)
//   const changeLanguage = () => {
//     setTeam(prevData => prevData == team1 ? team2 : team1)
//   }
  return (
    <div className="team-page-area-wrapper bg-offwhite sp-y sm-top">
      <div className="container">
        <h2 className=" mb-5 pagename border border-2 border-danger mr-1 text-center">Partners at Attorneys</h2>
        <div className="row mtn-30">
          {team.map((member) => (
            <AttorneysMember
              key={member.id}
              type={"page"}
              id={member.id}
              name={member.name}
              designation={member.designation}
              profilePic={member.profilePic}
            />
          ))}
        </div>
      </div>
      {/* <button onClick={changeLanguage}>{team === team1 ? "change to arabic" : "change to english"}</button> */}
    </div>
  );
};

export default AttorneysGroupArabic;
