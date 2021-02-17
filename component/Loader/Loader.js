import React from "react";
// import loader from "../../../src/assets/loader.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
           <Image src="/loader.svg" width={128} height={77} />
    </div>
  );
};

export default Loader;
