import React, { useState } from "react";
import SkillBar from "../../components/SkillBar";
import Experience from "../../components/Experience";
import { Link } from "react-router-dom";

const SkillsExperience = ({ teamMember }) => {
  const [mColor, setMColor] = useState("");

  const { skills, experiences } = teamMember;
  return (
    <div className="member-details-middle sm-top-wt">
      <div className="row mtn-50">
        <div className="row">
          <div className="col-lg-6">
            <h2>Types of Appointment</h2>
            <select id="colours" onChange={(e) => setMColor(e.target.value)}>
              <option value="Online Appointment $70">
                Online Appointment $70
              </option>
              <option value="Physcial Appointment $90">
                Physcial Appointment $90
              </option>
              <option value="Case Decision  study $25">
                Case Decision study $25
              </option>
            </select>
          </div>
          <div className="col-lg-6 mt-5">
            <h3>{mColor}</h3>
          </div>
        </div>
        <div className="appointmentdiv mt-5">
          <Link to="/BookAppointment">
            <button className="appointmentbtn">Book Appointment</button>
          </Link>
        </div>

        <div className="col-lg-6">
          <div className="skill-experience-area mem-achieve-item">
            <h4>MY SKILLS</h4>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into
            </p>
            <div className="skill-bar-wrap mt-40 mt-sm-30">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.no}
                  title={skill.title}
                  skillPercent={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="my-history-area mem-achieve-item">
            <h4>PRATICE AREAS</h4>

            <div className="history-content-wrap how-we-works-content mt-40 mt-sm-30">
              {experiences.map((experience) => (
                <Experience
                  key={experience.no}
                  designation={experience.designation}
                  icon={experience.icon}
                  comment={experience.comment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
