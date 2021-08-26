import React from 'react'
import RightBar from '../../rightbar/RightBar'
import SideBar from '../../sidebar/SideBar'
import Feed from '../../feed/Feed'
import TopBar from '../../topbar/TopBar'
import '../../pages/home/home.css'

function Home() {
    return (
        <>
            <TopBar />

            <div className="homeContainer">
            <SideBar/>
            <Feed />
            <RightBar />
            </div>
            
        </>
    )
}

export default Home
