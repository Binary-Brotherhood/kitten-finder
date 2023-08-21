import React, {useState, useRef} from "react";
import "./addPostForm.css";
import { uploadPost} from "../../firebase/firebaseDb.js"
const  AddPostForm = () => {
   
        
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const post = {};
        post.title = document.querySelector("input[placeholder='Title']").value;
        post.description = document.querySelector("input[placeholder='Description']").value;
        post.file = selectedFile;
        post.author = "dimass";
        post.likes = 0;
        post.comments = [];
        post.time_added = new Date().getTime();
        console.log(post);
        uploadPost(post);
    };
    return( 
        <div className="addPostForm">
             <h1 className="title">Add Post</h1>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <input type="file" name="file" onChange={changeHandler}/>
                {isFilePicked ? (
                    <div>
                        <div className="fileInfo">Filename: {selectedFile.name}</div>
                        
                    </div>
                ) : (   
                    <p>Select a file to show details</p>
                )}
                <div>
                     <button
                      
                      type="submit" onClick={handleSubmission}>Post</button>
                </div>
        </div>

    );
}

export {AddPostForm};