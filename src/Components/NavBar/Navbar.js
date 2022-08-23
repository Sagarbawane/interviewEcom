import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import { DataCategorySlider } from "../CategorySlider/DataCatergorySlider";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import { Badge, Box, Typography, InputBase } from "@material-ui/core";

import { useSelector } from "react-redux";

import { SearchBox, VerticalLine } from "../../Styles/index";
const useStyles = makeStyles({
  NavBar: {
    background: "#FFF",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "96%",
    margin: "16px auto 0px",
    padding: "16px 0px",
  },
  title: {
    color: "#333",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "26px",
  },

  searchIcon: {
    padding: "10px 10px 10px",
    height: "50%",
    display: "flex",
    alignItems: "right",
    justifyContent: "right",
  },
  inputRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    paddingLeft: "5px",
  },
  inputInput: {
    color: "#333",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
  },
  selectSection: {
    width: "96%",
    margin: "auto",
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

  Icon: {
    margin: "auto 0px auto 20px",
  },
});

function NavBar(props) {
  const classes = useStyles();
  const productList = useSelector(state => state.Cart);

  return (
    <Box className={classes.NavBar}>
      <nav className={classes.root}>
        <Typography className={classes.title}>Sample Ecom</Typography>
        <SearchBox style={{ width: "30%" }}>
          <select required className={classes.FormControl}>
            <option value="" disabled selected hidden>
              Sample Ecom
            </option>
            {DataCategorySlider.map(ele => {
              return (
                <>
                  <option value={ele.Category}>{ele.Category}</option>
                </>
              );
            })}
          </select>
          <VerticalLine />

          <InputBase
            placeholder="Search Products, categories ..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="small" />
          </div>
        </SearchBox>
        <div className={classes.searchIcon}>
          <span className={classes.Icon}>
            <PersonOutlineOutlinedIcon fontSize="medium" />
          </span>

          <span
            onClick={() => {
              props.handleClickOpen();
            }}
            className={classes.Icon}
          >
            <Badge badgeContent={productList?.length} color="error">
              <ShoppingBasketOutlinedIcon fontSize="medium" />
            </Badge>
          </span>
        </div>
      </nav>
    </Box>
  );
}

export default NavBar;
