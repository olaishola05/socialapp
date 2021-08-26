import React from "react";
import "./rightbar.css";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/img/travel.jpeg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>John Doe</b>and <b>3 others friends</b> have a birthday
          </span>
        </div>

        <img src="./assets/img/workspace.jpeg" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/img/Screenshot.png"
                alt=""
                className="rightProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">J Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
