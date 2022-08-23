import React, { useState, createContext, useEffect } from "react";
import NavBar from "./NavBar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import CategorySlider from "./CategorySlider/CategorySlider";
import CategoryFilterSection from "./CategoryFilterSection/CategoryFilterSection";
import CardModel from "./CartModel/CartModel";
import Card from "./Cards/Card";

import { Grid, Box } from "@mui/material";
import { cardData, Rating, Categories } from "./Constant/index";

const useStyles = makeStyles({
  dataSection: {
    width: "96%",
    margin: "30px auto",
  },
});
// setting context
export const AppContext = createContext(null);

const Index = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState([100, 500]);
  const [categories, setCategories] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [List, setList] = useState([]);
  const [reload, setReload] = useState(0);
  // function to open model of shopping cart
  const handleOpenClick = () => {
    setOpen(true);
  };

  // function to  check which checkbox is click in rating section and mark checked equal to true of particular object
  const handleChangeRating = rating => {
    const ratingList = ratings;
    const changeCheckedRating = ratingList.map(item =>
      item.rating === rating ? { ...item, checked: !item.checked } : item
    );
    setRatings(changeCheckedRating);
  };
  // function to  check which checkbox is click in categories section and mark checked equal to true of particular object
  const handleChangeCategories = category => {
    const categoryList = categories;
    const changeCheckedCategory = categoryList.map(item =>
      item.name === category ? { ...item, checked: !item.checked } : item
    );

    setCategories(changeCheckedCategory);
  };
  // function to  check which checkbox is click in sub categories section and mark checked equal to true of particular object
  const handleChangeSubCategories = category => {
    const categoryList = categories;
    const changeCheckedCategory = categoryList.map(item => ({
      ...item,
      subcategory: item.subcategory.map(ele =>
        ele.name === category ? { ...ele, checked1: !ele.checked1 } : ele
      ),
    }));

    setCategories(changeCheckedCategory);
  };
  // function to get update price value on slider
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = cardData;
    //fiter orignal array base on category checkbox event
    const categoryChecked = categories
      .filter(item => item.checked)

      .map(item => item.name);

    //update orignal array base on category checkbox event
    if (categoryChecked.length) {
      updatedList = updatedList.filter(item => {
        return categoryChecked.includes(item.category);
      });
    }
    //filtere orignal array base on sub category checkbox event
    let subCategoryChecked = categories
      .filter(element =>
        element.subcategory.some(subElement => subElement.checked1)
      )
      .map(element => {
        return Object.assign({}, element, {
          subcategory: element.subcategory.filter(
            subElement => subElement.checked1
          ),
        })?.subcategory.map(ele => {
          return ele.name;
        });
      });

    //update orignal array base on subcategory checkbox event

    if (subCategoryChecked.length) {
      updatedList = updatedList.filter(item => {
        return subCategoryChecked[0].includes(item.subCategory);
      });
    }
    //filter orignal array base on rating checkbox event
    const ratingChecked = ratings
      .filter(item => item.checked)
      .map(item => item.rating);
    //update orignal array base on rating checkbox event
    if (ratingChecked.length) {
      updatedList = updatedList.filter(item =>
        ratingChecked.includes(item.rating.rate)
      );
    }
    //get min and max price of prices slider
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    //update orignal array base on t min and max price of prices slider
    updatedList = updatedList.filter(
      item => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
  };
  const resetFilter = () => {
    setList(cardData);
  };

  useEffect(() => {
    //set data from array to render card list
    setList(cardData);
    setRatings(Rating);
    setCategories(Categories);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedPrice,
        handleChangePrice,
        applyFilters,
        resetFilter,
        ratings,
        handleChangeRating,
        categories,
        handleChangeCategories,
        handleChangeSubCategories,
      }}
      // use context to get data in child component
    >
      <div style={{ position: "relative" }}>
        <Box
          component="div"
          sx={{ position: "sticky", top: "0px", zIndex: open ? "9" : "99999" }}
        >
          <NavBar handleClickOpen={handleOpenClick} />
          <CategorySlider />
        </Box>
        <div className={classes.dataSection}>
          <Grid container spacing={2} justify="space-between">
            <Grid item xs={3}>
              <CategoryFilterSection />
            </Grid>
            <Grid item xs={9}>
              <Card List={List} />
            </Grid>
          </Grid>
        </div>
        <CardModel open={open} setOpen={setOpen} />
      </div>
    </AppContext.Provider>
  );
};

export default Index;
