import React from "react";
import Image from "next/image";
import styles from './Loader.module.css'


const Loader = () => {
  return (
    <div className={styles.loader}>
           <Image src="/loader.svg" width={128} height={77} />
    </div>
  );
};

export default Loader;
