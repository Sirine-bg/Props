import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
  const handleAlert= e => {
    e.preventDefault();
    alert("Hi I am Sirine")}
 return (
   <div>
     <h2 style={{marginTop: "0px"}} >Hello my name is {props.name} </h2>
     <h3>  {props.bio}  </h3>
     <h3> I am a {props.profession}  </h3>
     {props.children}
     <button style={{marginRight: "0px"}} onClick={handleAlert}>
       alert
     </button>
    <h6 style={{marginBottom: "0px", paddingBottom: "0px",fontSize:"15px", color:'black'}}>React {props.version || 16} </h6>

   </div>

 );
};
Profile.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
 };
export default Profile
