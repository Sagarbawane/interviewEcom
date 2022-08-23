import React, { useContext } from "react";
import Catergories from "./Catergories";
import Price from "./Price";
import Rating from "./Rating/Rating";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./CatergoryFilterSectionStyles/index.css";

import { AppContext } from "../index";
import { ButtonComponent, CategoryContainer } from "../../Styles/index";
const useStyles = makeStyles({
  root: {
    width: "80%",

    position: "sticky",
    top: "170px",
  },
});

function CategoryFilterSection() {
  const { applyFilters, resetFilter } = useContext(AppContext);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ height: "700px", overflow: "auto" }} className="scrollhost">
        <CategoryContainer>
          <Catergories />
        </CategoryContainer>
        <CategoryContainer>
          <Rating />
        </CategoryContainer>
        <CategoryContainer>
          <Price />
        </CategoryContainer>

        <CategoryContainer>
          <ButtonComponent onClick={applyFilters} className={classes.Button}>
            Apply
          </ButtonComponent>
          <Button style={{ margin: "auto 10px" }} onClick={resetFilter}>
            Reset
          </Button>
        </CategoryContainer>
      </Box>
    </Box>
  );
}

export default CategoryFilterSection;
