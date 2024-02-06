import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

function Member(props) {
    // console.log("MAJHA PROPS AAHE",{props});
    const teamMemberURl = `/team-member/${props.name.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    // console.log({teamMemberURl})
    return (
        <Fragment >
            {props.type === 'page' ? (
                <div className="col-sm-6 col-lg-3 p-5">
                    <div className="team-mem-item">
                        <figure className="member-pic ">
                           
                                <img src={require('../../../assets/img/' + props.profilePic)} alt={props.name}/>
                           
                        </figure>
                        <div className="member-info">
                            <h5><Link className={props.id}>{props.name}</Link></h5>
                            <span className="designation">{props.designation}</span>
                        </div>
                    </div>
                </div>
            ):(
                <div className="team-mem-item">
                    <figure className="member-pic">
                       
                            <img src={require('../../../assets/img/' + props.profilePic)} alt={props.name}/>
                       
                    </figure>
                    <div className="member-info">
                        <h5><Link className={props.id}>{props.name}</Link></h5>
                        <span className="designation">{props.designation}</span>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Member;



{/* <Fragment>
{props.type === 'page' ? (
    <div className="col-sm-6 col-lg-3">
        <div className="team-mem-item">
            <figure className="member-pic">
                <Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                    <img src={require('../../../assets/img/' + props.profilePic)} alt={props.name}/>
                </Link>
            </figure>
            <div className="member-info">
                <h5><Link to={`${process.env.PUBLIC_URL + teamMemberURl}`} className={props.id}>{props.name}</Link></h5>
                <span className="designation">{props.designation}</span>
            </div>
        </div>
    </div>
):(
    <div className="team-mem-item">
        <figure className="member-pic">
            <Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                <img src={require('../../../assets/img/' + props.profilePic)} alt={props.name}/>
            </Link>
        </figure>
        <div className="member-info">
            <h5><Link to={`${process.env.PUBLIC_URL + teamMemberURl}`} className={props.id}>{props.name}</Link></h5>
            <span className="designation">{props.designation}</span>
        </div>
    </div>
)}
</Fragment> */}