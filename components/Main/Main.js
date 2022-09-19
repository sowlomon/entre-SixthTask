import React from 'react';
// import { FetchUserInfo } from "../../Utils/userDetails";
import { useRouter } from 'next/router';
import { IoLogOut } from "react-icons/io5";
import styles from "./Main.module.scss";


function Main() {

  // const [user, setUser] = useState({});

  const router = useRouter();

  // useEffect(() => {

  //   const [userInfo] = FetchUserInfo();
  //   setUser(userInfo);

  // }, [])

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  }


  return (
    <div className ={styles.mainDiv}>
      <div className={styles.subDiv} onClick = {signOut}>
        <h1 className={styles.text}>
          LOGOUT
        </h1>
        <IoLogOut 
          FontSize = {30}
          className = {styles.image}
        />
      </div>
    </div>
  )
}

export default Main;