import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { ButtonComponent, SearchBox, VerticalLine } from "../../Styles/index";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "96%",
    margin: "10px auto",
  },
  alignItem: {
    display: "flex",
    alignItems: "center",
    color: "#A9A9A9",
    fontSize: "12px",
    cursor: "pointer",
  },
  alignItem1: {
    display: "flex",
    alignItems: "center",
    color: "#000",
    fontSize: "14px",

    margin: "auto 4px",
  },

  FormControl: {
    border: "none",
    padding: "10px 6px",
    background: "transparent",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
});
//component use in cards and in shopping cart
function PriceAndButton(props) {
  const classes = useStyles();
  return (
    <section style={{ width: props?.width }} className={classes.root}>
      <div>
        <Typography
          variant="h6"
          style={{ color: props.color, fontWeight: "bold" }}
        >
          {props.price} USD
        </Typography>
        <Typography className={classes.alignItem}>48.56 USD</Typography>
      </div>
      <div>
        {props.place === "cards" ? (
          <ButtonComponent
            onClick={() => props.handleAddToCart(props.ele)}
            className={classes.Button}
          >
            Buy now
          </ButtonComponent>
        ) : (
          <SearchBox>
            <Typography className={classes.alignItem1}> Pcs1</Typography>
            <VerticalLine />
            <select required className={classes.FormControl}>
              <option value="" disabled selected hidden>
                Pcs
              </option>

              <option value={1}>{1}</option>
            </select>
          </SearchBox>
        )}
      </div>
    </section>
  );
}

export default PriceAndButton;
