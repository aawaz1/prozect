import React from "react";
import CountryLawyersDetails from "../../data/Team/CountryLawyersDetails.json";
import TeamMember from "../../components/Team/home-one/Member";
import AttorneysMember from "../../components/Team/home-one/AttorneysMember";
import BookCountryLawyersMember from "../../components/Team/home-one/BookCountryLawyersMember";

const BookCountryLawyersDetails = () => {
  return (
    <div className="team-page-area-wrapper bg-offwhite sp-y sm-top">
      <div className="container">
        <h2 className=" mb-5 text-center">Our Attorna</h2>
        <div className="row mtn-30">
          {CountryLawyersDetails.map((member) => (
            <BookCountryLawyersMember
              key={member.id}
              type={"page"}
              id={member.id}
              name={member.name}
              designation={member.designation}
              profilePic={member.profilePic}
              moredetail={member.moredetail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCountryLawyersDetails;
