import React from "react";
import mylogo1 from "../images/mylogo1.png";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import useDataStore from "./useDataStore";

export default function Header() {
  const navigate = useNavigate();

  const [changeLoginStatus, UserState, changeEditStatus, EditState] =
    useDataStore((state) => [
      state.changeLoginStatus,
      state.UserState,
      state.changeEditStatus,
      state.EditState,
    ]);
  console.log(EditState);
  const navigateToLogin = () => {
    navigate("/");
    changeLoginStatus(false);
  };

  // if(UserState === false){
  //     navigate('/');
  // }

  const updateEditStatus = (status) => {
    changeEditStatus(status);
  };

  return (
    <div className="Title">
      <div className="mylogo">
        <img src={mylogo1} alt="" height={100} />
      </div>
      <div className="heading">
        <h1>My Profile</h1>
      </div>
      <div className="buttons">
        {EditState ? (
          <button
            className="editprofilebtn"
            onClick={() => updateEditStatus(false)}
          >
            Save Profile
          </button>
        ) : (
          <button
            className="editprofilebtn"
            onClick={() => updateEditStatus(true)}
          >
            Edit Profile
          </button>
        )}

        <button className="signoutbtn" onClick={navigateToLogin}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
