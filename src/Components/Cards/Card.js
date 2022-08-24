import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/Actions/ProductCartAction";
import Rating from "@mui/material/Rating";
import PriceAndButton from "../Common/PriceAndButton";
import { CardTitle, CardSubTitle } from "../../Styles/index";

const useStyles = makeStyles({
  root: {
    margin: "16px auto",
    position: "relative",
  },
  cardRoot: {
    display: "flex",
  },
  cardUi: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#FFFFFF",

    borderRadius: "12px",
    border: "1px solid #D1D1D1",
  },
  image: {
    height: "300px",
    width: " 90%",
    margin: "10px auto",
  },
  ContentContainer: {
    width: "90%",
    margin: "10px auto",

    textAlign: "left",
  },
});

function CardSection(props) {
  const classes = useStyles();
  const productList = useSelector(state => state.Cart);
  const dispatch = useDispatch();
  //action for adding data to cart
  const handleAddToCart = product => {
    dispatch(AddToCart(product));
  };

  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={3}
        justify="space-around"
        className={classes.cardRoot}
      >
        {/* maping through card array to display cards */}
        {props.List?.map(ele => {
          return (
            <Grid
              key={ele.id}
              item
              xs={4}
              alignItem="stretch"
              className={classes.cardRoot}
            >
              <Card elevation={0} className={classes.cardUi}>
                <CardMedia
                  component="img"
                  className={classes.image}
                  image={ele.image}
                  alt="green iguana"
                />
                <CardContent className={classes.ContentContainer}>
                  <CardTitle>{ele.title}</CardTitle>

                  <CardSubTitle sx={{ mb: 1.5 }} color="text.secondary">
                    {ele.description.slice(0, 100) + "..."}
                  </CardSubTitle>

                  <Rating
                    style={{ color: "#000" }}
                    name="read-only"
                    value={ele?.rating.rate}
                    readOnly
                  />
                </CardContent>
                <CardActions>
                  <PriceAndButton
                    place="cards"
                    price={ele.price}
                    ele={ele}
                    handleAddToCart={handleAddToCart}
                  />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}

export default CardSection;
