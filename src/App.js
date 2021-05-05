import React from "react";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App" style={{ color: "white", fontSize: 40 , textAlign: "center", backgroundColor:"pink"}}>
       <Profile  name="Sirine Ben Gabsia."  bio="I am 25 years old and I live in Nabel."profession="FullStack developper. ">
       <div style={{paddingLeft:"50px", backgroundColor:"pink"}}> 
      <img style={{ width: "300px", borderRadius:"50%",  border: "1px solid #ddd"}}  src="/123.jpg" alt="myimage"   />
       </div> 
     </Profile>
    
    </div>
  );
}
export default App;
