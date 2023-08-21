import React from "react";
import "./feedPost.css";

const FeedPost = ({ author, download_url }) => {
    return (
        <div className="feed-post">
            <div>
                <img src={download_url} alt={author} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="feed-post__author_and_actions">
                <div className="post_author">
                    {author}
                </div>
                <div className="feed-post__actions">
                    <button className="feed-post__like">Like</button>
                    <button className="feed-post__comment">Comment</button>
                </div>
            </div>
        </div>
    );
}

export default FeedPost;