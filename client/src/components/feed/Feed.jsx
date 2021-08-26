import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className="feedwrapper">
                <Share />
                <Post/>
            </div>
        </div>
    )
}

export default Feed
