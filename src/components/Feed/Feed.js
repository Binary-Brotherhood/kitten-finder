import React from "react";
import FeedPost from "../FeedPost/FeedPost";
import {getPosts} from "../../firebase/firebaseDb";
import "./feed.css";
class Feed extends React.Component{
    state={
        feeds:null
    }
   
    async componentDidMount(){
        try {
            const posts = await getPosts();
            console.log("posts",posts);
            // console.log(posts);
            this.setState({feeds:posts});
            // Handle the fetched posts here
        } catch (error) {
            console.error("There was an error fetching the posts:", error);
        }
    }

    render(){
        return(
            <div className="posts_feed">
                
                {this.state.feeds && this.state.feeds.map((feed,index)=><FeedPost key={index} author={feed.author} download_url={feed.download_url}/>)}
            </div>
        )
    }
}
 
export default Feed;