import React from "react";
import Header from "./header.jsx";
import "./loginpage.scss";
import useDataStore from "./useDataStore.js";
import Card from "react-bootstrap/Card";

export default function Profilepage() {
  const [
    UserName,
    UserEmail,
    UserPic,
    UserPhone,
    UserBio,
    EditState,
    saveUserName,
    saveUserEmail,
    saveUserPhone,
    saveUserBio,
    saveUserPic,
  ] = useDataStore((state) => [
    state.UserName,
    state.UserEmail,
    state.UserPic,
    state.UserPhone,
    state.UserBio,
    state.EditState,
    state.saveUserName,
    state.saveUserEmail,
    state.saveUserPhone,
    state.saveUserBio,
    state.saveUserPic,
  ]);

  const updateName = (event) => {
    saveUserName(event.target.value);
  };
  const updateEmail = (event) => {
    saveUserEmail(event.target.value);
  };
  const updatePhone = (event) => {
    saveUserPhone(event.target.value);
  };
  const updateBio = (event) => {
    saveUserBio(event.target.value);
  };
  const updatePic = (event) => {
    saveUserPic(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="page">
      <div>
        <Header />
      </div>
      <div className="profile-body">
        <Card className="imgclass">
          {EditState ? (
            <input type="file" onChange={updatePic} />
          ) : (
            <Card.Img variant="left" src={UserPic} className="mypic" />
          )}
        </Card>
        <Card className="bodyclass">
          <Card.Body>
            <Card.Text>
              {EditState ? (
                <>
                  <p className="mypara">
                    <b>Full Name:</b>&nbsp;
                    <input type="text" onChange={updateName} />
                  </p>
                  <p className="mypara">
                    <b>Email ID:</b>&nbsp;
                    <input type="email" onChange={updateEmail} />
                  </p>
                  <p className="mypara">
                    <b>Phone Number:</b>&nbsp;
                    <input type="tel" onChange={updatePhone} />
                  </p>
                  <p className="mypara">
                    <b>Bio:</b>&nbsp;
                    <input type="text" onChange={updateBio} />
                  </p>
                </>
              ) : (
                <>
                  <p className="mypara">
                    <b>Full Name:</b>&nbsp;
                    {UserName}
                  </p>
                  <p className="mypara">
                    <b>Email ID:</b>&nbsp;
                    {UserEmail}
                  </p>
                  <p className="mypara">
                    <b>Phone Number:</b>&nbsp;
                    {UserPhone}
                  </p>
                  <p className="mypara">
                    <b>Bio:</b>&nbsp;
                    {UserBio}
                  </p>
                </>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
