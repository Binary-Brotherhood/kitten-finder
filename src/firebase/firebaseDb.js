import {ref, set, onValue, get} from 'firebase/database';
import {db} from './firebase';
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { ref as storageRef, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function readUserData(userId) {
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

async function getPosts(){
  console.log("getPosts");
  const q = query(collection(db, "posts"));
  const querySnapshot = await getDocs(q);
  let posts = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    posts.push(doc.data());
  });
  console.log(posts);
  return posts;
  
}
// async function uploadImage(file){
//   console.log("uploadImage");
//   if (file) {
//     const storage = storageRef(db, `images/${file.name}`);
//     const uploadTaskSnapshot = await uploadBytes(storage, file);
//     const url = await getDownloadURL(uploadTaskSnapshot.ref);
async function uploadPost(post){
  console.log("uploadPost");
  try {
      if (post.file) {
          const storage = getStorage();
          const storRef = storageRef(storage, `images/${post.file.name}`);
          
          await uploadBytes(storRef, post.file);
          console.log('Uploaded a blob or file!');

          const url = await getDownloadURL(storRef);
          post.download_url = url;
      }

      const docRef = collection(db, "posts");
      await setDoc(doc(docRef), {
          author: post.author,
          download_url: post.download_url,
          likes: post.likes,
          comments: post.comments,
          time_added: post.time_added
      });
  } catch (error) {
      console.error("Error adding document: ", error);
  }
}



export {writeUserData, readUserData, getPosts, uploadPost};