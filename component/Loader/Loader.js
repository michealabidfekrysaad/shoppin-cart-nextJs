import React from "react";
// import loader from "../../../src/assets/loader.svg";
import Image from "next/image";
import styles from '../../styles/Home.module.css'


const Loader = () => {
  return (
    <div className={styles.containerFluidPagination}>
           <Image src="/loader.svg" width={128} height={77} />
    </div>
  );
};

export default Loader;
