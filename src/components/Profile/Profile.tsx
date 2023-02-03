import React from "react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
    return <div>
        <h1>JC</h1>
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg" >Login</button></div>
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg">Signup</button>
    </div>
  </div>
}
export default Profile;