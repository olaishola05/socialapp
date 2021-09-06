import React from "react";
import "../online/online.css";

function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div key={user.id}>
      {user.id === 1 ? null : (
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              src={PF + user.profilePicture}
              alt=""
              className="rightProfileImg"
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{user.username}</span>
        </li>
      )}
    </div>
  );
}

export default Online;
