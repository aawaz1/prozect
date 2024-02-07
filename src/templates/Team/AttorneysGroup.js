import React from "react";
import teamData from "../../data/Team/AttorneysMember.json";
import TeamMember from "../../components/Team/home-one/Member";
import AttorneysMember from "../../components/Team/home-one/AttorneysMember";

const AttorneysGroup = () => {
  return (
    <div className="team-page-area-wrapper bg-offwhite sp-y sm-top">
      <div className="container">
        <h2 className=" mb-5 pagename border border-2 border-danger mr-1 text-center">Partners at Attorneys</h2>
        <div className="row mtn-30">
          {teamData.map((member) => (
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
    </div>
  );
};

export default AttorneysGroup;
