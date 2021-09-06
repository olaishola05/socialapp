import React from "react";
import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../mockData";

function RightBar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}img/travel.jpeg`} alt="" className="birthdayImg" />

          <span className="birthdayText">
            <b>John Doe</b>and <b>3 others friends</b> have a birthday
          </span>
        </div>

        <img src={`${PF}img/workspace.jpeg`} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarUserTitle">User Information</h4>

        <div className="rigthbarInfo">
          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Toronto</span>
          </div>

          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">British Columbia</span>
          </div>

          <div className="rigthbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rigthbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}img/travel.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Jeremy Clarkes</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}img/travel.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Mattew Dorsey</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}img/workspace.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Steve Jays</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}img/travel.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Damien Marley</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}img/travel.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Bob Marley</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}img/travel.jpeg`}
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarfollowingName">Nesta Marley</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default RightBar;
