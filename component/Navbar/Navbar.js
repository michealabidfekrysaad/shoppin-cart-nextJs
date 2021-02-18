import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Home, ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import {
  IncreaseQuantityCart,
  decreaseQuantityCart,
  deleteProductCart,
} from "../../utils/shared";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Dropdown from "../Dropdown/Dropddown";

const Navbar = () => {
  const CartReducer = useSelector((state) => state.CartReducer);

  const increaseProductQty = (product) => {
    IncreaseQuantityCart(product);
  };

  const decreaseProductQty = (product) => {
    if (product.qty !== 1) {
      decreaseQuantityCart(product);
    }
  };

  const deleteProductFromCart = (product) => {
    deleteProductCart(product);
  };

  return (
    <div className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.title} variant="h6" noWrap>
            <Link href="/">
              <Home fontSize="large" />
            </Link>
          </Typography>
          <Typography className={styles.title} variant="h6" noWrap>
            <Link href="/">Home</Link>
          </Typography>
          <Typography className={styles.title} variant="h6" noWrap>
            <Link href="/cart">Cart</Link>
          </Typography>
          <div className={styles.grow} />
          <div className={styles.sectionDesktop}>
            <Dropdown
              badgeContent={CartReducer.total}
              screenAppear={<ShoppingCart fontSize="large" />}
              DropdownBody={
                CartReducer.products.length !== 0 ? (
                  CartReducer.products.map((product) => {
                    return (
                      <React.Fragment key={product.id}>
                        <p
                          className={styles.productActions}
                          onClick={() => decreaseProductQty(product)}
                        >
                          <RemoveIcon
                            style={{ fontSize: 20 }}
                            color="primary"
                          ></RemoveIcon>
                        </p>
                        <img
                          className={styles.cartImage}
                          src={product.image}
                          alt={product.title}
                        />
                        with Qty: {product.qty}
                        <p
                          className={styles.productActions}
                          onClick={() => increaseProductQty(product)}
                        >
                          <Icon style={{ fontSize: 20 }} color="primary">
                            +{" "}
                          </Icon>
                        </p>
                        <p
                          className={styles.productActions}
                          onClick={() => deleteProductFromCart(product)}
                        >
                          <DeleteForeverIcon
                            style={{ fontSize: 20 }}
                            color="primary"
                          />
                        </p>
                        <br />
                      </React.Fragment>
                    );
                  })
                ) : (
                  <p>no product added</p>
                )
              }
            />
            <Dropdown
              screenAppear={<AccountCircleIcon fontSize="large" />}
              DropdownBody={
                <>
                  <Link href="">View / Edit Profile</Link>
                  <br />
                  <Link href="">Sign out</Link>
                </>
              }
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
