import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { ProductsDetailsRequest } from "../../store/actions/Products";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader";
import styles from "../../styles/Home.module.css";
import { ProductsRequest } from "../../store/actions/Products";

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const paths = data.map((prod) => {
    return {
      params: { id: prod.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
    // 3ayez a3mel dispatch lel action hena
    // el tare2a deh 3'alat bs ana mosh la2e 7al a7san 
  const id = context.params.id;
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const data = await response.json();
  
  return {
    props: { prod: data },
  };
};

const Details = ({ prod }) => {

  const product = useSelector((state) => state.ProductsReducer);
  const loading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const id = prod.id;

  useEffect(() => {
    dispatch(ProductsDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <div className="container-fluid">
      <div className="product-details">
        {!product.length ? (
          <Card className={styles.rootForProdDetails}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={styles.avatar}>
                  R
                </Avatar>
              }
              title={product.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              className={styles.mediaForProdDetails}
              image={product.image && product.image}
              title={product.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                price is: {product.price}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          loading && <Loader />
        )}
      </div>
    </div>
  );
};

export default Details;
