import React from "react";
import "./friend.css";

function Friends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      {user.id === 1 ? null : (
        <li className="sidebarFriend">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="sidebarFriendImg"
          />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
      )}
    </div>
  );
}

export default Friends;
