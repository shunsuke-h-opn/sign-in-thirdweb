import { ConnectWallet, useUser } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.connect}>
        <ConnectWallet
          auth={{
            loginOptional: false,
          }}
        />
      </div>
      {user && <p>You are signed in as {user.address}</p>}
    </div>
  );
};

export default Home;
