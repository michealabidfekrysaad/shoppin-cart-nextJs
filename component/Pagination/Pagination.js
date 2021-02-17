import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <main>
      <ul className={styles.myPagination}>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <Link href="/">
                <a
                  onClick={() => paginate(number)}
                  className={styles.myPageLink}
                >
                  {number}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Pagination;
