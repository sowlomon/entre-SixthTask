import React from 'react';
import { useRouter } from 'next/router';
import {app} from "../firebase-config";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { FcGoogle } from "react-icons/fc"
import styles from "../styles/Home.module.scss"



function Login() {
  const router = useRouter();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  

  const signIn = async () =>{
    const {user} = await signInWithPopup( firebaseAuth, provider);
    const {refreshToken, providerData} = user;
    
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    router.push("/");
  }

  return (
    <div className={styles.main}>
      <div className={styles.LogsubMain} onClick={signIn}>
        <FcGoogle fontSize={30} />
        <p className={styles.Gtext}>Sign in with Google</p>
      </div>
    </div>
  )
}

export default Login;