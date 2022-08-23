import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import { Typography, Dialog } from "@material-ui/core";
import { ButtonComponent, BigHeading, Heading } from "../../Styles/index";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    right: "1px",
  },
  topScrollPaper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: "50px",
  },
  HeadingSection: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px auto",
  },
  Icon: {
    margin: "10px 8px",
  },
  BottomSection: {
    display: "flex",
    padding: "30px 8px",
    justifyContent: "space-between",
    borderTop: "1px solid #EBEBEB",
  },

  Totol: {
    padding: "10px 8px",
  },
});

function CartModel(props) {
  const productList = useSelector(state => state.Cart);
  let amount =
    productList.length &&
    productList.map(item => item.price).reduce((prev, next) => prev + next);

  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        maxWidth="md"
        classes={{
          scrollPaper: classes.topScrollPaper,
          paperScrollBody: classes.topPaperScrollBody,
        }}
      >
        <section style={{ width: "400px" }}>
          <div className={classes.HeadingSection}>
            <BigHeading>Shopping Cart</BigHeading>
            <CloseIcon onClick={handleClose} className={classes.Icon} />
          </div>
          <div style={{ height: "500px", overflow: "auto" }}>
            <ProductDetails />
          </div>
          <div className={classes.Totol}>
            <Typography variant="small">Subtotal</Typography>
            <Typography variant="h4">{Math.round(amount)} USD</Typography>
          </div>
          <div className={classes.BottomSection}>
            <Heading style={{ marginLeft: "0px" }}>Continue shopping</Heading>
            <ButtonComponent className={classes.Button}>
              Go to Checkout
            </ButtonComponent>
          </div>
        </section>
      </Dialog>
    </div>
  );
}

export default CartModel;
