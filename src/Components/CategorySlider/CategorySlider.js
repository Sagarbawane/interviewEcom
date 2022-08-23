import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataCategorySlider } from "./DataCatergorySlider";

const useStyles = makeStyles({
  root: {
    background: "#F9F9F9",

    width: "100%",
  },
  selectSection: {
    width: "96%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
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

function CategorySlider() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Box className={classes.selectSection}>
        {DataCategorySlider.map(ele => {
          return (
            <>
              <select required className={classes.FormControl}>
                {/* default value */}
                <option value="" disabled selected hidden>
                  {ele.Category}
                </option>
                {/* actual value */}
                {ele.subcategory.map(ele => {
                  return <option value={ele}>{ele}</option>;
                })}
              </select>
            </>
          );
        })}
      </Box>
    </section>
  );
}

export default CategorySlider;
