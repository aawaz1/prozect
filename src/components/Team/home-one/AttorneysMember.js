import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function AttorneysMember(props) {
  const teamMemberURl = `/team-member/${props.name
    .split(" ")
    .join("-")
    .toLocaleLowerCase()}?id=${props.id}`;
  console.log(props);
  return (
    <Fragment>
      {props.type === "page" ? (
        <div className="col-sm-6 col-lg-3">
          <div className="team-mem-item">
            <figure className="member-pic">
              <div to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                <img
                  src={require("../../../assets/img/" + props.profilePic)}
                  alt={props.name}
                />
              </div>
            </figure>
            <div className="member-info">
              <h5>
                <div to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                  {props.name}
                </div>
              </h5>
              <span className="designation">{props.designation}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="team-mem-item">
          <figure className="member-pic">
            <div to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
              <img
                src={require("../../../assets/img/" + props.profilePic)}
                alt={props.name}
              />
            </div>
          </figure>

          <div className="member-info">
            <h5>
              <div
                to={`${process.env.PUBLIC_URL + teamMemberURl}`}
                className="stretched-link"
              >
                {props.name}
              </div>
            </h5>
            <span className="designation">{props.designation}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AttorneysMember;
