import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Heading } from "./CatergoryFilterSectionStyles/index";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

import { AppContext } from "../index";

const GreenCheckbox = withStyles({
  root: {
    color: "#6A983C",

    "&$checked": {
      color: "#6A983C",
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

function Catergories() {
  const { categories, handleChangeCategories, handleChangeSubCategories } =
    useContext(AppContext);

  const [setCheckedState] = useState("");

  return (
    <div>
      <Heading>Catergories</Heading>
      {/* maping through parent array */}
      {categories.map(ele => {
        return (
          <>
            <FormControlLabel
              label={ele.name}
              control={
                <GreenCheckbox
                  checked={ele.checked}
                  onChange={() => {
                    handleChangeCategories(ele.name);
                    setCheckedState(ele.name);
                  }}
                />
              }
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {ele.checked === true && (
                <>
                  {/* maping through child array to get child component */}
                  {ele.subcategory.map(ele => {
                    return (
                      <Box
                        sx={{ display: "flex", flexDirection: "column", ml: 3 }}
                      >
                        <FormControlLabel
                          label={ele.name}
                          control={
                            <GreenCheckbox
                              checked={ele.checked}
                              onChange={() => {
                                handleChangeSubCategories(ele.name);
                              }}
                            />
                          }
                        />
                      </Box>
                    );
                  })}
                </>
              )}
            </Box>
          </>
        );
      })}
    </div>
  );
}
export default Catergories;
