import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { userAccessToken } from "../Utils/userDetails";
import Main from "../components/Main/Main";
// import { IoLogOut } from "react-icons/io5";
import styles from "../styles/Home.module.scss";


function Index () {

  const router = useRouter();
  

  useEffect(() => {
    const accessToken = userAccessToken();
    if(!accessToken) {
      router.push("/login")
    };

  }, []);

  return (
    <div className={styles.main}>
     <div className={styles.indexSubMain}>
        <Main />
     </div>

    </div>
  )
}

export default Index;
