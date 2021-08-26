import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

function TopBar() {
    return (
        <div className='topbarContainer'>
           <div className="topbarLeft">
               <span className="logo">Olaish</span>
           </div>
           <div className="topbarCenter">
               <div className="searchBar">
                    <Search className='searchIcon' />
                    <input placeholder='search fro friends, posts or videos' className="searchInput" />
               </div>
           </div>
           <div className="topbarRight">
               <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
               </div>

               <div className="topbarIcons">
                   <div className="topbarIconItem">
                        <Person />

                        <span className="topbarIconBadge">1</span>
                   </div>

                   <div className="topbarIconItem">
                        <Chat />

                        <span className="topbarIconBadge">2</span>
                   </div>

                   <div className="topbarIconItem">
                        <Notifications />

                        <span className="topbarIconBadge">10</span>
                   </div>    
               </div>
           </div>

           <img src="./assets/img/Screenshot.png" alt="" className="topbarImg" />
        </div>
    )
}

export default TopBar
