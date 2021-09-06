import React, { useEffect, useState } from "react";
import Share from "../share/Share";

import "./feed.css";
import axios from "axios";
// import {Posts} from '../../mockData'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61275d4bfc8dcc18388d34ae");
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {/* {Posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))} */}
      </div>
    </div>
  );
}

export default Feed;
