
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { getFirestore, addDoc, doc, collection, setDoc, query, where , getDoc,getDocs } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDjkSc-F8Uzy1JmYXfwgqDuYaI1_YZAtko",
  authDomain: "firstproject-7388d.firebaseapp.com",
  databaseURL: "https://firstproject-7388d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firstproject-7388d",
  storageBucket: "firstproject-7388d.appspot.com",
  messagingSenderId: "326496171217",
  appId: "1:326496171217:web:ef07902811998dab4941f0",
  measurementId: "G-BSQ9RCKZHP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const profileRef = collection(db, "People");



export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
    
        return result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };


  export const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;  
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, user => {
    if (user) {

    }
    else {

    }
  })

const logout = () => {
  console.log("hello you need to login")
  signOut(auth);
  };

const getProfile = async (id) =>{
  const docRef = doc(db, "People", id);
  try {
    const docSnap =  await getDoc(docRef);
    return docSnap;
  } catch(error) {
      console.log(error)
  }
}

 async function setProfile(data, id, RBY) {
    await setDoc(doc(db, "People", id), data,{merge: true});
    // const docRef = doc(db, "People", id);
    
    const q = query(collection(db, "People"), where("referral_id", "==", RBY));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (dox) => {
      // console.log(doc.id, " => ", doc.data());
      console.log("found");
      const snap = await getDoc(doc(db, "People/", dox.id,"/points/points"));
      const t = snap.data()["total"]
      console.log(t);
      await setDoc(doc(db, "People", dox.id), {referred: true},{merge: true});
      await setDoc(doc(db, "People", dox.id, "points", "points"), {total: t+40},{merge: true});
  });
}

const uploadImage = async (image,id) => {
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "geeky_images")
  data.append("cloud_name","udghosh")
  await fetch("https://api.cloudinary.com/v1_1/udghosh/image/upload",{
    method:"post",
    body: data
  })
  .then(resp => resp.json())
  .then(data => {
    setDoc(doc(db, "People", id), {url: data.url},{merge: true});
    console.log("---------"+data.url+"--------");
    return data.url;
  })
  .catch(err => console.log(err))
}

export {
  logout,
  db,
  setProfile,
  uploadImage,
  getProfile
};