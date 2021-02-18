import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
  useEffect(() => {
    console.log("useEffect run");
    setTimeout(()=>{
        router.push('/')
    },3000)
  }, []);
  return (
    <div>
      <h1>Ooooops ....</h1>
      <h2>This page not found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
