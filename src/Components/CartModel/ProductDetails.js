import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, Box } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../../Redux/Actions/ProductCartAction";
import PriceAndButton from "../Common/PriceAndButton";
import { CardTitle, CardSubTitle } from "../../Styles/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "96%",
    margin: "10px auto",
    position: "relative",
  },
  alignItem: {
    display: "flex",
    alignItems: "center",
    color: "#A9A9A9",
    fontSize: "12px",
    cursor: "pointer",
  },
  image: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
    margin: "6px auto",
  },
  iconProduct: {
    marginRight: " 6px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
  },
});

function ProductDetails() {
  const [heart, setHeart] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.Cart);
  console.log(productList, "data");

  return (
    <>
      {productList.length > 0 ? (
        <>
          {productList?.map((product, index) => {
            return (
              <section key={product.id} className={classes.root}>
                <div>
                  <CardMedia
                    component="img"
                    className={classes.image}
                    image={product?.image}
                    alt="green iguana"
                  />
                  <Typography
                    onClick={() => {
                      setHeart(product.id);
                    }}
                    className={classes.alignItem}
                  >
                    {heart === product.id ? (
                      <FavoriteIcon
                        style={{ color: "red" }}
                        fontSize="small"
                        className={classes.iconProduct}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        fontSize="small"
                        className={classes.iconProduct}
                      />
                    )}
                    Wishlist
                  </Typography>
                  <Typography className={classes.alignItem}>
                    <CompareArrowsIcon
                      fontSize="small"
                      className={classes.iconProduct}
                    />
                    Compare
                  </Typography>
                  {/* deleting particular atom from card */}
                  <Typography
                    onClick={() => {
                      dispatch(RemoveFromCart(product.id));
                    }}
                    className={classes.alignItem}
                  >
                    <CloseIcon
                      fontSize="small"
                      className={classes.iconProduct}
                    />
                    Remove
                  </Typography>
                </div>
                <div style={{ margin: "0px 10px" }}>
                  <CardTitle className={classes.title}>
                    {product?.title}
                  </CardTitle>
                  <CardSubTitle
                    style={{ color: "#151515" }}
                    variant="h6"
                    className={classes.alignItem}
                  >
                    {product?.description.slice(0, 150) + "..."}
                  </CardSubTitle>

                  <PriceAndButton
                    price={product?.price}
                    color="#6A983C"
                    place="modal"
                    width="100%"
                  />
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <Box>
          <Typography className={classes.root}>Cart Is Empty</Typography>
        </Box>
      )}
    </>
  );
}

export default ProductDetails;
