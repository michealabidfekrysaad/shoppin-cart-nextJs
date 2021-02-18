import React from "react";
import { useRouter, Router } from "next/router";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Btn from "../component/Btn/Btn";
import { useSelector } from "react-redux";
import {
  decreaseQuantityCart,
  IncreaseQuantityCart,
  deleteProductCart,
} from "../utils/shared";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Cart = () => {
  const router = useRouter();

  const CartReducer = useSelector((state) => state.CartReducer);

  // const classes = useStyles();
  const increaseProduct = (product) => {
    IncreaseQuantityCart(product);
  };

  const decreaseProduct = (product) => {
    if (product.qty !== 1) {
      decreaseQuantityCart(product);
    }
  };

  const deleteProduct = (product) => {
    deleteProductCart(product);
  };

  const handleSubmit = () => {
    router.push("/order");
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      {CartReducer.products.length !== 0 ? (
        <div>
          <TableContainer component={Paper} className={styles.align}>
            <Table className={styles.table} aria-label="simple table">
              <TableHead>
                <TableRow className={styles.align}>
                  <TableCell>Image</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {CartReducer.products.map((prod) => {
                  return (
                    <TableRow key={prod.id}>
                      <TableCell
                        component="th"
                        className={styles.prodCell}
                        scope="row"
                      >
                        <img
                          className={styles.prodImage}
                          src={prod.image}
                          alt={prod.title}
                        />
                      </TableCell>
                      <TableCell className={styles.prodTitle}>
                        {prod.title}
                      </TableCell>
                      <TableCell>
                        {prod.qty} * {prod.price}
                      </TableCell>
                      <TableCell className={styles.prodTotal}>
                        {prod.total}
                      </TableCell>
                      <TableCell>
                        <Btn
                          size="small"
                          variant="contained"
                          color="secondary"
                          content="-"
                          handleClick={() => decreaseProduct(prod)}
                        />
                        &nbsp;
                        <Btn
                          size="small"
                          variant="contained"
                          color="primary"
                          content="+"
                          handleClick={() => increaseProduct(prod)}
                        />
                      </TableCell>
                      <TableCell>
                        <Btn
                          size="small"
                          variant="contained"
                          color="secondary"
                          content="Remove"
                          handleClick={() => deleteProduct(prod)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={styles.submitDiv}>
            <Btn
              size="small"
              variant="outlined"
              color="default"
              content="Submit"
              handleClick={() => handleSubmit()}
            />
            &nbsp;
          </div>
        </div>
      ) : (
        <div>You have no products go add to cart</div>
      )}
    </>
  );
};

export default Cart;
