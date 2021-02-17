import React from "react";
// import "./Product.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/Home.module.css";

// const useStyles = makeStyles((theme) => ({
//   media: {
//     height: 140,
//   },
// }));

const Product = ({ cardInfo }) => {
  // const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={cardInfo.image}
          title={cardInfo.image}
        />
        <CardContent>
          <Typography
            className={styles.truncate}
          >
            {cardInfo.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={styles.lineClamp}
          >
            {cardInfo.description}
          </Typography>
          <span>{cardInfo.price} $</span>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            cardInfo.addProdToCart(cardInfo);
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
