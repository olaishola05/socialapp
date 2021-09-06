import React from "react";
import RightBar from "../../rightbar/RightBar";
import SideBar from "../../sidebar/SideBar";
import Feed from "../../feed/Feed";
import TopBar from "../../topbar/TopBar";
import "../profile/profile.css";
// import { Users } from "../../../mockData";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}img/hng.png`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}img/Screenshot.png`}
                alt=""
                className="profileUserImg"
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Ola Ishola</h4>
              <span className="profileInfoDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                nobis iusto accusantium aliquam tempore voluptatum vel minima
                dolor eius cupiditate.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
