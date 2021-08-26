import React from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'

function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="./assets/img/Screenshot.png" alt="" className="postProfileImg" />
                        <span className="postUsername">Ola Ishola</span>
                        <span className="postDate">5 mins ago</span>
                    </div>

                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! My first post on here!!!</span>
                    <img src="./assets/img/mac.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assets/img/like.png" alt="" className="likeIcon" />
                        <img src="./assets/img/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
